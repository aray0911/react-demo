let fs = require("fs");
const filepath = "user.json";
var res = JSON.parse(fs.readFileSync(filepath));
return {sessionid: 1234}
