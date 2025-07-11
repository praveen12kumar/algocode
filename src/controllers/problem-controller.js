import {StatusCodes} from 'http-status-codes'
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


async function getProblem(req, res){

    try {
        const response = await problemService.getProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Problem fetched successfully",
            error: null,
            data: response
        })
    } catch (error) {
        next(error);
    }
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


async function deleteProblem(req, res, next){
    try {
        const response = await problemService.deleteProblem(req.params.id);

        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Problem deleted successfully",
            error: null,
            data: response
        })
    } catch (error) {
        next(error);
    }
};


async function updateProblem(req, res, next){
    try {
        const response = await problemService.updateProblem(req.params.id, req.body);
        //console.log("response",response);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: "Problem updated successfully",
            error: null,
            data: response
        })

    } catch (error) {
        console.log(error);
        next(error);
    }
};


export{
    addProblem,
    getProblem, 
    getProblems,
    deleteProblem,
    updateProblem
};