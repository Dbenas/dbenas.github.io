# Portfólio — Dryelson Silva

Site estático (HTML + CSS + JS, sem build).

- `index.html` — estrutura e textos fixos
- `styles.css` — visual (cores no topo, em `:root`)
- `script.js` — conteúdo editável: projetos (`PROJECTS`), experiência (`ROLES`), certificações (`CERTS`)
- `assets/projetos/<id>.webp` — print de cada projeto (o nome do arquivo = `id` do projeto)
- `assets/foto.jpg` — foto

## Rodar local

```bash
npm run dev
```

## Publicar

- **Vercel / Netlify:** arraste a pasta `site` ou aponte o projeto para ela.
- **GitHub Pages:** suba o conteúdo de `site` num repositório e ative Pages na branch `main`.

## Adicionar um projeto

Copie um objeto dentro de `PROJECTS` em `script.js` e edite. Card e painel de detalhes atualizam sozinhos. A ordem do array é a ordem no site (o primeiro vira destaque).
