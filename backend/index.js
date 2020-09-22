const logger = {
    prettyPrint: true,
    serializers: {
        req(request) {
            return {
                method: request.method,
                url: request.url,
                path: request.path,
                parameters: request.parameters,
                headers: request.headers
            };
        },
        res(reply) {
            return {
                statusCode: reply.statusCode
            }
        }
    }
}
const fastify = require('fastify')({ logger: logger })
const routes = require("./src/routes/");
const mongoose = require('mongoose');
const dotenv = require('dotenv');

//allow read env const
dotenv.config();

//allow cors request
fastify.register(require("fastify-cors"), {
    origin: (origin, cb) => {
        //test valid origin
        if (/localhost/.test(origin)) {
            cb(null, true);
            return;
        }
        cb(new Error("Not allowed"), false);
    },
    methods: ["GET", "PUT", "POST", "DELETE"],
});

//handle routes
routes.forEach((route) => {
    fastify.route(route);
})

//db
mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => { console.log('DB connected') })

mongoose.connection.on("error", err => {
    console.log(`DB connection error: ${err.message}`);
})


const port = process.env.PORT || 8080;

// Run the server!
const start = async () => {
    try {
        await fastify.listen(port)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()