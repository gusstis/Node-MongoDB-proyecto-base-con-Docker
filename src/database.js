import mongoose from 'mongoose';
/*const {connect} = connect
connect('mongodb://mongo/midatabase')
.then(db => console.log('Dtabase is connected 👽', db.connection.host))
.catch(err => console.error(err)); */
(async () => {
    try {
        //const mongooseOptions: ConnectionOptions = {
        //   useUnifiedTopology: true,
        //   useNewUrlParser: true
        //}
        const db = await mongoose.connect('mongodb://mongo/midatabase');
    console.log('DataBase is connected... 👻 to: ', db.connection.name)
    } catch (error) {
        console.error(error)
    }
}) ()


