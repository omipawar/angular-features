let Database = require('../model/Database');

class Data {
  id = 0;
  description = '';
  off = 0;
  query = '';

  db = new Database.Database();

  constructor() {
    this.id = 0;
    this.description = '';
    this.off = 0;
  }

  get() {
    this.query = `SELECT * FROM data`;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }

  getrequired() {
    this.query = `SELECT * FROM data LIMIT 6 OFFSET ${this.off}`;
    return new Promise((resolve, reject) => {
      this.db.query(this.query, (err, result) => {
        this.db.close();
        if (err) {
          return reject(err);
        }
        resolve(result);
      });
    });
  }


}

module.exports = {
  Data: Data
}
