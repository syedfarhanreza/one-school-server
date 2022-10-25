const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send('elearning api running');
});

app.listen(port, () =>{
    console.log('OneSchool Server running on port', port);
})