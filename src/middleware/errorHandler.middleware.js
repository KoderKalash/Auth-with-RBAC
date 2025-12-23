const errorHandler = (err,req,res,next) =>{
  // const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  const statusCode = err.statusCode || 500

  res.status(statusCode).json({
    status: "error",
    message: err.message || "Something went wrong" 
  })
}

export default errorHandler;
