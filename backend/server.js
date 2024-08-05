import express from 'express'
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>sever is ready</h1>')
});


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`);

});
