const arr = [
  "abstract-nature-7680x4320-8k-21456.jpg",
  "forest-2560x1440-mountains-violet-birds-art-hd-16431.jpg",
  "desert-5120x2880-5k-4k-wallpaper-8k-sand-sky-5511.jpg",
  "iceland-5120x2880-4k-5k-wallpaper-mountains-river-clouds-6295.jpg",
  "mountains-5120x2880-macos-4k-5k-sierra-sky-iphone-wallpaper-android-12461.jpg",
  "sunset-7680x4320-bear-deer-8k-19715.jpg",
];
let count = 0;
let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let body = document.querySelector("body");

setInterval(() => {
  body.style.backgroundImage = ` url(img/${arr[count]})`;
  body.style.transition = "4s";
  count++;
  if (count == 5) {
    count = 0;
  }
}, 5000);

setInterval(() => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  if (h <= 9) {
    h1.innerText = `0${h}:${m}:${s}`;
  } else {
    h1.innerText = `${h}:${m}:${s}`;
  }
  if (m <= 9) {
    h1.innerText = `${h}:0${m}:${s}`;
  } else {
    h1.innerText = `${h}:${m}:${s}`;
  }
  if (s <= 9) {
    h1.innerText = `${h}:${m}:0${s}`;
  } else {
    h1.innerText = `${h}:${m}:${s}`;
  }
}, 1000);

setInterval(() => {
  let color1 = Math.floor(Math.random() * 255);
  let color2 = Math.floor(Math.random() * 255);
  let color3 = Math.floor(Math.random() * 255);
  console.log((h1.style.color = `rgb(${color1},${color2},${color3})`));
}, 4000);
