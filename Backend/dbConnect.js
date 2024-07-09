const { default: mongoose } = require('mongoose')

require('dotenv').config()

const connectToDb = () => {
    try {
        console.log(process.env.MONGODB_URI)
        const con = mongoose.connect(process.env.MONGODB_URI);
        console.log('Database Connected Successfully')
    }catch(e) {
        console.log('Error in Database Connection :' + e)
    }
}

module.exports = {
    connectToDb
}