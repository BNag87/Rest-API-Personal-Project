import express from 'express';
import bark from '../index.js'

const router = express.Router();


const users = [
    {    
        firstName:"John",
        lastName:"Doe",
        age: 25
    },
    {    
        firstName: "Fat",
        lastName: "Hoe",
        age: 5
    },
    {    
        firstName: "Door",
        lastName: "Knob",
        age: 88
    }
]

//all routes in here will start with /users
    //this code gets all users, console logs them and sends them to the webpage
router.get("/", (req, res) => {
    console.log(users)
    res.send(users);
    bark("router.get was fired and showed the users.js route!","router.get","users.js");
    bark("users object contains "+users, "router.get", "users.js");
});

//remember, browsers can only make GET requests. We need software
//to test our api. (postman in this case)
router.post('/', (req, res) => {
bark("POST Route reached!","router.post", "users.js");

res.send("POST Route reached!");
});

export default router;