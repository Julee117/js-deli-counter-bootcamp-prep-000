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
