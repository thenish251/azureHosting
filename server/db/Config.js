const mongoose = require('mongoose');
// const URL = "mongodb+srv://cosmostesting:test123@cluster0.z4igt2y.mongodb.net/cosmostesting?retryWrites=true&w=majority";

// cosmos db
const URL = "mongodb://hydra-cosmos-mdb:j8E9Zt9aKYV2uSqdtIB77iHHKt6wec5mKsZWISzGte88T8c6D3j9fj2XkBZTvQCOHl7p4IgSRJxDACDbybHrSg==@hydra-cosmos-mdb.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@hydra-cosmos-mdb@";
mongoose.connect(URL);