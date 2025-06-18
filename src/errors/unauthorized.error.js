import { BaseError } from "./base.error.js";
import { StatusCodes } from "http-status-codes";

class UnAuthorized extends BaseError{

    constructor(details){
        super("UnAuthorized to access", StatusCodes.UNAUTHORIZED, "You are unauthorized for this operation", details);
    }

};


export {
    UnAuthorized
};