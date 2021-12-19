app.post("/users-by-name-auth", (req, res) => {
    //req.query does is gets the values in the ? after the url and populates them
    //send multuple by adding &

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

     findUser(name, password).then((user) => {
        console.log(user.body.b)

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
    }).catch((err)=>{
        res.json({reason:err.message})
    })


})