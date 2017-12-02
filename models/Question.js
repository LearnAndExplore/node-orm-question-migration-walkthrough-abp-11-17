'use strict';

const db = require("../config/db")

class Question{
  static CreateTable(){
    return new Promise (
      function(resolve){
        db.run("CREATE TABLE questions(id INTEGER PRIMARY KEY, questions TEXT)",
        funtion(){resolve("ABC")})
        // resolve("ABC")
      }
    )
  }
}


module.exports = Question;
