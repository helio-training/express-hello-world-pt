import Express from 'express';
import BodyParser from 'body-parser';

const app = Express();

app.use(BodyParser.json());
app.use(Express.static('public'));


app.get('/greeting', (req, res) => {
  res.json({ greeting: 'Hello, Tyler'});
});

app.get('/greeting/:name', (req, res) => {
  const name = req.params.name;
  res.json({ greeting: `Hello, ${name}`});
});

app.post('/people', (req, res) => {
  const person = req.body;
  console.log(person);
  return res.send(person);
});



app.listen(3000, () => console.log(`App started at: http://localhost:3000`));
