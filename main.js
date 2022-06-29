let btn = document.getElementById("btn")
let nav = document.querySelector(".navbar")
let close = document.getElementById("ber")

btn.onclick = () => {
 nav.classList.add("active")
}
ber.onclick = () => {
    nav.classList.remove("active")
   }