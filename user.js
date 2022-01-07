const mysql = require("mysql");
const Promise = require("bluebird");
const promise = require("bluebird/js/release/promise");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);

const dbinfo = {
  host: "localhost",
  user: "root",
  password: "cdac",
  database: "project1",
};

const addMessage = async (message) => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectionAsync();

  let sql = `Insert into user values (?)`;

  await connection.queryAsync(sql, [message.messagebody]);
  await connection.endAsync();
};

const message = {
  messagebody: "Hello Everyone",
};

const showMessage = async () => {
  const connection = mysql.createConnection(dbinfo);
  await connection.connectAsync();

  let sql = `select * from user`;

  let list = await connection.queryAsync(sql);
  console.log(list);
  await connection.endAsync();
  return list;
};

showMessage();
