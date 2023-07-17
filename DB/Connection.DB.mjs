import mongoose from 'mongoose'

const connectDatabase = (url) => {
    mongoose.connect(url,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }).then((data) => {
            console.log(`MongoDB Connected With Server ${data.connection.host}`);
        })
}

export { connectDatabase }