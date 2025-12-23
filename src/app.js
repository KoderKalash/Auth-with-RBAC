import express from "express";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js"
import errorHandler from "./middleware/errorHandler.middleware.js";
import healthRoutes from "./routes/health.routes.js"
import reportRoute from "./routes/report.route.js";

const app = express();


app.use(express.json())


app.use(userRoutes)
app.use(authRoutes)
app.use(healthRoutes)
app.use(reportRoute)

/*app.use((req,res,next)=>{
        console.log(`${req.method} ${req.originalUrl}`)
        next()
    })*/


/*
  TODO 3:
  Add one middleware that logs:
  - request method
  - request URL
*/


app.use(errorHandler)

/*
  NOTE:
  Do NOT add error handling yet.
*/

export default app;
