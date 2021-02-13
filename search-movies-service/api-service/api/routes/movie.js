'use strict';

const express = require('express');
const movieService = require('../packages/movie/service');

module.exports = () => {
  const router = express.Router();

  router.route('/search').get(async (req, res, next) => {
    try {
      let qs = {
        endpoint: req.path,
        query: req.query.s,
        page: req.query.page,
      };
      let result = await movieService.search(qs);
      res.send(result);
    } catch (err) {
      console.log('something went wrong', err);
      res.send(500);
    }
  });

  router.route('/detail').get(async (req, res, next) => {
    try {
      let qs = {
        endpoint: req.path,
        title: req.query.t,
      };
      let result = await movieService.detail(qs);
      res.send(result);
    } catch (err) {
      console.log('something went wrong', err);
      res.send(500);
    }
  });

  return router;
};
