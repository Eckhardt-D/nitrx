import { h } from 'nano-jsx';

export const Base = ({ children }) => {
 return (
    <html lang='en'>
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Nitrx 🔥</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔥</text></svg>"/>
        <script src="https://unpkg.com/htmx.org@1.9.3"/>
        <script src="https://unpkg.com/hyperscript.org@0.9.9"/>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css"/>
        <link rel="stylesheet" href="/styles.css"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}