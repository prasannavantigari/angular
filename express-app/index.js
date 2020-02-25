const express=require('express');
const app=express();
const port=5000;
app.get('/student',function(req,res){
    res.send("get all students")
})

app.get('/student/:id',function(req,res){
    let id=req.params.id;
    res.send("student Id:"+id);
})
app.post('/student',function(req,res){
    res.send('student:post')
})
app.put('/student',function(req,res){
    res.send('student:put')
})
app.delete('/student',function(req,res){
    res.send('student:Delete')
})


app.listen(port,function(){
    console.log('server is running port:'+port)

})