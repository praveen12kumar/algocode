import express from 'express';

import problemRouter from './problem-route.js';




const v1Router = express.Router();

v1Router.use('/problems', problemRouter);


export default v1Router;
 