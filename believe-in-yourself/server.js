const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/src'));

app.listen(process.env.PORT || 8080);

// Path location strategy

app.get('/*', function(req, res) { 
    res.sendFile(path.join(_dirname + '/src/index.html'));
});

console.log('listening');