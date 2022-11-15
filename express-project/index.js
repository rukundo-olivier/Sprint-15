import express from "express";
import { router } from "./router/router.js";
const app = express();
app.use(router);
const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`This app is listening to port number: ${PORT}`);
})