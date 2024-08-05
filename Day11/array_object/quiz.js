const starbucks = [
  { name: "americano", price: 3000, shot: 2, ingredient: ["water", "bean"] },
  { name: "latte", price: 4000, shot: 2, ingredient: ["milk", "bean"] },
  { name: "tea", price: 3500, shot: 0, ingredient: ["water", "leaftea"] },
  { name: "hotchoco", price: 4500, shot: 2, ingredient: ["milk", "chocolate"] },
];

const menu = document.createElement("div");
menu.style.display = "grid";
menu.style.gridTemplateColumns = "repeat(2,1fr)";
starbucks.forEach((x) => {
  const box = document.createElement("div");
  box.innerHTML = `
    <h4>${x.name + "🧊"}</h4>
    <h5>${x.price + 1000} ${x.shot}</h5>
    `;
  box.style.boxShadow = ` rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px`;
  box.style.display = "flex";
  box.style.flexDirection = "column";
  box.style.justifyContent = "center";
  box.style.alignItems = "center";
  box.style.padding = "20px";
  menu.appendChild(box);
});

document.body.appendChild(menu);
