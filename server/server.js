const express = require('express');
const app = express();
const port = 8000;


require('./config/mongoose.config');

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// OR
app.use(express.json(), express.urlencoded({ extended: true }));

// const RenameRoutes = require('./routes/RENAME.routes');
// RenameRoutes(app);
// OR
require('./routes/joke.routes')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));