import * as express from 'express';

let app = express();
let port = 3005;
app.get('/', (req: express.Request, res: express.Response) => {
  res.send(`{"link": "http://www.google.com}"`);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
})
