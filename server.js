const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const express = require('express');
const routes = require('./routers');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);
const PORT = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express();
  server.get('*', (req, res) => handler(req, res));
  server.use(handler).listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`)
  })
});

/**
  server.get('/p/:id', (req, res) => {
    const actualPage = '/post'
    const queryParams = { title: req.params.id } 
    app.render(req, res, actualPage, queryParams)
  })
**/