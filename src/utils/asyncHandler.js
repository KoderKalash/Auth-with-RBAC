// Take an async function → return a function that catches errors → passes them to Express.
/*to avoid writing try catch again and again in controllers*/
const asyncHandler = (fn) => {
    return (req, res, next) => {
        Promise.resolve(fn(req,res,next)).catch(next)
    }
}

export default asyncHandler


/* I use an async handler wrapper to automatically forward rejected promises to Express error middleware, which keeps controllers clean and avoids repetitive try/catch blocks. */