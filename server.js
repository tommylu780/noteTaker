const express = require('express');

const app = express();
const PORT = process.env.PORT || 3001;
//Sets up express to handle data Parsing (Body.)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);


app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT} `);
})