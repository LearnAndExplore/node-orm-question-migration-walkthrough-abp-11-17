'use strict';

const db = require("../config/db")

class Question{
  static CreateTable(){
    return new Promise (
      function(reslove){
        resolve("ABC")
      }
    )
  }
}


module.exports = Question;
