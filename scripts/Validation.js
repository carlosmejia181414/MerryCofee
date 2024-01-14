//Validate inputs
function validate (e) {
	e.preventDefault();
	var valid = true;

	//Validate Email Address
	var Email = document.getElementById('address').value.toLowerCase();
	//Validate RadioBottom
	var Center = document.getElementById('Center');
	var Balcony = document.getElementById('Balcony');
	var relax = document.getElementById('relax');

	//Validate textArea to Orders
	if (document.getElementById('createListul')) {
	} else {
		let msg = 'You have to choose a Order Below';
		let val = 'buttonReg';
		let val2 = 'buttonReg';
		valid = functionPopUP(msg, val, val2);
	}
	//Validate radiobuttons to Orders
	if (Center.checked || Balcony.checked || relax.checked) {
	} else {
		let msg = 'You have to choose a Location';
		let val = 'section';
		let val2 = 'section';
		valid = functionPopUP(msg, val, val2);
	}
	//Validate time to reservation
	if (form.time.value === '') {
		let msg = 'Time is Required';
		let val = 'time';
		let val2 = 'section';
		valid = functionPopUP(msg, val, val2);
	}
	//Validate date to reservation
	if (form.date.value === '') {
		let msg = 'Date is Required';
		let val = 'date';
		let val2 = 'section';
		valid = functionPopUP(msg, val, val2);
	}
	//Validate phone to Orders
	if (form.phone.value === '') {
		let msg = 'Phone is Required';
		let val = 'phone';
		let val2 = 'section';
		valid = functionPopUP(msg, val, val2);
	}
	//Validate email format to Orders
	if (Email != '') {
		expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (!expr.test(Email)) {
			let msg = 'Format to Email Invalid';
			let val = 'address';
			let val2 = 'section';
			valid = functionPopUP(msg, val, val2);
		}
	}
	//Validate email to Orders
	if (form.address.value === '') {
		let msg = 'Email is Required';
		let val = 'address';
		let val2 = 'section';
		valid = functionPopUP(msg, val, val2);
	}
	//Validate name to Orders
	if (form.name.value === '') {
		let msg = 'Full name is Required';
		let val = 'name';
		let val2 = 'section';
		valid = functionPopUP(msg, val, val2);
	}
	//Validate select to Orders
	if (form.select.value === 'chose') {
		let msg = 'You have to Chose Option';
		let val = 'select';
		let val2 = 'section';
		valid = functionPopUP(msg, val, val2);
	}
	//confirm validation to Orders
	if (valid) {
		Swal.fire({
			title: 'success',
			text: 'Thank for Your Registration',
			icon: 'success',
			didClose: () => {
				getData();
				let formulario = document.getElementById('formID');
				formulario.reset();
				valid = false;
			},
		});
	}
};

//validate just numbers
function valideKey(evt) {
	// code is the decimal ASCII representation of the pressed key.
	var code = evt.which ? evt.which : evt.keyCode;
	if (code == 8) {
		// backspace.
		return true;
	} else if (code >= 48 && code <= 57) {
		// is a number.
		return true;
	} else {
		// other keys.
		return false;
	}
}

//function to do PopUP to validation with msg
let functionPopUP = (Msg, val, val2) => {
	Swal.fire({
		title: '',
		text: Msg,
		icon: 'error',
		didClose: () => {
			document.getElementById(val).focus();
			document.getElementById(val2).scrollIntoView();
		},
	});
	return false;
};
