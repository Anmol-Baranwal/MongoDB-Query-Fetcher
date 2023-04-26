const MongoDB_Username = process.env.MONGODB_USERNAME;
const MongoDB_Password = process.env.MONGODB_PASSWORD;

const url = `mongodb+srv://${MongoDB_Username}:${MongoDB_Password}@cluster0.fnyielu.mongodb.net/test?retryWrites=true&w=majority`; // &authSource=admin

export default url;
// module.exports = url;
