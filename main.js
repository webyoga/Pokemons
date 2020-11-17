const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
function getRow(firstRow, secondRow) {
  let result1 = countedChar(firstRow, 'а');
  let result2 = countedChar(secondRow, 'а');
  let result = (result1 > result2) ? firstRow : secondRow;
  return result;
}
function countedChar(row, char) {
  let counted = 0;
  for (let i = 0; i < row.length; i++) {
    if (row[i] === char) {
      counted += 1;
    }
  }
  return counted;
}
getRow(firstRow, secondRow);