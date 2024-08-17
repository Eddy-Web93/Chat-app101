const { default: axios } = require("axios")

const express = require("express"),
cors = require("cors"),
http = require("http").createServer()

const app = express()
app.use(express.json())
app.use(cors({origin: true}))
app.get("/", (req, res)=>{
    res.send("server is running")
})

app.post("/", async (req, res)=>{
    const  { username} = req.body

    try{
        const abx = await axios.put(
            "https://api.chatengine.io/users/",
            {
                username: username,
                secret : username, 
                first_name: username
            },
            {
                headers:{
                    "private-key": apiKey,
                },
            }
        )
        return res.status(abx.status).json(abx.data)
    }catch(e){
        return res.status(e.response.status).json(e.response.data)
    }
})
app.listen(3001)

const apiKey = "57ad8831-150f-4443-976a-639ffcfb17c2"