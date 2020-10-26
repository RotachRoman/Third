const express = require("express"); 
const app = express(); 
const PORT = 3000; 

app.use(express.static(__dirname + '/ThirdLab')); 
app.get("/", (req, res) => { 
res.sendFile("ThirdLab/SummaryCard.html", { 
root: __dirname 
}); 
}); 

app.listen(PORT, () => { 
console.log("Server is started") 
});