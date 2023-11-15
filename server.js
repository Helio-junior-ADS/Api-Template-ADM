const app = require("./app");
require("dotenv").config()

const PORT = process.env.PORT || 3333

app.listen(PORT, ()=> {
    console.log(`SERVER ONLINE NA PATH http://localhost:${PORT}`);
}); 
