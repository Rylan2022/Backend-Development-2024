const asyncHandeler = (reqestHandeler) => {
    (req, res, next) => {
        Promise.resolve(reqestHandeler(req, res, next)).catch((err) => next(err)) 
    }
}


export { asyncHandeler };

// const asyncHandeler = () => {}
// const asyncHandeler = (func) => () => {}
// const asyncHandeler = (func) =>  async () => {}


// const asyncHandeler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }