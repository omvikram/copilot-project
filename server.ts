/**
 * Initializes and starts an Express server.
 *
 * - Imports the Express framework.
 * - Creates an Express application instance.
 * - Determines the port to listen on from the environment variable `PORT`, defaulting to 3000.
 * - Defines a single route handler for the root path (`/`) that responds with "Hello, world!".
 * - Starts the server and logs the URL to the console when ready.
 */
import express from 'express';


const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});