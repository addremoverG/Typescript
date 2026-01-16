// import express from 'express';
// import type { Request, Response } from 'express';
// import cors from 'cors';
// import path from 'node:path';

// const app = express();
// // Use the new native ESM property
// const buildPath = path.join(import.meta.dirname, '../../client/dist');

// app.use(cors());
// app.use(express.json());
// // Serve static files from the React build
// app.use(express.static(buildPath));

// app.get('/api/hello', (req: Request, res: Response) => {
//   res.json({ message: "Hello from Node.js!" });
// });

// // The {*splat} syntax tells Express 5 to match everything and name it "splat"
// app.get('/{*splat}', (req, res) => {
//   res.sendFile(path.join(buildPath, 'index.html'));
// });

// app.listen(5000, () => console.log('Server running on port 5000'));
import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import path from 'node:path';

// 1. Define a shared interface
interface UserData {
  id: number;
  message: string;
}

const app = express();
app.use(cors());
app.use(express.json());

// 2. Simple API Endpoint
app.get('/api/data', (req: Request, res: Response<UserData>) => {
  res.json({ id: 1, message: "Hello from the TypeScript Server!" });
});

// 3. Static Files & SPA Routing (Express 5 Syntax)
const buildPath = path.join(import.meta.dirname, '../../client/dist');
app.use(express.static(buildPath));

app.get('/{*splat}', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
