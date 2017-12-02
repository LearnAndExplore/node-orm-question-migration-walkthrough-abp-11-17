'use strict';

const db = require("../config/db")

class Question{
  static CreateTable(){
    return new Promise (
      function(reslove){
        db.run("CREATE TABLE questions(id INTEGER PRIMARY KEY, questions TEXT)",
        funtion(){resolve("ABC")})
      }
    )
  }
}


module.exports = Question;
