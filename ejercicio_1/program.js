var Hapi = require("hapi");

var server = Hapi.Server({
  host: "localhost",
  port: Number(process.argv[2] || 8080)
});

server.route({
  path: "/",
  method: "GET",
  handler: function handler(request, h) {
    // Request has all information
    // a string can be returned

    return "Hello hapi";
  }
});

server.start(err => {
    if (err) {
      throw err;
    }
    console.log(`Server running at : ${(server, info.uri)}`);
});

// Official solution
/*
const Hapi = require('hapi');

    (async () => {
        try {
            const server = Hapi.Server({
                host: 'localhost',
                port: Number(process.argv[2] || 8080)
            });

            server.route({
                path: '/',
                method: 'GET',
                handler: (request, h) => {
                    return 'Hello hapi';
                }
            });

            await server.start();

            console.log(`Server running at: ${server.info.uri}`);
        } catch (error) {
            console.log(error);
        }
    })();
*/