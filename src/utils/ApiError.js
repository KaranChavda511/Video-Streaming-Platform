
//----------------------------------------------------------------------------------------------------------------------------------------------//
//                                            UTIL-2 :- error handle karte he bar-bar            
//----------------------------------------------------------------------------------------------------------------------------------------------//
/**  to ham api ka error bhi standardized karna chahta hu api ka response bhi pe standardized karna chahta hu 
 * search `nodejs api error` on chrome documentation me apko puri "class Error" milegi jisme kafi sari chije hogi
 * ab ham error ko or achhe tarike se handle karna chahte he
 * Error ek class he
*/
class ApiError extends Error {
    // ab yaha pe already constructors available he but ham apna alag constructor banana chahte he.
    constructor(
        statusCode,
        message = "something went wrong",  // ye sabse bekar msg he
        errors = [],
        stack = ""
    ){
        // ab uparwali chijo ko overwrite karvate he
        super(message)
        this.statusCode = statusCode
        this.data = null // a collection of data, often received from an external source like a database, API call, or file system operation;
        this.message = message
        this.success = false // kyoki ye code success nahi jayega ,api error ko handle kar rahe he, api response ko nahi
        this.errors = errors

        // jo bhi error aa raha he uska stack trace ho jayega ke konsi files me dikat he.
        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export {ApiError}