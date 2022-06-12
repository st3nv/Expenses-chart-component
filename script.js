var mon = document.querySelectorAll("[data-day = 'mon']")[0];
var tue = document.querySelectorAll("[data-day = 'tue']")[0];
var wed = document.querySelectorAll("[data-day = 'wed']")[0];
var thu = document.querySelectorAll("[data-day = 'thu']")[0];
var fri = document.querySelectorAll("[data-day = 'fri']")[0];
var sat = document.querySelectorAll("[data-day = 'sat']")[0];
var sun = document.querySelectorAll("[data-day = 'sun']")[0];

fetch("data.json")
  .then((response) => response.json())
  .then((json) => updateData(json));

// function formatAsPercent(num) {
//   return new Intl.NumberFormat("default", {
//     style: "percent",
//     minimumFractionDigits: 0,
//     maximumFractionDigits: 0,
//   }).format(num);
// }

function formatAsPx(num) {
  return new Intl.NumberFormat("default", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

function updateData(json) {
  var max = -1;
  for (let i = 0; i < json.length; i++) {
    if (json[i].amount > max) {
      max = json[i].amount;
    }
  }
  for (let i = 0; i < json.length; i++) {
    var newHeight = (json[i].amount / max) * 140 + "px";
    var mon_num = eval(json[i].day).firstElementChild;
    var mon_div = eval(json[i].day).lastElementChild;
    mon_num.innerHTML = (Math.round(json[i].amount * 10) / 10).toFixed(1);
    mon_div.style.height = newHeight;
  }
}
