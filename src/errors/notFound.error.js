import { BaseError } from "./base.error.js";
import { StatusCodes } from "http-status-codes";

class NotFound extends BaseError{

    constructor(message, error){
        super("Not Found", StatusCodes.NOT_FOUND, `${message} Not Found`, {});
    }
};

export {NotFound};