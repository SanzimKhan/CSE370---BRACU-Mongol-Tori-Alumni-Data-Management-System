// backend.js
const express = require('express');
const path = require('path'); 
const app = express();
const PORT = process.env.PORT || 3000;

const publicDir = path.join(__dirname, 'public');

app.use(express.json());
app.use(express.static(publicDir));

app.get('/', (req, res) => {
    res.sendFile(path.join(publicDir, 'index.html'));
});

// Simple API endpoint to provide alumni data to the React frontend
app.get('/api/alumni', (req, res) => {
    const data = [
        { id: 1, name: 'A. Rahman', year: 2010, role: 'Engineer', bio: 'Software engineer, founder.' },
        { id: 2, name: 'S. Khan', year: 2012, role: 'Researcher', bio: 'Data scientist and researcher.' },
        { id: 3, name: 'M. Ahmed', year: 2008, role: 'Professor', bio: 'Lecturer in CS.' }
    ];
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
