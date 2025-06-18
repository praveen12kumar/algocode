import {StatusCodes} from 'http-status-codes'
import { NotImplemented } from '../errors/NotImplement.error.js';
import {ProblemService} from "../services/index.js";
import {ProblemRepository} from "../repositories/index.js";


const problemService = new ProblemService(new ProblemRepository());


async function addProblem(req, res, next){
    try {
    
       const newProblem = await problemService.createProblem(req.body);
       
       return res.status(StatusCodes.CREATED).json({
           success: true,
           message: "Problem added successfully",
           error: null,
           data: newProblem
       })
       
    } catch (error) {
        next(error)
    }
};


function getProblem(req, res){

    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not implemented"
    })
    

};


function getProblems(req, res){

   return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not implemented"
    })
};


function deleteProblem(req, res){

return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not implemented"
    })
};


function updateProblem(req, res){
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: "Not implemented"
    })
};


export{
    addProblem,
    getProblem, 
    getProblems,
    deleteProblem,
    updateProblem
};