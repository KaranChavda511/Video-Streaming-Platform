//----------------------------------------------------------------------------------------------------------------------------------------------//
//                                            UTIL-2 :- error handle karte he bar-bar            
//----------------------------------------------------------------------------------------------------------------------------------------------//
// errors to apke nodejs me trace hote he but req or res ye core nodejs me nahi karte ho 
// iske liye ek framework use kiya tha apne jo he express

class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400 // kyoki 400 se upar to error code he
    }
}