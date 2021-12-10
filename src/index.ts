/*
* This program is a text reverser.
*
* @author  Felipe Garcia Affonso
* @version 1.0
* @since   2021-12-05
*/

import * as readline from 'readline'

function isNum(val: string){
    if (val === "0") {
        return true
    }
    else if (val === "1") {
        return true
    }
    else if (val === "2") {
        return true
    }
    else if (val === "3") {
        return true
    }
    else if (val === "4") {
        return true
    }
    else if (val === "5") {
        return true
    }
    else if (val === "6") {
        return true
    }
    else if (val === "7") {
        return true
    }
    else if (val === "8") {
        return true
    }
    else if (val === "9") {
        return true
    } else {
        return false
    }
}

function blowUp (s: string) {
  // this function blows a string up.
  var returnStr: string = ""
  console.log(s.length + ", "  + s)
  if (s.length === 1) {
      console.log("\n0\n")
    if (!isNum(s.substr(0))) {
      console.log("\n0.5\n")
        returnStr = s.substr(0)
    }
  } else if (s.length > 1) {
      console.log("\n1\n")
      console.log(isNum(s.substr(0, 1)) + ", " + s.substr(0, 1))
      if (isNum(s.substr(0, 1))) {
        console.log("\n3\n")
        let charNum: number = parseInt(s.substr(0, 1))
        console.log(s.substr(1, 2))
        if (isNum(s.substr(1, 2))) {
          for (var counter = 0; counter < charNum; counter++) {
            returnStr = returnStr + s.substr(1, 2)
          }
        } else {
          for (var counter = 1; counter < charNum; counter++) {
            returnStr = returnStr + s.substr(1, 2)
          }
        }
        returnStr = returnStr + blowUp(s.substr(1, s.length - 1))
      } else {
        console.log("\n4\n")
        returnStr = s.substr(0) + blowUp(s.substr(1, s.length - 1))
      }
  } else {
      console.log("\n2\n")
    returnStr = s.substr(0)
  }
  return returnStr
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Input a string: ', function (answer) {
  const text = blowUp(answer)
  console.log('\nYour string was BLOWN UP!\n' + text)
  rl.close()
})
