const errorHandler = (err,req,res,next) =>{
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode

  res.status(statusCode).json({
    status: "error",
    message: err.message || "Something went wrong" 
  })
}

export default errorHandler;
