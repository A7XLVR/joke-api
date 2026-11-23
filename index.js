import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

const jokes = [
    {
        id: 1,
        joke: "Why don't scientists trust atoms?",
        punchline: "Because they make up everything!"
    },
    {
        id: 2,
        joke: "Why did the scarecrow win an award?",
        punchline: "Because he was outstanding in his field!"
    },
    {
        id: 3,
        joke: "Why is the math book sad?",
        punchline: "Because it has too many problems!"
    },
    {
        id: 4,
        joke: "Why did the bicycle fall over?",
        punchline: "Because it was two-tired!"
    },
    {
        id: 5,
        joke: "Why did the coffee file a police report?",
        punchline: "It got mugged!"
    },
    {
        id: 6,
        joke: "Why did the tomato turn red?",
        punchline: "Because it saw the salad dressing!"
    },
    {
        id: 7,
        joke: "Why did the computer go to the doctor?",
        punchline: "It had a virus!"
    },
    {
        id: 8,
        joke: "Why don't skeletons fight each other?",
        punchline: "They don't have the guts!"
    },
    {
        id: 9,
        joke: "Why did the golfer bring two pairs of pants?",
        punchline: "In case he got a hole in one!"
    },
    {
        id: 10,
        joke: "Why did the cookie go to the doctor?",
        punchline: "Because it felt crummy!"
    }
];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/v1/random-joke', (req, res) => {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    res.json(jokes[randomIndex]);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});