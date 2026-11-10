# skills-publicas

Las skills que uso con mis agentes de IA (Claude Code, Gemini CLI), en versión pública.

- `skills/` tiene las skills **mías**, limpias de rutas y datos personales.
- Las skills **de terceros** no se copian aquí: abajo está el índice con su repositorio original, para instalarlas desde la fuente (así se respetan sus licencias y te llegan sus actualizaciones).

Todas usan el formato abierto **Agent Skills** (`<nombre>/SKILL.md` con frontmatter `name` + `description`), que entienden Claude Code y Gemini CLI.

## Instalar en Gemini CLI

Opción A, con el instalador de skills (detecta el agente y copia a su carpeta):

```bash
npx skills add Ferdidand79/skills-publicas
```

Opción B, a mano: copia cada carpeta de `skills/` dentro de `~/.gemini/skills/` (o `.gemini/skills/` en un proyecto).

```bash
git clone https://github.com/Ferdidand79/skills-publicas.git
cp -r skills-publicas/skills/* ~/.gemini/skills/
```

Las de terceros se instalan igual, con su repo: `npx skills add <owner>/<repo>` (puedes elegir cuáles skills del repo).

## Skills mías

| Skill | Qué hace |
|---|---|
| [estatus](skills/estatus/SKILL.md) | Resume en ≤10 líneas dónde quedó un proyecto, el siguiente paso y qué hay que decidir. |
| [guardar](skills/guardar/SKILL.md) | Guarda un link o idea en el inbox de tu vault de conocimiento para procesarlo después. Configura tu ruta antes de usarla. |

## Skills de terceros que uso

| Fuente | Licencia | Skills |
|---|---|---|
| [anthropics/skills](https://github.com/anthropics/skills) | ver cada skill | academy-guide, algorithmic-art, brand-guidelines, canvas-design, discernment-nudge, doc-coauthoring, frontend-design, internal-comms, mcp-builder, slack-gif-creator, theme-factory, web-artifacts-builder, webapp-testing |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | ver repo | deploy-to-vercel, vercel-cli-with-tokens, composition-patterns, react-best-practices, react-native-skills, react-view-transitions, vercel-optimize, web-design-guidelines, writing-guidelines |
| [vercel-labs/skills](https://github.com/vercel-labs/skills) | MIT | find-skills |
| [emilkowalski/skills](https://github.com/emilkowalski/skills) | MIT | animate, animate-expo, animation-vocabulary, apple-design, ask-sonner, break-ui, emil-design-eng, find-animation-opportunities, improve-animations, mobile-native, pick-ui-library, prototype, review-animations, write-swift |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | MIT | ui-ux-pro-max, design, design-system, ui-styling, brand, banner-design, slides |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | Apache-2.0 | hyperframes, hyperframes-cli, hyperframes-registry, media-use |
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | MIT | huashu-design |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Apache-2.0 | graphify |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | MIT | agent-reach |

También uso un set de skills para YouTube (`yt-plan`, `yt-script`, `yt-shorts`, `yt-seo`…) cuyo origen no tengo identificado, así que no lo enlazo.

## Mi configuración de Claude Code

En [`config/`](config/) está mi configuración base, sin rutas ni datos personales:

| Archivo | Qué es | Dónde va |
|---|---|---|
| [settings.example.json](config/settings.example.json) | Plugins activos, marketplaces, hooks y permisos | `~/.claude/settings.json` |
| [CLAUDE.md](config/CLAUDE.md) | Instrucciones globales (CodeGraph y graphify) | `~/.claude/CLAUDE.md` |
| [hooks/donde-quede.js](config/hooks/donde-quede.js) | Al abrir sesión, resume rama, cambios y últimos commits ("¿Dónde quedé?") | `~/.claude/hooks/` |
| [hooks/respaldo-config.js](config/hooks/respaldo-config.js) | Al cerrar sesión, respalda `~/.claude` en tu propio repo git (en segundo plano) | `~/.claude/hooks/` |
| [claude-gitignore](config/claude-gitignore) | `.gitignore` para versionar solo la config portable de `~/.claude` (nunca credenciales ni sesiones) | `~/.claude/.gitignore` |

### Plugins que uso

| Marketplace | Plugins |
|---|---|
| [anthropics/claude-plugins-official](https://github.com/anthropics/claude-plugins-official) | superpowers, security-guidance, context7, playwright, github, figma, vercel |
| [openai/codex-plugin-cc](https://github.com/openai/codex-plugin-cc) | codex |
| [AccessLint/skills](https://github.com/AccessLint/skills) | accesslint |
| [browserbase/skills](https://github.com/browserbase/skills) | browse, functions, browser-trace, safe-browser, webmcp-gen, add-webmcp |
| [heygen-com/hyperframes](https://github.com/heygen-com/hyperframes) | hyperframes |
| [scasella/claude-flightdeck](https://github.com/scasella/claude-flightdeck) | flightdeck |
| [hamzafer/claude-code-mods](https://github.com/hamzafer/claude-code-mods) | md-preview |

Además uso las skills de Matt Pocock como plugin local (no van en el ejemplo porque dependen de una carpeta de mi PC).

### Instalar

1. Copia los archivos a `~/.claude/` (renombra `settings.example.json` a `settings.json`; si ya tienes uno, fusiónalos a mano).
2. Los hooks necesitan Node.js. El de CodeGraph (`codegraph.cmd prompt-hook`) necesita CodeGraph instalado; si no lo usas, quita ese bloque y el permiso `mcp__codegraph__*`.
3. `respaldo-config.js` solo sirve si `~/.claude` es un repo git con remoto **privado** propio; si no, quita el hook `SessionEnd`.
4. Reabre Claude Code: instalará los plugins de `enabledPlugins`.

## Licencia

Las skills de `skills/` y la configuración de `config/` son MIT (ver [LICENSE](LICENSE)). Las de terceros conservan la licencia de su repositorio.
