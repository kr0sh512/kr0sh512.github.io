var p1 = document.querySelector("#c1");
var p2 = document.querySelector("#c2");

setTimeout(() => {
    p1.setAttribute("hidden", "hidden");
    p2.removeAttribute("hidden");
}, "2000");
