const Hapi = require("hapi");
var Path = require("path");
var Inert = require("inert");

(async () => {
  try {
    const server = Hapi.Server({
      host: "localhost",
      port: Number(process.argv[2] || 8080),
      routes: {
        files: {
            relativeTo: Path.join(__dirname, '/public')
        }
      }
    });

    await server.register(Inert);

    server.route({
      path: "/foo/bar/baz/file.html",
      method: "GET",
      handler: {
        file: 'file.html'
      }
    });

    await server.start();

    console.log(`Server running at: ${server.info.uri}`);
  } catch (error) {
    console.log(error);
  }
})();

// Sol
/*
        const Path = require('path');
    const Hapi = require('hapi');
    const Inert = require('inert');

    (async () => {
        try {
            const server = Hapi.Server({
                host: 'localhost',
                port: process.argv[2] || 8080
            });

            await server.register(Inert);

            server.route({
                path: '/foo/bar/baz/{filename}',
                method: 'GET',
                handler: {
                    directory: {
                        path: Path.join(__dirname, 'public')
                    }
                }
            });

            await server.start();

        } catch (error) {
            console.log(error);
        }
    })();
*/
