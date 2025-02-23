// Utility :- reusable componets


//----------------------------------------------------------------------------------------------------------------------------------------------//
//                                         UTIL-1 :- async await to handle karte he bar-bar                                                        
//----------------------------------------------------------------------------------------------------------------------------------------------//

// ab hamare pass 2-options he async-await se karne ke lieye 
// 1> try...catch
// 2> .then  .catch

//----------------------------------------------------------------------------------------------------------------------------------------------//
// 1> try...catch
// yaha niche asyncHandler ek higher order function he , matlab ke function ko as parameter bhi accept karte he ya to return bhi kar sakte he , means variablle ki tarah treat karte he.
/** FOR EXAMPLE:-
 * const asyncHandler = () => {}
 * const asyncHandler = (fun) => () => {}
 * const asyncHandler = (fun) => async() => {}
 */

// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next) // yaha ham kisi or function ko execute karvayege
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,  // frontend vale ko easy rahe isliye
//             message: err.message
//         })
//     }
// }
//----------------------------------------------------------------------------------------------------------------------------------------------//

// 2> .then  .catch
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(req, res, next).catch((err)=>next(err))
    }
}


export {asyncHandler}

//----------------------------------------------------------------------------------------------------------------------------------------------//




