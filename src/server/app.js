import Express from 'express';
import Path from 'path';
import IndexRoute from '.routes/index';

const app = Express(), port = 3000;

app.use('/', Express.static(__dirname + '/../public'));
app.use('/', IndexRoute);

const server = app.listen(port, ()=>{
	console.log('Express listening on port', port);
});
