const notFound = (req, res, next) => {
    console.log("-----------not found middlewear------")
    const error = new Error(`Not Found - ${req.originalUrl}`)
    res.status(404);
    next(error)
}

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    // check mongoose for bad ObjectID
    if(err.name == "CastError" && err.kind == "ObjectId"){
        console.log("------------error handler------------")
        statusCode = 404;
        message = "Resource Not Found";
    }

    res.status(statusCode).json({
        message,
        stack : process.env.NODE_ENV == "production" ? '-': err.stack,
    })
}

export {errorHandler, notFound}
