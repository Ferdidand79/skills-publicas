---
name: guardar
description: Guarda un link, video, artículo o idea en la bandeja de entrada (inbox) de tu vault de conocimiento desde cualquier proyecto, para procesarlo después. Úsala con "/guardar <link o idea>", "guarda esto en mi conocimiento", "apúntalo para después".
---

# Guardar en el inbox de Conocimiento

Destino: la carpeta inbox de tu vault de conocimiento, por ejemplo `<RUTA_DEL_VAULT>/raw/_inbox/`.
Configura la ruta una vez (en `GEMINI.md`, `AGENTS.md` o tus memorias). Si no está definida o la carpeta no existe en esta PC, pregunta la ruta y no la inventes.

1. Toma lo que pasó el usuario (argumentos o lo que se esté hablando). Si no dio nada, pregunta qué guardar.
2. Crea **un** archivo `AAAA-MM-DD-<tema-corto>.md`, con un nombre en minúsculas y con guiones. Si ya existe, agrega `-2`. Ponle este contenido:

```
<link o links, uno por línea, primero>

Por qué me interesa: <lo que dijo el usuario, o una frase deducida del contexto>
Origen: <nombre de la carpeta del proyecto actual> · <fecha>
Experiencia propia: sí/no
```

   Una idea sin link va como texto libre en lugar de la línea de links.
3. No proceses el inbox, no edites nada más del vault y no hagas commit.
4. Confirma en una línea: "Guardado en el inbox: `<archivo>`."
