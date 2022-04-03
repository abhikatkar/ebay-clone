
const express = require("express");

const Connect = require("./backend/configs/db");

 const dataController = require("./backend/controller/data.controller");

 const app = express();



 app.use(express.json());

 app.use("/data",dataController);


 app.listen(process.env.PORT || 3535, async()=>{
     try{
        await Connect();
        console.log("listening on port 3535")
     }catch(err){
         console.log(err.message)
     }
 });


