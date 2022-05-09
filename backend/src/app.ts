// Import the express in typescript file
import exp from 'constants';
import express from 'express';
import { read, readFile, readFileSync } from 'fs';
import path from 'path';

// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: number = 3000;

// Handling '/' Request
app.use("/", express.static("frontend"));
// app.get('/', (_req, _res) => {
    // _res.send("TypeScript With Expresss");
// });

// Server setup
app.listen(port, () => {
    console.log(`TypeScript with Express
		http://localhost:${port}/`);
});


