---
name: estatus
description: Resume en pocas líneas dónde quedó el proyecto actual y qué hacer ahora. Úsala cuando el usuario pida "/estatus", "¿cuál es el estatus?", "¿dónde quedé?", "retoma este proyecto", "¿qué debo hacer ahora para continuar con el plan?" o "¿está subido a git?".
---

# Estatus del proyecto

El usuario retoma proyectos seguido y quiere una respuesta corta, no un informe.

## Reúne (sin leer el proyecto entero)

1. Si el contexto ya trae un resumen de inicio de sesión (estado de git, últimos commits), úsalo. Si no, ejecuta `git status --short`, `git log -5 --format="%cr: %s"` y `git rev-list --count @{u}..HEAD`.
2. Lee solo los archivos de plan que existan: `ESTADO*.md`, `PLAN*.md`, `ROADMAP*.md`, `TODO*.md`, `PENDIENTES*.md`, el archivo de instrucciones del agente (`GEMINI.md`, `AGENTS.md` o `CLAUDE.md`) y `README.md` (en ese orden; para cuando ya sepas el siguiente paso).
3. Revisa las memorias de este proyecto, si las hay.

## Responde con este formato, en español, máximo unas 10 líneas

**Estado:** una o dos frases (qué está hecho y si git está al día o falta subir).
**Siguiente paso:** la acción concreta que sigue según el plan.
**Decidir:** lo que necesita una decisión del usuario, o "nada por ahora".

No propongas más de un siguiente paso. Si no hay plan escrito, dilo y ofrece crear un `ESTADO.md` corto.
