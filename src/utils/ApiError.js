
//----------------------------------------------------------------------------------------------------------------------------------------------//
//                                            UTIL-2 :- error handle karte he bar-bar            
//----------------------------------------------------------------------------------------------------------------------------------------------//
/**  to ham api ka error bhi standardized karna chahta hu api ka response bhi pe standardized karna chahta hu 
 * search `nodejs api error` on chrome documentation me apko puri "class Error" milegi jisme kafi sari chije hogi
 * ab ham error ko or achhe tarike se handle karna chahte he
 * Error ek class he (Built-in Error class ko extend karege)
*/
class ApiError extends Error { // Error class me se ham kuch chunida chije hi lena chate he; isliye apni ek class bana rahe he jo Error class ko extends karegi
    // ab yaha pe already constructors available he; but ham apna alag constructor banana chahte he.
    constructor( // yah pe jo chije pass hogi vo to confirm leni hi padegi
        statusCode,
        message = "something went wrong",  // ye sabse bekar msg he // jab developer khud se kuch msg nahi likhega tab execute hoga
        errors = [],
        stack = ""
    ){
        // ab yaha pe ham constructor ki chijo ko overwrite kar sakte he (yaha pe jis constructor ki bat ho rahi he vo uparwala nahi balki Error class ke constructor ki bat hi jisase ham hamare constructor ko owerwrite kar sake)
        super(message) // parent class (Error) ka constructor call ; usme message pass kar rahe he kyoki msg ko to overwrite karege hi
        
        this.statusCode = statusCode
        this.data = null // a collection of data, often received from an external source like a database, API call, or file system operation; "Jab koi error throw hoga, to us error ke sath data nahi milega — isliye is field ko explicitly null set karo."
        this.message = message 
        this.success = false // kyoki ye code success nahi jayega ,api error ko handle kar rahe he, api response ko nahi
        this.errors = errors 

        // jo bhi error aa raha he uska stack trace ho jayega ke konsi files me dikat he. // yaha default Error class ka stack he ; sayad custom stack na diya ho
        if (stack) {
            this.stack = stack
        } else{
            Error.captureStackTrace(this, this.constructor) // Jab koi error throw ho, to stack trace me kis jagah se trace start karna hai.
            // Error.captureStackTrace(targetObject, constructorOpt);
            // targetObject :- Jisme stack trace inject karni hai (usually `this`)
            // constructorOpt :- Wo function jisse stack trace me SKIP karna hai (optional)
        }
    }
}

export {ApiError}
