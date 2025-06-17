import express from 'express';
import { ProblemController } from '../../controllers/index.js';


const problemRouter = express.Router();


problemRouter.get('/:id', ProblemController.getProblem);

problemRouter.get('/', ProblemController.getProblems);

problemRouter.post('/', ProblemController.addProblem);

problemRouter.delete('/:id', ProblemController.deleteProblem);

problemRouter.put('/:id', ProblemController.updateProblem);



export default problemRouter;