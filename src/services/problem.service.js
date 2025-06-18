import { sanitizeMarkdown } from "../utils/index.js";

class ProblemService{

    // why we are getting problemRepo in constructor?

    constructor(problemRepository){
        this.problemRepository = problemRepository;

        //Jab aap ProblemService ke constructor mein problemRepository inject karte ho, 
        // toh aap service ko flexible bana rahe ho. Kal ko agar aapko database badalna 
        // ho ya testing ke liye fake repository use karni ho, toh aap easily kar sakte ho, 
        // bina service class mein kuch badle.
        // dependency Injection: https://www.youtube.com/watch?v=DtzQkBp2M5M
    
    }

    async createProblem(problemData){

        try {
        
        // we are storing problem in markdown also which can contain html
        // and script tag so it may contain some malicious code and we have to sanitize it

        problemData.description = sanitizeMarkdown(problemData.description);

        const problem = await this.problemRepository.createProblem(problemData);

        return problem;
        } 
        catch (error) {
            console.log(error);
            throw error;
        }

    }

};

export default ProblemService;

// Benefits of This Constructor Injection Approach
// 