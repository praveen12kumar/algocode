import {StatusCodes} from 'http-status-codes'
import { NotImplemented } from '../errors/NotImplement.error.js'



function addProblem(req, res, next){
    try {

        // nothing Implemented
        throw new NotImplemented('add problem');
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