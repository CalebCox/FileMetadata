const express       = require('express'),
      bodyParser    = require('body-parser'),
      multer        = require('multer'),
      upload        = multer(),
      app           = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.json());
    
app.get("/", (req, res) => {
    res.render('index');
});

app.post("/api/fileanalyse", upload.single('file'), (req, res) => {
    var size = {
        fileSize: req.file.size
    };
    return res.json(size);
});


app.listen(port, () => {
    console.log('File service is running..');
});

