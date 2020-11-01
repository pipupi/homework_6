
/**initailize the cart item count to prevent loss data from refresh*/

if (localStorage.getItem("itemcount")==null) {
	var items_in_cart = 0;
} else {
	var items_in_cart = JSON.parse(localStorage.getItem("itemcount"));
}

/**initailize the detail item info*/
var detail_item = "";




function Roll(name, count, price, txt, img) {
	this.name = name;
	this.count = count;
	this.price = price;
	this.txt = txt;
	this.img = img;

}

function setA() {localStorage.setItem("detail", JSON.stringify(new Roll("Air-Fryer Bourbon Bacon Cinnamon Rolls", 0, 5, "----","img/rolls/Air-Fryer Bourbon Bacon Cinnamon Rolls.jpg")));}
function setB() {localStorage.setItem("detail", JSON.stringify(new Roll("Autumn Sweet Rolls with Cider Glaze",0, 5,"----","img/rolls/Autumn Sweet Rolls with Cider Glaze.jpg")));}
function setC() {localStorage.setItem("detail", JSON.stringify(new Roll("Cappuccino Cinnamon Rolls",0, 5,"----","img/rolls/Cappuccino Cinnamon Rolls.jpg")));}
function setD() {localStorage.setItem("detail", JSON.stringify(new Roll("Caramel-Pecan Cinnamon Rolls",0, 5,"----","img/rolls/Caramel-Pecan Cinnamon Rolls.jpg")));}



function retrieve(){
	test();
	console.log("onload triggered");
	detail_item = JSON.parse(localStorage.getItem("detail"));
	document.getElementById("img").src = detail_item.img;
	document.getElementById("name").innerText = detail_item.name;
	document.getElementById("count").innerText = "count: " + detail_item.count;
	document.getElementById("price").innerText = "price: $" + detail_item.price + " each";
	document.getElementById("txt").innerText = detail_item.txt;
}


function test() {
	localStorage.setItem("itemcount", JSON.stringify(items_in_cart));
	items_in_cart = JSON.parse(localStorage.getItem("itemcount"));
	var elem = document.getElementById("cartnum");
    console.log("onload triggered");
    document.getElementById("cartnum").innerText = items_in_cart;
    if(items_in_cart <= 0) {
    	elem.style.display = "none";
    } else {
    	elem.style.display = "block";
    }
    	

    

}

function add_to_cart() {
    items_in_cart = items_in_cart + 1;
    document.getElementById("cartnum").innerText = items_in_cart;
    test();
}

function remove_from_cart() {
    items_in_cart = items_in_cart - 1;
    document.getElementById("cartnum").innerText = items_in_cart;
    test();
}








function CartTemplate(parentE1, headerText, bodyText, imgUrl) {
	let divContainer = document.createElement("div");
	divContainer.className = "card";
	parentEl.appendChild(divContainer);

	let img = document.createElement("img");
  	img.src = imgUrl;
  	img.width = 200;
  	divContainer.appendChild(img);

  	let divTextContainer = document.createElement("div");
  	divTextContainer.className = "text";
  	divContainer.appendChild(divTextContainer);

  	let header = document.createElement("h2");
  	header.innerHTML = headerText;
  	divTextContainer.appendChild(header);

  	let bodyTextEl = document.createElement("p");
  	bodyTextEl.innerHTML = bodyText;
  	divTextContainer.appendChild(bodyTextEl);

  	let addBtn = document.createElement("button");
  	saveDogBtn.textContent = "add";
  	saveDogBtn.onclick = function (e) {
    	e.preventDefault();
    }
    divTextContainer.appendChild(saveDogBtn);

  	let localStorage = window.localStorage;
  	localStorage.setItem("test", "1");

 	return divContainer;
}

