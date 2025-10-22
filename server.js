const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>HNG Stage 1</title>
            <style>
                body {
                    font-family: Arial;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: white;
                }
                .container {
                    text-align: center;
                    padding: 40px;
                    background: rgba(255, 255, 255, 0.1);
                    border-radius: 10px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>HNG Stage 1 - Automated Deployment</h1>
                <p>Successfully deployed via Bash automation script!</p>
                <p>Server Time: ${new Date().toLocaleString()}</p>
            </div>
        </body>
        </html>
    `);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});
