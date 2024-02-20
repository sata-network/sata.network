const fs = require("fs");
const { Client } = require("node-scp");

require("dotenv").config();


const config = {
  host: "8.217.228.75",
  port: 22,
  username: "root",
  privateKey: fs.readFileSync("/Users/yanleilei/.ssh/id_rsa"),  //本机私钥地址
  passphrase: ''
};
Client(config)
  .then(async (client) => {
    try {
      await client.emptyDir("/var/www/fandom/web");
      await client.uploadDir("./dist", "/var/www/fandom/web"); //参数1:本地上传的目录，参数2:服务器的目录
      // remember to close connection after you finish
      await client.close();
    } catch (e) {
      console.error(e);
    }
  })
  .catch((e) => console.log(e));
