var katzDeli = [];

function takeANumber(katsDeliLine, name) {
  var num = katsDeliLine.push(name);
   return `Welcome, ${name}. You are number ${katsDeliLine.length} in line.`;
}

function nowServing(katsDeliLine) {
  if (katsDeliLine.length >= 1) {
    var name = katsDeliLine.shift();
    return `Currently serving ${name}.`;
  } else {
    return "There is nobody waiting to be served!";
  }
}

function currentLine(katsDeliLine) {
  var arr = [];
  if (katsDeliLine.length >= 1) {
    for (let i = 0; i < katsDeliLine.length; i++) {
      arr.push(i+1 + "." + katsDeliLine[i]);
      return "The line is currently: " + arr.join(', ');
    }
  } else {
    return "The line is currently empty."
  }
  return arr;
}
