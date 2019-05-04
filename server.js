const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/how-to-believe-in-yourself'));

app.listen(process.env.PORT || 8080);

// Path location strategy

app.get('/*', function(req, res) { 
    res.sendFile(path.join(_dirname + '/dist/how-to-believe-in-yourself/index.html'));
});

console.log('listening');