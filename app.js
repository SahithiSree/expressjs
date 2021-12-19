const express = require('express');
const { createUser, findUser } = require('./models/user')
const app = express();
const port = 3000;
app.use(express.json())
//get is called http web
//"/" is called the http route
//get post
//get is used to fetch info
//post is used to update information
const users = [
    { name: "sahithi", college: "VCE" }, { name: "sree", college: "VEC" }
]
const passwords = [{ name: "sahithi", password: "123456" }]
//app.use('/static', express.static('public'))
app.get("/users", (req, res) => {
    res.send(users)
});
app.get("/users-by-college", (req, res) => {
    //req.query does is gets the values in the ? after the url and populates them
    //send multuple by adding &

    const college = req.query.college
    console.log(college)
    //filter takes a function that will return true or false it return true the item 
    const filterusers = users.filter((user) => {
        return user.college === college;

    })
    res.json(filterusers)

})
app.post("/users-by-college-body", (req, res) => {
    //req.query does is gets the values in the ? after the url and populates them
    //send multuple by adding &

    const college = req.body.college
    console.log(college)
    //filter takes a function that will return true or false it return true the item 
    const filterusers = users.filter((user) => {
        return user.college === college;

    })
    res.json(filterusers)

})
app.post("/sum", (req, res) => {
    const a = req.body.a
    const b = req.body.b
    const sum = a + b
    res.json({ sum })
})
app.get("/users-by-name", (req, res) => {
    //req.query does is gets the values in the ? after the url and populates them
    //send multuple by adding &

    const name = req.query.name
    console.log(name)
    //filter takes a function that will return true or false it return true the item 
    const filterusers = users.filter((user) => {
        return user.name === name;

    })
    res.json(filterusers)

})
app.post("/users-by-name-auth",async(req, res) => {
    //req.query does is gets the values in the ? after the url and populates them
    //send multuple by adding &
try {
    const name = req.body.name
    const password = req.body.password
    if (!name) {
        return res.status(400).send("name is required")
    }
    if (!password) {
        return res.status(400).send("password is required")
    }
    //const pass=passwords.find((pass)=>{
    //return pass.name===name;
    // })

     const userpromise=findUser(name, password)
        
     console.log(userpromise)
const user=await userpromise
console.log(userpromise)
console.log(user)
        // if(!pass){
        //   return res.status(403).send("User doesn't exists")
        //}
        // const passmap=pass.password===password
        if (!user) {
            return res.status(401).send("password doesn't match")
        }
        //filter takes a function that will return true or false it return true the item 
        //const filterusers=passwords.filter((user)=>{
        //  return user.name===name;

        //  })
        res.json(user)
} catch (error) {
    res.json({reason:error.message})
}
})
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
app.post("/create", (req, res) => {
    const user = req.body
    createUser(user)
    res.send("User Created")

    

    
})