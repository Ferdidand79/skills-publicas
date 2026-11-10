// SessionStart: resume corto del estado git del proyecto, para no tener que preguntar "¿dónde quedé?".
// Si la carpeta no es un repo git, no imprime nada.
const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

let input = {};
try { input = JSON.parse(fs.readFileSync(0, "utf8") || "{}"); } catch {}
const cwd = input.cwd || process.cwd();

const git = (...args) => {
  try {
    return execFileSync("git", ["-C", cwd, ...args], { encoding: "utf8", timeout: 3000, stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch { return null; }
};

if (git("rev-parse", "--is-inside-work-tree") !== "true") process.exit(0);

const rama = git("branch", "--show-current") || "(sin rama)";
const cambios = (git("status", "--porcelain") || "").split("\n").filter(Boolean);
const sinSubir = git("rev-list", "--count", "@{u}..HEAD");
const sinBajar = git("rev-list", "--count", "HEAD..@{u}");
const commits = git("log", "-3", "--format=- %cr: %s") || "(sin commits)";

const raiz = git("rev-parse", "--show-toplevel") || cwd;
const planes = fs.readdirSync(raiz).filter((f) => /^(estado|status|plan|roadmap|todo|pendientes|readme)[^/]*\.md$/i.test(f));

const lineas = [
  `## ¿Dónde quedé? (${path.basename(raiz)})`,
  `Rama: ${rama} · Cambios sin guardar: ${cambios.length}` +
    (sinSubir === null ? " · Sin remoto configurado" : ` · Commits sin subir: ${sinSubir} · Por bajar: ${sinBajar}`),
  "Últimos commits:",
  commits,
];
if (cambios.length) lineas.push("Archivos modificados: " + cambios.slice(0, 8).map((l) => l.slice(3)).join(", ") + (cambios.length > 8 ? "…" : ""));
if (planes.length) lineas.push("Archivos de plan: " + planes.join(", "));
lineas.push("(Usa este contexto si el usuario pregunta por el estatus; no repitas este bloque sin que lo pida.)");

console.log(lineas.join("\n"));
