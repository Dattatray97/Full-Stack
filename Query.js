const express = require(`express`);
const app = express();

app.get('/search',(req,res)=>{
    const search = req.query.search;
    const page = req.query.page;
    res.send(`Welcome user "${search}" on page ${page}`);
});
app.listen(3000, () =>{
    console.log(`Server running on http://localhost:3000`);
});