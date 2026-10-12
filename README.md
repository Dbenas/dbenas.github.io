# Portfólio — Dryelson Silva

Site estático (HTML + CSS + JS, sem build). Arquivos em `site/`.

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
- **GitHub Pages:** já configurado em `.github/workflows/pages.yml`. Cada push na `main` publica a pasta `site` em https://dbenas.github.io (repositório `dbenas.github.io`, Settings → Pages → Source: GitHub Actions).

## Adicionar um projeto

Copie um objeto dentro de `PROJECTS` em `script.js` e edite. Card e painel de detalhes atualizam sozinhos. A ordem do array é a ordem no site (o primeiro vira destaque).
