const express = require('express');
const userData = require('./user.json')
const fs = require('fs');
const cors = require('cors');
const {User}=require("./DbSchema");
const mongoose=require("mongoose");
//pass abcd1234


let url="mongodb+srv://dipesh1478be22:abcd1234@cluster0.h3wzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(url)
.then(()=>{
    console.log("Mongodb Connect Successfully");
})
.catch((err)=>{
    console.log("Error in connecting DB",err);
})

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//Handling endpoints

app.get('/getdata', (req, res) => {
    res.send('Hello I am sending Data');
})
app.post('/getdata/:course', (req, res) => {
    //console.log(req.body);
    fs.readFile(`./data/${req.params.course}.json`, 'utf-8', (err, data) => {
        if (err) {
            res.send({ msg: "Error" });
        }
        else {
            if (req.body.location != 'None') {
                data = JSON.parse(data);
                let colleges = data.filter((value) => {
                    return value.state === req.body.location
                })
                res.send(colleges);
            }
            else {
                res.send(data);
            }
        }
    })

})
app.post('/getRole/:role', (req, res) => {

    fs.readFile(`./roles/${req.params.role}.json`, 'utf-8', (err, data) => {
        if (err) {
            res.send({ msg: "Error" });
        }
        else {
            res.send(data);
        }
    })
})




app.post('/login', async (req, res) => {

    try {
        const userData = req.body;
        const user = await User.find({username:userData.username,password:userData.password});
        if (user.length>0) {
            // If user exists, send success response with username            
            res.send({ status: true, username: user.username });
        } else {
            // If user doesn't exist, send failure response
            res.send({ status: false });
        }
    } catch (error) {
        console.error(err);
        res.send({ status: false });
    }

})

app.post('/signup', async (req, res) => {
    try {
        const userData = req.body;
        // Insert the user data into the collection
        console.log(userData);
        await User.create(userData);
        res.send({ status: true });
    } catch (err) {
        console.error(err);
        // Send failure response
        res.send({ status: false });
    }
});

app.listen(5000,()=>{
    console.log("Server running successfully at port 5000");
});
