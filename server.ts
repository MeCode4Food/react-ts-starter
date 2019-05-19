import * as express from 'express'
import * as compression from 'compression'
import * as path from 'path'
import * as signale from 'signale'

const app = express()

app.use(compression());

app.use('/static', express.static(path.join(__dirname, './build/static')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, './build/index.html'));
});

const PORT = (process.env.PORT || 5000) as number;

app.listen(PORT, '0.0.0.0', (err: Error) => {
  if (err) { signale.error(err); }
  signale.info(`🌎 app listening on http://localhost:${PORT}.`);
});
