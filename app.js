// Import required dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const multer = require('multer')

// create an instance of express and instantiate other dependencies
const app = module.exports = express();
const upload = multer({dest: 'uploads/'});
app.use(bodyParser.json())
app.use(cors())
app.use(useragent.express())


// app.get('/', (req, res, next)=>{
//     res.sendFile(__dirname + '/index.html')
// })

app.use(express.static(__dirname + '/public'));

app.post('/upload', upload.single('file'), (req, res, next) => {
 return res.json(req.file)   
});






// process.env.PORT is for heroku
app.listen(process.env.PORT || 3000, () => console.log("Listening to Port 3000"));