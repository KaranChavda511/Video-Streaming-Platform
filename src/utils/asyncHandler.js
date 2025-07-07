// Utility :- reusable componets


//----------------------------------------------------------------------------------------------------------------------------------------------//
//                                         UTIL-1 :- async await to handle karte he bar-bar                                                        
//----------------------------------------------------------------------------------------------------------------------------------------------//

// ab hamare pass 2-options he async-await handle karne ke lieye 
// 1> try...catch
// 2> .then  .catch

//----------------------------------------------------------------------------------------------------------------------------------------------//
// 1> try...catch
// yaha niche asyncHandler ek higher order function he , matlab ke function ko as parameter bhi accept karte he ya to return bhi kar sakte he , means variablle ki tarah treat karte he.
/** FOR EXAMPLE:-
 * const asyncHandler = () => {}     // asyncHandler ko ek function bana diya. 
 * const asyncHandler = (fun) => {}  // asyncHandler me fun pass kar rahhe he ;  matlab ke ab vo higher-order fun ban gaya  // but yaha fun execute nahi hua he.
 * const asyncHandler = (fun) => { () => {} }  // ab ham yaha pe fun ko execute bhi karva sakte he
 * const asyncHandler = (fun) => async() => {} // ab jo fun execute hoga vo ek  async function hoga.
 */

// const asyncHandler = (fn) => async(req, res, next) => {   // jo fun hamne execute karvana chahate he usme se ham; req or res le lenge ; next bhi rakhege taki or koi middleware ko pass kar sake.
//     try {
//         await fn(req, res, next) // yaha ham kisi or function ko execute karvayege. ex:- db connection ke function ko calll karvate he 
//     } catch (error) { // agar fn execution me problem aygi isko handle karega
//         res.status(err.code || 500).json({ 
//             success: false,  // frontend vale ko easy rahe isliye
//             message: err.message
//         })
//     }
// }
//----------------------------------------------------------------------------------------------------------------------------------------------//

// 2> .then  .catch (yaha pe hame fn ko execute karne ki jarurat nahi he response bhi hame code likhke handle nahi karege; directly hi return karege promise ke form me)
const asyncHandler = (requestHandler) => {  // yaha pe bhi ham function hi pass kar rahe he ham use `fn` bhi likh sakte he but ham better name lete he jese `requestHandler`
    (req, res, next) => { // bina execute kiye directly fn(requestHandler) me se hamne req or res le liya; or next bhi pass kar diya
        Promise.resolve(req, res, next).catch((err)=>next(err))  // yaha pe hamne Promise envoke kar diya ab promise resolve hoga ya to reject ; vo fn pe depend karega
    } 
}


export {asyncHandler}

//----------------------------------------------------------------------------------------------------------------------------------------------//




