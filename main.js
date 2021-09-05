//var hw = "hello world";
//alert(hw);


var hw = 'Hello,World!!!'
var dataArray = ['a = 7.1 - 4 + 2 - 3,b = a + 1,c = a - b',
          'd = - c + 1 + 5 + a ,,x = a + b + c + d'];
var stringArray = [];
var varArray = [];
var elemArray = [];

for(var i = 0; i < dataArray.length; i++) {
  stringArray = dataArray[i].split(',')
  for (var j = 0; j < stringArray.length; j++) {
    varArray.push(stringArray[j]);
  }
}

var $table = document.createElement("table"), $row;

for(var i = 0; i < varArray.length; i++) {
  $row = $table.insertRow(-1);
  $col = $row.insertCell(-1);
  $col.innerText = varArray[i];
}

document.body.appendChild($table);

for(var i = 0; i < varArray.length; i++) {
  elemArray.push(varArray[i]);
  elemArray[0];
}

console.log(stringArray);
console.log(varArray);
