import { BaseError } from "./base.error.js";
import { StatusCodes } from "http-status-codes";

class NotFound extends BaseError{

    constructor(resourceName, resourcevalue){
     
        super("Not Found", StatusCodes.NOT_FOUND, `The requested ${resourceName} with value ${resourcevalue} not found`,
             {
                resourceName,
                resourcevalue
             });
    }
};

export {NotFound};