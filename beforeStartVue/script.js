// movig gondola function 
async function timer(id) {
  console.log(`set timer for ${id-m+1} sec after button ${id} has clicked`);
  for (let m = id; m > 0; m--) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`${m}`, `sec has passed after button ${id} has clicked`);
  };
  console.log("done");
}

// click handling
document.querySelectorAll('.button').forEach(item => {
  item.addEventListener("click", function() {
  this.classList.add("button-active");
  timer(this.id).then(() => this.classList.remove("button-active"));
  document.getElementsByClassName('gondola-position')[0].style.top = `${(5-this.id)*100+"px"}`;
});
})

/*----------------
-first iteration-
----------------*/
// let flor1 = document.getElementById("1");
// let flor2 = document.getElementById("2");
// let flor3 = document.getElementById("3");
// let flor4 = document.getElementById("4");
// let flor5 = document.getElementById("5");

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

// flor1.addEventListener("click", function() {
//   this.classList.add("button-active");
//   timer(this.id).then(() => this.classList.remove("button-active"));
// });
// flor2.addEventListener("click", function() {
//   this.classList.add("button-active");
//   timer(this.id).then(() => this.classList.remove("button-active"));
// });
// flor3.addEventListener("click", function() {
//   this.classList.add("button-active");
//   timer(this.id).then(() => this.classList.remove("button-active"));
// });
// flor4.addEventListener("click", function() {
//   this.classList.add("button-active");
//   timer(this.id).then(() => this.classList.remove("button-active"));
// });
// flor5.addEventListener("click", function() {
//   this.classList.add("button-active");
//   timer(this.id).then(() => this.classList.remove("button-active"));
// });
