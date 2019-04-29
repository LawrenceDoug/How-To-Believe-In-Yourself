const express = require('express');
const app = express();

app.use(express.static(__dirname));

app.listen(process.env.PORT || 8080);

// Path location strategy

app.get('*', function(req, res) { 
    res.sendFile(path.join(_dirname + 'index.html'));
});

console.log('listening');