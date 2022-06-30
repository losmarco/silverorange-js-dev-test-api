import { Router, Request, Response } from 'express';
//Had to use node-fetch v2
const fetch = require('node-fetch');
const fs = require('fs');

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  res.header('Cache-Control', 'no-store');
  res.header('Content-Type', 'application/json');
  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!

  const url = 'https://api.github.com/users/silverorange/repos';
  const response = await fetch(url);
  const onlineRepo = await response.json();

  fs.readFile('data/repos.json', 'utf8', (err: any, data: any) => {
    if (err) {
      return `Error: ${err}`;
    }

    const localFileRepo = JSON.parse(data);
    const concatResult = [...onlineRepo, ...localFileRepo];
    const result = concatResult.filter((e) => {
      return e.fork === false;
    });
    res.json(result);
  });
});
