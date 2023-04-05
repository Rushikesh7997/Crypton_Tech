const express = require("express")
const fs = require("fs")

const app = express();

app.use(express.json())

app.get("/user",(req,res)=>{
    const readStream = fs.createReadStream("./db.json",{encoding:"utf-8"})
    readStream.pipe(res)
})

app.post("/users",(req,res)=>{
    const file = fs.readFileSync("./db.json",{encoding:"utf-8"})
    let paresdFile = JSON.parse(file)
    paresdFile.users.push(req.body)
    // console.log(paresdFile)
    paresdFile = JSON.stringify(paresdFile)
    fs.writeFileSync("./db.json",paresdFile,{encoding:"utf-8"})
    res.send("your data is uploaded")
})

app.put("/users/:id",(req,res)=>{
    const id = req.params.id;
    let log = res.body;
    let previous = fs.readFileSync("./db.json","utf-8")
    let prev_data = JSON.parse(previous)
    let posts = prev_data.posts;
    let latest_values = posts.map((ele)=>{
        if(ele.id!=log.id){
            return ele;
        }
        else{
            return{...ele,...log}
        }
    }) 
    prev_data.products = latest_values;
    fs.writeFileSync("./db.json",JSON.stringify(prev_data),"utf-8")
    res.send("data updated");
})

app.delete("/users/:id",(req,res)=>{
    const id = req.params.id;
    let prev_data = fs.readFileSync("./db.json","utf-8");
    let previous_data = JSON.parse(prev_data)
    let posts = previous_data.posts;
    let latest_data = posts.filter((ele)=>{
        if(ele.id!=id){
            return ele;
        }
    })
    previous_data.posts= latest_data
    fs.writeFileSync("./db.json",JSON.stringify(previous_data),"utf-8")
    console.log(previous_data)
    res.send("Data is deleted");
})


app.listen(5000,()=>{
    console.log("Port Started On 5000")
})
 
