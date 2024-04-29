const express = require('express')
const cors = require('cors')
const{ MongoClient } = require('mongodb')
const bcrypt = require('bcrypt')

const app =new express();
app.use(express.json());
//client is running in port 3000
//any third part application can be serveed, if the cors is enabled
app.use(cors());

const client = new MongoClient('mongodb+srv://admin:admin@cluster0.irccguv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
client.connect().then(result=>console.log("Database Connected"))


const db = client.db("skill")
const col = db.collection("user")
const col1 =db.collection("Courses")
const studentcol = db.collection("Students")
const facultycol =db.collection("Faculty")
const hacol =db.collection("Assignments")
const end =db.collection("User2")

//from brower, the default url triggering is get method
//app - 1st parameteraddress,2nd is service function
app.get('/home',(req,res)=>{
    res.send("It is a home page - new page-new 2 page")
})
//app - 1st parameteraddress,2nd is service function
//client is sending request to server
app.post('/insert',async(req,res)=>{
    //every request will have header and body section
    //req={header: ..... , body: actual_data}
    req.body.password = await bcrypt.hash(req.body.password,5)
    console.log(req.body);
    col.insertOne(req.body);
    res.send("Data Received")

})

app.post('/addcourse', async (req, res) => {
    // Assuming course data includes a name and description
    console.log(req.body);
    const cc = req.body.courseCode
    const subject = await col1.findOne({courseCode:cc})
    if(subject!=null){
        return res.status(200).send("Course Already Inserted!")
    }
    else{
    col1.insertOne(req.body);
    res.send("Course added")
    }
});

app.post('/addstudents',async(req,res)=>{
    //every request will have header and body section
    //req={header: ..... , body: actual_data}
    
    console.log(req.body);
    const redgno= req.body.studentId
    const subject = await studentcol.findOne({studentId:redgno})
    if(subject!=null){
        return res.status(200).send("Student Already Exists!")
    }
    else{
        studentcol.insertOne(req.body);
        res.send("Student added Successfully")
    }
})


 
app.post('/addfaculty',async(req,res)=>{
    //every request will have header and body section
    //req={header: ..... , body: actual_data}
    
    console.log(req.body);
    const id= req.body.facultyId
    const subject = await facultycol.findOne({facultyId:id})
    if(subject!=null){
        return res.status(200).send("Student Already Exists!")
    }
    else{
        facultycol.insertOne(req.body);
        res.send("Faculty added Successfully")
    }
})



app.post('/addassignment', async (req, res) => {
  // Assuming course data includes a name and description
  console.log(req.body);
  const { courseCode, assignmentNumber } = req.body;
  const subject = await hacol.findOne({ courseCode, assignmentNumber });

  if(subject!=null ){
      return res.send("Assignment Already Uploaded!")
  }
  else{
  hacol.insertOne(req.body);
  res.send("Assignment added")
  }
});


app.get('/showcourses',async(req,res)=>{
    var result = await col1.find().toArray();
    console.log(result)
    res.send(result);
 })
 app.get('/showcourses/:id',async(req,res)=>{
  var result = await col1.find({courseCode:req.params.id}).toArray();
  console.log(result)
  res.send(result);
})
 
 app.get('/showstudents',async(req,res)=>{
    var result = await studentcol.find().toArray();
    console.log(result)
    res.send(result);
 })

 app.get('/showfaculties',async(req,res)=>{
    var result = await facultycol.find().toArray();
    console.log(result)
    res.send(result);
 })

 app.get('/showassignments', async (req, res) => {
  //const courseCode =req.prams.id;
 // const requestedCourseCode = req.query.courseCode; // Get the course code from the query parameters
  //if (!requestedCourseCode) {
   // return res.status(400).send("Course code is required."); // Handle the case if course code is not provided
   var result = await hacol.find().toArray();
   console.log(result)
   res.send(result);
  
});

 app.post("/deletecourse/:id", async (req, res) => {
    const id  = req.params.id;
    // console.log(id)
    try {
      // Assuming col1 is your MongoDB collection
      const subject = await db.collection('Courses').findOneAndDelete({courseCode:id})
      .then(result=>res.status(200).send("Course Deleted"))
      .catch(e=>res.status(404).send(e.message))
    
    } catch (error) {
      console.error("Error deleting course:", error);
      res.status(500).send("Internal server error");
    }
  });
 

  app.post("/deletestudent/:id", async (req, res) => {
    const id  = req.params.id;
    // console.log(id)
    try {
      // Assuming col1 is your MongoDB collection
      const subject = await db.collection('Students').findOneAndDelete({studentId:id})
      .then(result=>res.status(200).send("Student Deleted"))
      .catch(e=>res.status(404).send(e.message))
    
    } catch (error) {
      console.error("Error deleting student:", error);
      res.status(500).send("Internal server error");
    }
  });

  app.post("/deletefaculty/:id", async (req, res) => {
    const id  = req.params.id;
    // console.log(id)
    try {
      // Assuming col1 is your MongoDB collection
      const subject = await db.collection('Faculty').findOneAndDelete({facultyId:id})
      .then(result=>res.status(200).send("Faculty Deleted"))
      .catch(e=>res.status(404).send(e.message))
    
    } catch (error) {
      console.error("Error deleting faculty:", error);
      res.status(500).send("Internal server error");
    }
  });

app.post('/check',async (req,res)=>{
    console.log(req.body);
    //you can give many key value pairs, every key and value is a condition
    var result =await col.findOne({"email":req.body.email});
    if(result!= null){
        if(await bcrypt.compare(req.body.pass,result.password)){
            if(result.role == 1){
                res.send("admin")
            }
            else if(result.role ==3){
                res.send("faculty")
            }
            else{
            res.send(result);
            }
        }
        else{
            res.send("Incorrect Password");
        }
    }
    else{
        res.send("User not found");
    }
})

app.get('/show',async(req,res)=>{
   var result = await col.find().toArray();
   console.log(result)
   res.send(result);
})









app.listen(8081);
console.log("server running");