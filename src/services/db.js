const mongoose = require('mongoose')
const settings = require('./settings.json')

const connectDB = async () => {
  try {
    // if (global.isDev) {
    //   const conn = await mongoose.connect(settings.database.mongo.dev, {
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useUnifiedTopology: true,
    //   })
    //   console.log('Mongo (dev) Connected!')
    // } else {
    const conn = await mongoose.connect(settings.database.mongo.prod, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    console.log('Mongo (prod) Connected!')
    // }
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB
