const app = require('./app');

const server = app.listen(3001, '127.0.0.1', () => {
    console.log(`Node server is listening to ${server.address().port}`);
    
}); 