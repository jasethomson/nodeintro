


function doMath(num1, operator, num2){
  var integer1 = parseInt(num1);
  var integer2 = parseInt(num2);
  switch(operator){
    case '+':
      return integer1 + integer2;
    case '-':
      return integer1 - integer2;
    case '*':
    case 'x':
    case 'X':
      return integer1 * integer2;
    case '/':
      return integer1 / integer2;
  }
}

var num1 = process.argv[2];
var operator = process.argv[3];
var num2 = process.argv[4];
var answer = doMath(num1, operator, num2);
console.log( answer );
