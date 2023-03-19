const {Client, Connection} = require('pg');

// Connect to DB
const connectDB = async () => {
    try {
        const client = new Client({
            user: process.env.PGUSER,
            host: process.env.PGHOST,
            port: process.env.PGDATABASE,
            password: process.env.PGPASSWORD,
            database:process.env.PGPORT
        })

        const conn = await client.connect();
        console.log(`PostgreSQL connected : ${conn.C}`.cyan.underline.bold);

    } catch (error){
        console.log(error)
    }
};

module.exports = connectDB;