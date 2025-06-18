import { BaseError } from "./base.error.js";
import { StatusCodes } from "http-status-codes";

class NotImplemented extends BaseError{

    constructor(methodName){
        super("NotImplemented", StatusCodes.NOT_IMPLEMENTED, `${methodName} not Implemented`, {});
    }
}

export{
    NotImplemented
}