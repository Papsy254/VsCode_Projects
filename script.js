function startTime() {
  var today = new Date();
  var hour = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  var mode = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;

  // Add leading zeros to minutes and seconds if they are less than 10
  hour = checkTime(hour);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  document.getElementById("time").innerHTML =
    hour + ":" + minutes + ":" + seconds + " " + mode;

  setTimeout(startTime, 1000);
}

function checkTime(value) {
  if (value < 10) {
    value = "0" + value; // Add zero in front of numbers < 10
  }
  return value;
}

// Reference to the screen input
let screen = document.getElementById("screen");

function press(value) {
  // Check if the input is a closing parenthesis
  if (value === ")" && screen.value.length > 0) {
    // If the last character is a digit, insert '*' before the parenthesis
    let lastChar = screen.value.charAt(screen.value.length - 1);
    if (!isNaN(lastChar)) {
      screen.value += "*" + value;
    } else {
      screen.value += value;
    }
  }
  // Check if the input is an opening parenthesis
  else if (value === "(") {
    // If the last character is a digit, insert '*' before the parenthesis
    let lastChar = screen.value.charAt(screen.value.length - 1);
    if (!isNaN(lastChar)) {
      screen.value += "*" + value;
    } else {
      screen.value += value;
    }
  }
  // For all other values, just append them to the screen
  else {
    screen.value += value;
  }
}

// Clear screen
function clearScreen(val = "") {
  screen.value = val;
}

// Delete key
function backspace() {
  screen.value = screen.value.substring(0, screen.value.length - 1);
}

// Calculate function
function calculate() {
  if (screen.value != "") {
    try {
      clearScreen(eval(screen.value));
    } catch (err) {
      clearScreen("Bad expression");
    }
  }
}

// Function to calculate the sine, cosine, and tan
function sine() {
  screen.value = Math.sin((screen.value * Math.PI) / 180);
}

function cos() {
  screen.value = Math.cos((screen.value * Math.PI) / 180);
}

function tan() {
  screen.value = Math.tan((screen.value * Math.PI) / 180);
}

// Function to calculate asin, acos, and atan
function invsine() {
  screen.value = Math.asin(screen.value) * (180 / Math.PI);
}

function invcos() {
  screen.value = Math.acos(screen.value) * (180 / Math.PI);
}

function invtan() {
  screen.value = Math.atan(screen.value) * (180 / Math.PI);
}

// Function to calculate natural logarithm
function ln() {
  screen.value = Math.log(screen.value);
}

function log() {
  screen.value = Math.log10(screen.value);
}

// Function for percentage
function percent() {
  screen.value = screen.value / 100;
}

// Function for square, cube, and square root
function square() {
  screen.value = Math.pow(screen.value, 2);
}

function cube() {
  screen.value = Math.pow(screen.value, 3);
}

function sqrt() {
  screen.value = Math.sqrt(screen.value);
}

// Function for +/- (PlusMinus)
function PlusMinus() {
  var x = screen;
  var y = x.value;
  y = y * -1;
  x.value = y;
}

// Function for Exponential
function Exp() {
  screen.value = Math.pow(10, screen.value);
}

// Function to insert PI
function insertPi() {
  screen.value = (screen.value ? screen.value : "") + Math.PI;
}

// function startTime() {
//   var today = new Date();
//   var hour = today.getHours();
//   var minutes = today.getMinutes();
//   var seconds = today.getSeconds();

//   var mode = hour >= 12 ? "PM" : "AM";
//   hour = hour % 12;
//   hour = hour ? hour : 12;
//   // time format
//   //   if (hour <= 12) {
//   //     hour = hour;
//   //   } else {
//   //     hour = hour - 12;
//   //   }

//   //Add leading zeros to minutes and seconds if they are less tha 10
//   hour = checkTime(hour);
//   minutes = checkTime(minutes);
//   seconds = checkTime(seconds);

//   // am pm
//   var mode;
//   if (hour <= 11) {
//     mode = "PM";
//   } else {
//     mode = "AM";
//   }

//   document.getElementById("time").innerHTML =
//     hour + ":" + minutes + ":" + seconds + " " + mode;

//   setTimeout(startTime, 1000);
// }

// function checkTime(value) {
//   if (value < 10) {
//     value = "0" + value; //Add zero in front of numbers < 10
//   }
//   return value;
// }

// // screen
// let screen = document.getElementById("screen");

// // type to the screen
// function press(numValue) {
//   if (screen.value == 0) {
//     screen.value = "";
//   }
//   screen.value += numValue;
// }

// // clear screen
// function clearScreen(val = "") {
//   screen.value = val;
// }

// // Delete key
// function backspace() {
//   screen.value = screen.value.substring(0, screen.value.length - 1);
// }

// // calculate function
// function calculate() {
//   if (screen.value != "") {
//     try {
//       clearScreen(eval(screen.value));
//     } catch (err) {
//       clearScreen("Bad expression");
//     }
//   }
// }

// // Function to calculate the sine, cosine, and tan
// function sine() {
//   screen.value = Math.sin((screen.value * Math.PI) / 180);
// }

// function cos() {
//   screen.value = Math.cos((screen.value * Math.PI) / 180);
// }

// function tan() {
//   screen.value = Math.tan((screen.value * Math.PI) / 180);
// }

// // Function to calculate asin, acos, and atan
// function invsine() {
//   screen.value = Math.asin(screen.value) * (180 / Math.PI);
// }

// function invcos() {
//   screen.value = Math.acos(screen.value) * (180 / Math.PI);
// }

// function invtan() {
//   screen.value = Math.atan(screen.value) * (180 / Math.PI);
// }

// // Function to calculate natural logarithm
// function ln() {
//   screen.value = Math.log(screen.value);
// }

// function log() {
//   screen.value = Math.log10(screen.value);
// }

// // Function for percentage
// function percent() {
//   screen.value = screen.value / 100;
// }

// // Function for square, cube, and square root
// function square() {
//   screen.value = Math.pow(screen.value, 2);
// }

// function cube() {
//   screen.value = Math.pow(screen.value, 3);
// }

// function sqrt() {
//   screen.value = Math.sqrt(screen.value);
// }

// // Function for +/- (PlusMinus)
// function PlusMinus() {
//   var x = screen;
//   var y = x.value;
//   y = y * -1;
//   x.value = y;
// }

// // Function for Exponential
// function Exp() {
//   screen.value = Math.pow(10, screen.value);
// }

// function insertPi() {
//   screen.value = (screen.value ? screen.value : "") + Math.PI;
// }

// // Function to handle button presses and add the value to the screen
// function press(value) {
//   // Check if the input is a closing parenthesis
//   if (value === ")" && screen.value.length > 0) {
//     // If the last character is a digit or another closing parenthesis, insert '*'
//     let lastChar = screen.value.charAt(screen.value.length - 1);
//     if (!isNaN(lastChar) || lastChar === ")") {
//       screen.value += "*" + value;
//     } else {
//       screen.value += value;
//     }
//   }
//   // Check if the input is an opening parenthesis
//   else if (value === "(") {
//     // If the last character is a digit, insert '*' before the parenthesis
//     let lastChar = screen.value.charAt(screen.value.length - 1);
//     if (!isNaN(lastChar)) {
//       screen.value += "*" + value;
//     } else {
//       screen.value += value;
//     }
//   }
//   // For all other values, just append them to the screen
//   else {
//     screen.value += value;
//   }
// }
