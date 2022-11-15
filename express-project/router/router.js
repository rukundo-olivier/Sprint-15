import express from "express";
export const router = express.Router();

router.get("/", (request, response) =>{
    //console.log("request");
    response.send("Your express app is running");
})

router.get("/search", (request, response) =>{
    const { q } = request.query;
    response.send(`Your search for ${q} is found`);
})