var katzDeli = [];

function takeANumber(katsDeliLine, name) {
  var num = katsDeliLine.push(name);
   return `Welcome, ${name}. You are number ${katsDeliLine.length} in line.`;
}

function nowServing(katsDeliLine) {
  if (katsDeliLine.length >= 1) {
    console.log(`We are serving ${katsDeliline.shift()}.`);
    return katsDeliline.shift();
  } else {
    return "There is nobody waiting to be served!";
  }
}
