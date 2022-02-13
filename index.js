const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = 3000;

const corsOptions = {
  origin: '*',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors());

app.use('/js', express.static(path.join(__dirname,'js')));
app.use('/css',express.static(path.join(__dirname,'css')));
app.use('/assets', express.static(path.join(__dirname,'assets')));
app.use('/fonts', express.static(path.join(__dirname,'fonts')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})
app.get('/thanks', (req, res) => {
  res.sendFile(path.join(__dirname, 'thanks.html'));
})

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
})