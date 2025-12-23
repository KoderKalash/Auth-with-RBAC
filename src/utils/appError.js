class AppError extends Error { // custom error class
    constructor(message, statusCode) {
        super(message)// calling parent class constructor for message
        this.statusCode = statusCode// attaching status code
        this.isOperational = true // to mark expected errors (operational errors)

        Error.captureStackTrace(this, this.constructor)// to exclude constructor from stack trace-> stack trace is a list of function calls leading to the error
    }
}

export default AppError

/* What this does (simple):
->Extends native Error
->Attaches an HTTP status code
->Marks error as expected (operational) */