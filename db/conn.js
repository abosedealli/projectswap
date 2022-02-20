const uri = "mongodb+srv://aoall:Tasmania123@cluster0.buqds.mongodb.net/items-project?retryWrites=true&w=majority";
let mongoose = require("mongoose")
let dbConnection;

module.exports = {
    connectToDatabase : function(callback){
        //Connect mongoose with mongoose
        mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => console.log('connected to db'))
            .catch((err) => console.log(err));

//Alert console of activity
        mongoose.connection.on('connected', () => {
            console.log('connected to mongodb')
            callback();
        })

        mongoose.connection.on('error', (err) => {
            console.log(err.message)
        })

        mongoose.connection.on('disconnected', () => {
            console.log('disconnected from mongodb')
        })
    },
    getDb: function(){
        return dbConnection;
    }
}