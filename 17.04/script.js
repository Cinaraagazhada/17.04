let div1 = document.createElement("div");
div1.setAttribute("class", "class-one");
div1.textContent = "960px X 360px";

let div2 = document.createElement("div");
div2.setAttribute("class", "class-two");
div2.textContent = "290px X 180px";
let card1_h2 = document.createElement("h3");

let card1_p = document.createElement("p");
card1_p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
let card1_link = document.createElement("a");
card1_link.setAttribute("href", "#");
card1_link.textContent = "Read More >>"


let div3 = document.createElement("div");
div3.setAttribute("class", "class-three");
div3.textContent = "290px X 180px";
let card2_h2 = document.createElement("h3");
let card2_p = document.createElement("p");
card2_p.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
let card2_link = document.createElement("a");
card2_link.setAttribute("href", "#");
card2_link.textContent = "Read More >>"



let div4 = document.createElement("div");
div4.setAttribute("class", "class-four");
div4.textContent = "290px X 180px";
let card3_h2 = document.createElement("h3");

let card3_p = document.createElement("p");
card3_p.innerText = "Lorem ipsum dolor sit, amet consectetur adipisicing elit."
let card3_link = document.createElement("a");
card3_link.setAttribute("href", "#");
card3_link.innerText = "Read More >>"


let wrap = document.createElement("div");
wrap.setAttribute("class", "wrap")
let parentDiv1 = document.createElement("div");
parentDiv1.setAttribute("class", "parentDiv1")
let parentDiv2 = document.createElement("div");
parentDiv2.setAttribute("class", "parentDiv2")
let parentDiv3 = document.createElement("div");
parentDiv3.setAttribute("class", "parentDiv3")






document.body.append(div1);
parentDiv1.append(div2)
parentDiv1.append(card1_h2);
parentDiv1.append(card1_p);
parentDiv1.append(card1_link);
parentDiv2.append(div3)
parentDiv2.append(card2_h2);
parentDiv2.append(card2_p);
parentDiv2.append(card2_link);
parentDiv3.append(div4)
parentDiv3.append(card3_h2);
parentDiv3.append(card3_p);
parentDiv3.append(card3_link);
wrap.append(parentDiv1, parentDiv2, parentDiv3);

document.body.append(wrap);




