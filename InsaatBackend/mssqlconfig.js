

const mssqlconfig = {
  user: "sa",
  password: "1234",
  server: "DESKTOP-UVJGHPC",
  database: "Insaat",
  options: {
    port: 1433,
    encrypt: false,

  },
  pool: {
    max: 20,
    min: 5,
    idleTimeoutMillis: 150000,
  },
};

module.exports=mssqlconfig;