import express from 'express'
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>sever is ready</h1>')
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            "type": "programming",
            "setup": "If you put a million monkeys at a million keyboards, one of them will eventually write a Java program",
            "punchline": "the rest of them will write Perl",
            "id": 1
        },
        {
            "type": "programming",
            "setup": "Why would a guitarist become a good programmer?",
            "punchline": "He's adept at riffing in C#.",
            "id": 2
        },
        {
            "type": "programming",
            "setup": "Why don't React developers like nature?",
            "punchline": "They prefer the virtual DOM.",
            "id": 3
        },
        {
            "type": "programming",
            "setup": "Why did the programmer go to art school?",
            "punchline": "He wanted to learn how to code outside the box.",
            "id": 4
        },
        {
            "type": "programming",
            "setup": "Why did the programmer bring a ladder to work?",
            "punchline": "They heard the code needed to be debugged from a higher level.",
            "id": 5
        },
        {
            "type": "programming",
            "setup": "A DHCP packet walks into a bar and asks for a beer.",
            "punchline": "Bartender says, \"here, but I’ll need that back in an hour!\"",
            "id": 6
        },
        {
            "type": "programming",
            "setup": "I just got fired from my job at the keyboard factory.",
            "punchline": "They told me I wasn't putting in enough shifts.",
            "id": 7
        },
        {
            "type": "programming",
            "setup": "Where did the API go to eat?",
            "punchline": "To the RESTaurant.",
            "id": 8
        },
        {
            "type": "programming",
            "setup": "A user interface is like a joke.",
            "punchline": "If you have to explain it then it is not that good.",
            "id": 9
        },
        {
            "type": "programming",
            "setup": "Why did the developer go broke buying Bitcoin?",
            "punchline": "He kept calling it byte coin and didn't get any.",
            "id": 10
        }
    ]

    res.send(jokes)
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);

});
