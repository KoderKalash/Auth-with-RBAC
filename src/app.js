// App definition file

import express from "express";


// create express app
const app = express()

// Middleware to parse JSON bodies
app.use(express.json())

//health check route --> basic
app.get('/',(res)=>{
    res.send("Hello Duniya!")
})

export default app;