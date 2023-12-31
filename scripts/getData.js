//function to add Item
let addition = (value) => {
	var inputaddition = document.querySelector(`#inputamount${value}`);
	valor = parseInt(inputaddition.value);
	valor++;
	inputaddition.value = valor;
	createList();
};

//function to rest Item
let rest = (value) => {
	var inputaddition = document.querySelector(`#inputamount${value}`);
	valor = parseInt(inputaddition.value);
	valor--;
	if (valor < 0) {
		inputaddition.value = 0;
		valor = 0;
	} else {
		inputaddition.value = valor;
	}
	createList();
};

let createList = () => {
	var divorders = document.getElementById('divorders');
	if (document.getElementById('createListul')) {
		document.getElementById('createListul').remove();
	}
	let createListul = document.createElement('ul');
	createListul.setAttribute('class', 'createListul');
	createListul.setAttribute('id', 'createListul');
	for (i = 1; i < 7; i++) {
		let createListli = document.createElement('li');
		createListli.setAttribute('class', 'createListli');
		var itemvalue = document.querySelector(`#inputamount${[i]}`).value;
		var itemname = document.querySelector(`#titleCards${[i]}`).textContent;
		if (itemvalue != 0) {
			createListli.textContent = `${itemname} -> amount:${itemvalue}, price: , Subtotal:`;
			createListul.appendChild(createListli);
			var divorders = document.getElementById('divorders');
			divorders.appendChild(createListul);
		}
	}
};

//function to Get Data
var getData = () => {
	//Getting the data in variables
	var val = document.querySelector('#select').value;
	var name = document.querySelector('#name').value;
	var email = document.querySelector('#address').value;
	var phone = document.querySelector('#phone').value;
	var date = document.querySelector('#date').value;
	var time = document.querySelector('#time').value;

	//Putting the data in localStorage
	localStorage.setItem('val', val);
	localStorage.setItem('name', name);
	localStorage.setItem('email', email);
	localStorage.setItem('phone', phone);
	localStorage.setItem('date', date);
	localStorage.setItem('time', time);

	//Redirect to new location
	location.href = 'summary.html';
};
