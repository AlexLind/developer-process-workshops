import express from 'express';
import apicache from 'apicache';
import router from './src/routers/menu.js';
const app = express();
const port = 3000;
let cache = apicache.middleware;

app.use(cache('24 hours')); // Cache all routes for 24 hours
app.use('/', router)

app.use((error, req, res, next) => {
    if (error) {
        console.error(error);
    }
    res.status(500).send(error.message);
})

app.listen(port, () => console.log(`App listening on port ${port}!`));

