const app = require("./src/app");
const connectDB = require("./src/db/db");
//start server
connectDB();
app.listen(3000, ()=> {
    console.log("server is running mon on port 3000");
})