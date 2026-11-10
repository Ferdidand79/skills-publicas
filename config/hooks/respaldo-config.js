// SessionEnd: respalda ~/.claude (solo lo que permite .gitignore) en el repo claude-config.
// Se lanza en segundo plano para no frenar el cierre; trae primero los cambios de la otra PC.
const { execFileSync, spawn } = require("child_process");
const fs = require("fs");
const os = require("os");
const path = require("path");

const dir = path.join(os.homedir(), ".claude");
const log = path.join(dir, "respaldo-config.log");

if (process.argv[2] !== "--run") {
  spawn(process.execPath, [__filename, "--run"], { detached: true, stdio: "ignore", windowsHide: true }).unref();
  process.exit(0);
}

const anotar = (msg) => fs.appendFileSync(log, `${new Date().toISOString()} ${msg}\n`);
const git = (...args) => execFileSync("git", ["-C", dir, ...args], { encoding: "utf8", timeout: 60000, stdio: ["ignore", "pipe", "pipe"] }).trim();

try {
  if (git("status", "--porcelain")) {
    git("add", "-A");
    git("commit", "-m", `Respaldo automático ${new Date().toISOString().slice(0, 10)} (${os.hostname()})`);
  }
  try {
    git("pull", "--rebase", "--autostash");
  } catch (e) {
    try { git("rebase", "--abort"); } catch {}
    anotar("Conflicto con la otra PC; no se subió nada. Resolver a mano: " + e.message.split("\n")[0]);
    process.exit(0);
  }
  if (git("rev-list", "--count", "@{u}..HEAD") !== "0") {
    git("push");
    anotar("Respaldo subido.");
  }
} catch (e) {
  anotar("Error: " + e.message.split("\n")[0]);
}
