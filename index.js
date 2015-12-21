var fs = require('fs');
var endOfLine = require('os').EOL;
var outputStream = fs.createWriteStream('output.csv');

fs.readFile('./icd10cm_codes_2016.txt', 'utf8', function (err,data) {
  
  if (err) {
    return console.log(err);
  }
  
  var array = data.split(endOfLine);
  var row, first, second, csv_row = '';
  
  // String tranformation
  array.forEach(function(value, key) {
    value = value.replace(/,/, '');
    row = value.split(/\s+/);
    csv_row += (key.toString() + ', ' + row.slice(0, 1).toString() + ', ' + row.slice(1).join(' ')) + endOfLine;
  })
  
  outputStream.write(csv_row, 'utf8');
});

