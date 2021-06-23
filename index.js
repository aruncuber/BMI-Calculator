const express = require("express");
const bodyParser = require("body-parser");
const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.get("/bmiCalculator",(req,res) => {
     res.sendFile(__dirname + "/bmiCalculator.html")
});

app.post("/bmiCalculator",(req,res) => {
    const height1= parseFloat(req.body.height);
    const weight1 = parseFloat(req.body.weight);
    const BMI = weight1/(height1 * height1);
    res.send(`Your BMI is ${BMI}`);
    console.log(height,weight)

})


app.listen(PORT,() => {
    console.log(`Server started on port ${PORT}`);
});