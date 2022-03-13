let floorHeight = 400;// start gondola position
let lastId = 1;

// timer function
async function delay (t) {
  await new Promise(resolve => setTimeout(resolve, t));
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
  if (lastId != id) {
    await gondolaMotion (id, id-lastId);
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