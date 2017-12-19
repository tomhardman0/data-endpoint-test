const path = require('path');
const Koa = require('koa');
const koaStatic = require('koa-static');
const mount = require('koa-mount');
const _ = require('koa-route');

const app = new Koa();
const port = process.env.PORT || 1234;
const htmlBase = require('./html-base')({title: 'Data / React Test'});

const csvLoader = require('csv-load-sync');
const data = csvLoader(path.join(__dirname, 'data.csv'));
const normalisedData = data.map((datum) => {
  return {
    x: parseFloat(datum.x),
    y: parseFloat(datum.y)
  };
});

app.use(mount('/assets', koaStatic(path.join(__dirname, '..', 'dist'))));

app.use(_.get('/', async (ctx) => {
    ctx.body = htmlBase;
}));

app.use(_.get('/api/data', async (ctx) => {
    ctx.set('Cache-Control', 'max-age=86400');
    ctx.body = normalisedData;
}));

app.listen(port, () => console.log(`App running internally at http://localhost:${port}`));
