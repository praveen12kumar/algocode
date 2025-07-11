import logger from "../config/logger.config.js";
import { BadRequest } from "../errors/badRequest.error.js";
import { NotFound } from "../errors/notFound.error.js";
import { Problem } from "../models/index.js";


class ProblemRepository {
    async createProblem(problemData){
        try {
            const problem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                difficulty: problemData.difficulty,
                testCases: (problemData.testCases) ? problemData.testCases : [],
            });
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async getAllProblems(){
        try {
            const problems = await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getProblem(problemId){
        try {
            const problem = await Problem.findById(problemId);
            if(!problem){
                throw new NotFound("Problem", problemId);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    } 


    async deleteProblem(problemId){
        try {
            const problem = await Problem.findByIdAndDelete(problemId);
            if(!problem){
                throw new NotFound("Problem", problemId);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async updateProblem(problemId, problemData){
        try {
            const problem = await Problem.findByIdAndUpdate(problemId, problemData, {new: true});
            
            if(!problem){
                logger.error( `problem with id: ${problemId} not found in the db`);
                throw new NotFound("Problem", problemId);
            }
            return problem;
        } catch (error) {
            throw error;
        }
    }



}

export default ProblemRepository;