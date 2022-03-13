let floorHeight = 400;// start gondola position
let lastId = 1; //set default elevator position
let nextStopScreen = document.getElementsByClassName('gondola')[0];
let removeScreen = nextStopScreen.getElementsByClassName('screen');
let blinkTime = 0.4 // set blink time after stop in seconds

// timer function
async function delay (t) {
  await new Promise(resolve => setTimeout(resolve, t));
}
// add screen function
function addScreen(id, direction) {
  let arrow;
  if (direction > 0) arrow = '🠕';
  else arrow = '🠗';
  let screen = document.createElement("div");
  screen.innerHTML = `${arrow} ${id}`;
  screen.className = "screen";
  nextStopScreen.appendChild(screen);
}

// dell screen function
function dellScreen() { 
  nextStopScreen.removeChild(removeScreen[0]);
}
// blink after stop function
async function blink (t) {
  for (let i = 0; i < 3; i++) {
    await delay (t*1000);  
    nextStopScreen.classList.add("gondola-opacity");
    await delay (t*1000);
    nextStopScreen.classList.remove("gondola-opacity");  
  }
  dellScreen();
}

// height Change function 
function heightChange (f) {
  document.getElementsByClassName('gondola-position')[0].style.top = `${f +"px"}`;
}

// moving gondola function 
async function gondolaMotion (id, direction) {
  for (let m = 100 * Math.abs(id-lastId); m > 0; m--) {
    await delay (10);
    if (direction > 0) floorHeight--;
    else floorHeight++;
    heightChange (floorHeight);
  };
}

// moving elivator function 
async function elevatorCall (id) {
  addScreen(id, id-lastId);
  if (lastId != id) {
    await gondolaMotion (id, id-lastId);
    blink (blinkTime);
  } else {
    dellScreen();
  }
  lastId = id;
}

// click handling
document.querySelectorAll('.button').forEach(item => {
  item.addEventListener("click", function() {
  this.classList.add("button-active");
  elevatorCall (this.id).then(() => this.classList.remove("button-active"));
});
})



/*----------------
-first iteration-
----------------*/
// let floor1 = document.getElementById("1");
// let floor2 = document.getElementById("2");
// let floor3 = document.getElementById("3");
// let floor4 = document.getElementById("4");
// let floor5 = document.getElementById("5");

// async function timer(id) {
//   console.log(`button ${id} has clicked`);
//   console.log(`set timer for ${id} sec`);
//   let m = 1;
//   while (id > 0) {
//     await new Promise(resolve => setTimeout(resolve, 1000));
//     console.log(m);
//     m++;
//     id --;
//   }
//   console.log("done");
// }

// floor1.addEventListener("click", function() {
//   this.classList.add("button-active");
//   timer(this.id).then(() => this.classList.remove("button-active"));
// });
// floor2.addEventListener("click", function() {
//   this.classList.add("button-active");
//   timer(this.id).then(() => this.classList.remove("button-active"));
// });
// floor3.addEventListener("click", function() {
//   this.classList.add("button-active");
//   timer(this.id).then(() => this.classList.remove("button-active"));
// });
// floor4.addEventListener("click", function() {
//   this.classList.add("button-active");
//   timer(this.id).then(() => this.classList.remove("button-active"));
// });
// floor5.addEventListener("click", function() {
//   this.classList.add("button-active");
//   timer(this.id).then(() => this.classList.remove("button-active"));
// });

//=====================================================================

/*----------------
-second iteration-
----------------*/
// let floorHeight = 400;// start gondola position
// let lastId = 1;

// // moving gondola function 
// async function timer(id) {
//   if (lastId < id && lastId != id) {
//     for (let m = 100*(id-lastId); m > 0; m--) {
//       await new Promise(resolve => setTimeout(resolve, 10));
//       floorHeight = floorHeight - 1; 
//       document.getElementsByClassName('gondola-position')[0].style.top = `${floorHeight +"px"}`;
//     };
//     lastId = id;
//   } else if (lastId > id && lastId != id) {
//     for (let m = 100*(lastId-id); m > 0; m--) {
//       await new Promise(resolve => setTimeout(resolve, 10));
//       floorHeight = floorHeight + 1; 
//       document.getElementsByClassName('gondola-position')[0].style.top = `${floorHeight +"px"}`;
//     };
//     lastId = id;
//   }
// }

// // click handling
// document.querySelectorAll('.button').forEach(item => {
//   item.addEventListener("click", function() {
//   this.classList.add("button-active");
//   timer(this.id).then(() => this.classList.remove("button-active"));
// });
// })