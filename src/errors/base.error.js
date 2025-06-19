class BaseError extends Error{

    constructor(name, statusCode, description, details){
        //When you use super(...) inside a subclass constructor and pass arguments to it, 
        // you are explicitly calling the constructor of the superclass, passing the required parameters. 
        super(description)
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;
        }   
}


export {BaseError}