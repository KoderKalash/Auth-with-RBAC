// Entry Point of the Application

/* {Control Flow of Application}
Node starts
→ server.js runs
→ DB connects
→ Express server starts
→ Request comes in
→ app.js handles it
→ Response sent
*/

import connectDB from "./config/db.js";
import dotenv from "dotenv"; // to load env variables - process.env...
import app from "./app.js";

dotenv.config() // path of env file (specify if not in root)

const PORT = process.env.PORT || 8000

const startServer = async () => {
    await connectDB()

    // start express server -> .listen(port,callback)
    app.listen(PORT,()=>{
        console.log(`Server is Running on ${PORT}!`)
    })
}

startServer()