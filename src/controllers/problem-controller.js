import {StatusCodes} from 'http-status-codes'
import { NotImplemented } from '../errors/NotImplement.error.js';
import {ProblemService} from "../services/index.js";
import {ProblemRepository} from "../repositories/index.js";
import {NotFound} from "../errors/notFound.error.js";


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


async function getProblem(req, res){

    const {id} = req.params;
    
    const response = await problemService.getProblem(id);
    
    return res.status(StatusCodes.OK).json({
        success: true,
        message: "Problem fetched successfully",
        error: null,
        data: response
    })
    
    

};


async function getProblems(req, res){
    try {
        const response = await problemService.getAllProblems();

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "All problems fetched successfully",
            error: null,
            data: response
        })
    } catch (error) {
        next(error)
    }
   
};


function deleteProblem(req, res, next){

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