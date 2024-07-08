require('dotenv').config()

const app = require('./src/app');

const { database, initDatabase } = require('./src/database/dbConfig')
const PORT = process.env.PORT



app.listen(PORT, async () => {
    console.log(`Server runnig on port http://127.0.0.1:${PORT}`)
    // console.log(Object.keys(database))
    await database.query(initDatabase())


})