export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Server Error — Subday Pizza</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        background-color: #121618;
        color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        display: flex;
        min-height: 100vh;
        align-items: center;
        justify-content: center;
        text-align: center;
      }
      .card {
        max-width: 480px;
        padding: 2.5rem 1.5rem;
        background: #15191b;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 1.5rem;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
      }
      h1 {
        font-size: 3rem;
        margin: 0;
        color: #fac564;
      }
      h2 {
        font-size: 1.25rem;
        margin: 0.5rem 0 1rem;
      }
      p {
        color: rgba(255, 255, 255, 0.6);
        font-size: 0.875rem;
        line-height: 1.5;
        margin-bottom: 1.5rem;
      }
      a {
        display: inline-block;
        background: #fac564;
        color: #000000;
        padding: 0.625rem 1.5rem;
        border-radius: 9999px;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 0.75rem;
        letter-spacing: 0.1em;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>500</h1>
      <h2>Temporary Server Disruption</h2>
      <p>Our kitchen encountered an unexpected issue processing this request. Please refresh or return to the homepage.</p>
      <a href="/">Return to Subday Pizza</a>
    </div>
  </body>
</html>`;
}
