import { elevatorCall } from './elevatorCall';

export function listener() {
  document.querySelectorAll('.button').forEach(item => {
    item.addEventListener("click", function() {
    this.classList.add("button-active");
    elevatorCall (this.id).then(() => this.classList.remove("button-active"));
  });
  })
}