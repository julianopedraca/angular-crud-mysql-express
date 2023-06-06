require('dotenv').config()
const app = require('./server');
const port = process.env.PORT;
const connection = require ('./Config/db.js')

connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected to db ");
  });

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})