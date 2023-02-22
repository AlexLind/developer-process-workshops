import express from 'express';
import router from './src/routers/menu.js';
const app = express();
const port = 3000;

app.use('/', router)

app.use((error, req, res, next) => {
    if (error) {
        console.error(error);
    }
    res.status(500).send(error.message);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

