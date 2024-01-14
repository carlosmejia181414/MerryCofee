//function load in body to receive the file.json
async function menu() {
  try {
    const requestURL = "file.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const data = await response.json();
    menulist(data);
  } catch (error) {
    swal("Alert", "Error Loading the information!", "error");
    return false;
  }
};

function menulist (databody) {
  const menuItems = databody.products;
  count = 0;
  for (const menuSingular of menuItems) {
    count++;
    //Create the cards
    const divCard = document.createElement("div");
    divCard.setAttribute("class", "menu");
    const container = document.querySelector(".containerAppointment-item2");
    container.appendChild(divCard);

    //create the img for cards
    const img = document.createElement("img");
    img.src = `../images/${menuSingular.img}`;
    img.setAttribute("class", "imgCards");
    divCard.appendChild(img);

    //create contador add
    const divContador = document.createElement("div");
    divContador.setAttribute("class", "divContador");
    const spanadd = document.createElement("span");
    spanadd.setAttribute("class", "material-symbols-outlined sing1");
    spanadd.setAttribute("id", `spanadd${count}`);
    spanadd.setAttribute("onclick", `addition(${count});`);
    spanadd.textContent = "add";
    //create input to order
    const inputamount = document.createElement("input");
    inputamount.setAttribute("type", "input");
    inputamount.setAttribute("id", `inputamount${count}`);
    inputamount.setAttribute("class", "inputamount");
    inputamount.setAttribute("value", "0");
    //create contador rest
    const spanrest = document.createElement("span");
    spanrest.setAttribute("class", "material-symbols-outlined sing2");
    spanrest.textContent = "remove";
    spanrest.setAttribute("id", `spanrest${count}`);
    spanrest.setAttribute("onclick", `rest(${count});`);
    //put positions
    divCard.appendChild(divContador);
    divContador.appendChild(spanadd);
    divContador.appendChild(inputamount);
    divContador.appendChild(spanrest);

    //Create the title for Cards
    const title = document.createElement("h2");
    title.setAttribute("class", "titleCards");
    title.setAttribute("id", `titleCards${count}`);
    title.textContent = menuSingular.name;
    divCard.appendChild(title);

    //create description for cards
    const descrip = document.createElement("p");
    descrip.setAttribute("class", "descripCards");
    descrip.textContent = menuSingular.description;
    divCard.appendChild(descrip);

    //Create price in cards
    const price = document.createElement("p");
    price.setAttribute("class", "priceCards");
    price.textContent = `Price : $ ${menuSingular.Price}.00 CAD`;
    divCard.appendChild(price);

    //Create price in cards
    const Stock = document.createElement("p");
    Stock.setAttribute("class", "StockCards");
    Stock.textContent = `Stock : ${menuSingular.stock}`;
    divCard.appendChild(Stock);

    //Create price in cards
    const Categoria = document.createElement("p");
    Categoria.setAttribute("class", "CategoriaCards");
    Categoria.textContent = `Category : ${menuSingular.Categoria}`;
    divCard.appendChild(Categoria);
  }
};
