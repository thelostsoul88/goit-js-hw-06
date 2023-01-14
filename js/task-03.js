const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const addUl = document.querySelector(".gallery");
// -----------------------------MAP-------------------------
// const imgEl = images
//   .map((img) => {
//     return `<li class="gallery__item"><img class="gallery__img" src="${img.url}" alt="${img.alt}"></li>`;
//   })
//   .join("");
// addUl.insertAdjacentHTML("beforeend", imgEl);
// -----------------------------REDUCE----------------------
const imgEl = images.reduce(
  (acc, img) =>
    (acc += `<li><img class="gallery__img" src="${img.url}" alt="${img.alt}"></li>`),
  ""
);
addUl.insertAdjacentHTML("beforeend", imgEl);
// -----------------------------FOR-------------------------
// const liEl = document.createElement("li");
// for (const img of images) {
//   const imgEl = document.createElement("img");
//   imgEl.src = img.url;
//   imgEl.alt = img.alt;
//   imgEl.classList.add("gallery__img");
//   liEl.appendChild(imgEl);
// }
// addUl.append(liEl);
