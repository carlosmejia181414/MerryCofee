let gotData = () => {
	//Recovering the data
	var val = localStorage.getItem('val');
	var name = localStorage.getItem('name');
	var email = localStorage.getItem('email');
	var phone = localStorage.getItem('phone');
	var date = localStorage.getItem('date');
	var time = localStorage.getItem('time');
	var order = localStorage.getItem('order');
	//Creatin elemento into summary.html
	var Customer = document.createElement('h1');
	Customer.setAttribute('class', 'titlesumary');
	Customer.textContent = 'Customer Summary';
	var containersummary = document.querySelector('.containerApi');

	var ulForm = document.createElement('ul');
	ulForm.setAttribute('class', 'summaryul');
	//Creating li name
	var liname = document.createElement('li');
	liname.setAttribute('class', 'summaryli');
	liname.textContent = `Name : ${val} ${name}`;
	//Creating li email
	var liemail = document.createElement('li');
	liemail.setAttribute('class', 'summaryli');
	liemail.textContent = `Email : ${email}`;
	//Creating li phone
	var liphone = document.createElement('li');
	liphone.setAttribute('class', 'summaryli');
	liphone.textContent = `Phone : ${phone}`;
	//Creating li date
	var lidate = document.createElement('li');
	lidate.setAttribute('class', 'summaryli');
	lidate.textContent = `Date : ${date}`;
	//Creating li time
	var litime = document.createElement('li');
	litime.setAttribute('class', 'summaryli');
	litime.textContent = `time : ${time}`;

	//Creating second summary
	var items = document.createElement('h1');
	items.setAttribute('class', 'titlesumary');
	items.textContent = 'You Picked the Following Items';

	//Adding elements to ul
	containersummary.appendChild(Customer);
	containersummary.appendChild(ulForm);
	ulForm.appendChild(liname);
	ulForm.appendChild(liemail);
	ulForm.appendChild(liphone);
	ulForm.appendChild(lidate);
	ulForm.appendChild(litime);

	containersummary.appendChild(items);
};
