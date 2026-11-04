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

## Licencia

Las skills de `skills/` son MIT (ver [LICENSE](LICENSE)). Las de terceros conservan la licencia de su repositorio.
