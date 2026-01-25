require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

app.get('/', (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Node.js App</title>
    <style>
        :root {
            --primary: #6366f1;
            --secondary: #a855f7;
            --dark: #0f172a;
            --light: #f8fafc;
        }
        body {
            margin: 0;
            padding: 0;
            font-family: 'Inter', system-ui, -apple-system, sans-serif;
            background: radial-gradient(circle at top right, var(--secondary), var(--dark) 40%);
            color: var(--light);
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            padding: 4rem;
            border-radius: 2rem;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
            text-align: center;
            max-width: 600px;
            width: 90%;
            position: relative;
            z-index: 10;
            animation: float 6s ease-in-out infinite;
        }
        h1 {
            font-size: 3.5rem;
            margin: 0 0 1rem 0;
            background: linear-gradient(to right, #fff, #cbd5e1);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 800;
            letter-spacing: -0.02em;
        }
        p {
            font-size: 1.25rem;
            color: #94a3b8;
            margin-bottom: 2.5rem;
            line-height: 1.6;
        }
        .btn {
            display: inline-block;
            background: linear-gradient(135deg, var(--primary), var(--secondary));
            color: white;
            padding: 1rem 2.5rem;
            border-radius: 9999px;
            text-decoration: none;
            font-weight: 600;
            width: fit-content;
            transition: all 0.3s ease;
            border: 1px solid rgba(255,255,255,0.2);
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.3);
        }
        .btn:hover {
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 0 30px rgba(168, 85, 247, 0.5);
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .blob {
            position: absolute;
            width: 500px;
            height: 500px;
            background: purple;
            border-radius: 50%;
            filter: blur(80px);
            opacity: 0.3;
            z-index: 1;
        }
        .blob-1 { top: -200px; left: -200px; background: var(--primary); }
        .blob-2 { bottom: -200px; right: -200px; background: var(--secondary); }
    </style>
</head>
<body>
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="glass-panel">
        <h1>Welcome Aboard</h1>
        <p>Your Node.js application is seamlessly running in the cloud. Optimized for performance, scalability, and modern deployment standards.</p>
        <a href="#" class="btn">View Dashboard</a>
    </div>
</body>
</html>
  `);
});

app.get('/health', (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
