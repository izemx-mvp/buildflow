import { errorContent } from "../content/site";

export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>${errorContent.loadTitle.fr}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
      [data-lang="en"] { display: none; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1 data-lang="fr">${errorContent.loadTitle.fr}</h1><h1 data-lang="en">${errorContent.loadTitle.en}</h1>
      <p data-lang="fr">${errorContent.loadText.fr}</p><p data-lang="en">${errorContent.loadText.en}</p>
      <div class="actions">
        <button data-lang="fr" class="primary" onclick="location.reload()">${errorContent.retry.fr}</button>
        <button data-lang="en" class="primary" onclick="location.reload()">${errorContent.retry.en}</button>
        <a data-lang="fr" class="secondary" href="/">${errorContent.goHome.fr}</a>
        <a data-lang="en" class="secondary" href="/">${errorContent.goHome.en}</a>
      </div>
    </div>
    <script>if(localStorage.getItem('buildflow-language')==='en'){document.documentElement.lang='en';document.querySelectorAll('[data-lang="fr"]').forEach(e=>e.style.display='none');document.querySelectorAll('[data-lang="en"]').forEach(e=>e.style.display='');}</script>
  </body>
</html>`;
}
