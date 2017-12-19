module.exports = ({ title }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet">
        <link rel="stylesheet" href="/assets/index.css" />
      </head>

      <body>
        <div id="root"></div>
      </body>

      <script src="/assets/index.js"></script>
    </html>
  `;
};
