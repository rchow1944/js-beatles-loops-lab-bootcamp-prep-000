// add solution here
function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for(let i = 0; i < musicians.length; i++) {
    let temp = `${musicians[i]} plays ${[instruments[i]]}`;
    arr.push(temp);
  }
}