$(document).ready(function(){
	$("#username").change(function(){
		var username = $("#username").val();
		var usernameValid = username.search(/[a-zA-Z]+/g);
		if(usernameValid == -1 || username =="" || username ==" "){
			$(".username").css('color','red');
			$(".username").text('Username Incorrect');
		}
		else{
			$(".username").css('color',"green");
			$(".username").text('Username Correct');
		}
	});
	$("#password").change(function(){
		var password = $("#password").val();
		var passwordValid = password.search(/^(?=.*\d)[0-9a-zA-Z]{5,}$/);
		if (passwordValid == -1 || password =="" || password == " ") {
			$(".password").css('color','red');
			$(".password").text('Password Incorrect');
		}
		else{
			$(".password").css('color',"green");
			$(".password").text('Password Correct');
		}
	});
	$("#repassword").change(function(){
		if($("#repassword").val() == $("#password").val()){
			$(".repassword").css('color',"green");
			$(".repassword").text('Re-password Correct');
		}
		else{
			$(".repassword").css('color',"red");
			$(".repassword").text('Re-password Incorrect');
		}
	});
	$("#mail").change(function(){
		var mail = $("#mail").val();
		var mailValid = mail.search(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
		if(mailValid ==-1 || mail =="" || mail == " "){
			$(".email").css('color','red');
			$(".email").text('E-mail Incorrect');
		}
		else{
			$(".email").css('color',"green");
			$(".email").text('E-mail Correct');
		}
	});
	$("#FirstName").change(function(){
		var firstName = $("#FirstName").val();
		var firstNameValid = firstName.search(/[a-zA-Z]+/g);
		if (firstNameValid == -1 || firstName == "" || firstName == " ") {
			$(".firstName").css('color','red');
			$(".firstName").text('First Name Incorrect');
		}
		else{
			$(".firstName").css('color',"green");
			$(".firstName").text('First Name Correct');
		}
	});
	$("#SecondName").change(function(){
		var secondName = $("#SecondName").val();
		var secondNameValid = secondName.search(/[a-zA-Z]+/g);
		if (secondNameValid == -1 || secondName == "" || secondName == " ") {
			$(".SecondName").css('color','red');
			$(".SecondName").text('Second Name Incorrect');
		}
		else{
			$(".SecondName").css('color','green');
			$(".SecondName").text('Second Name Correct');
		}
	});
	$("#pnoneNumber").change(function(){
		var phoneNumber = $("#pnoneNumber").val();
		var phoneNumberValid = phoneNumber.search(/^[(]?[0-9]{3}[)]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);
		if (phoneNumberValid == -1 || phoneNumber == "" || phoneNumber == " ") {
			$(".pnoneNumber").css('color','red');
			$(".pnoneNumber").text('Phone Number Incorrect');
		}
		else{
			$(".pnoneNumber").css('color','green');
			$(".pnoneNumber").text('Phone Number Correct');
		}
	});
	$("#knopka").click(function(){
		var usernameLocal = $("#username").val();
		var passwordLocal = $("#password").val();
		var mailLocal = $("#mail").val();
		var firstNameLocal = $("#FirstName").val();
		var secondNameLocal = $("#SecondName").val();
		var phoneNumberLocal = $("#pnoneNumber").val();
		var isBanned = false;
		var isOnline = true;
		var country = $("#country").val();
		if(localStorage.getItem('users') != null || localStorage.getItem('users') != undefined){
			var t = localStorage.getItem('users');
			var userArr = JSON.parse(t);
			for(let i = 0; i<userArr.length ; i++){
				if (userArr[i].usernameKey == $("#username").val()|| userArr[i].mailKey == mailLocal || userArr[i].phoneNumberKey == phoneNumberLocal) {
					alert('This user is already exist');
					var flag = false;
					break;
				}
			}
		}
		if (flag != false && usernameLocal != "" && passwordLocal != "" && mailLocal != "" && firstNameLocal != "" && secondNameLocal!="" && phoneNumberLocal != "") 
		{
			if(localStorage.getItem('users') == null || localStorage.getItem('users') == undefined){
				var a = [];
				localStorage.setItem('users',JSON.stringify(a));
				var user = {
					usernameKey: usernameLocal,
					passwordKey: passwordLocal,
					mailKey: mailLocal,
					firstNameKey: firstNameLocal,
					secondNameKey: secondNameLocal,
					phoneNumberKey: phoneNumberLocal,
					countryKey:country,
					online:isOnline,
					bann:isBanned,
				}
				var c = localStorage.getItem('users');
				var b = JSON.parse(c);
				b.push(user);
				localStorage.setItem('users',JSON.stringify(b));
				location.href = "../html/newsiteWithLogin.html";
			}
			else{
				var user = {
					usernameKey: usernameLocal,
					passwordKey: passwordLocal,
					mailKey: mailLocal,
					firstNameKey: firstNameLocal,
					secondNameKey: secondNameLocal,
					phoneNumberKey: phoneNumberLocal,
					countryKey:country,
					online:isOnline,
					bann:isBanned,
				}
				var c = localStorage.getItem('users');
				var b = JSON.parse(c);
				b.push(user);
				localStorage.setItem('users',JSON.stringify(b));
				location.href = "../html/newsiteWithLogin.html";
			}
			/*var user = {
				usernameKey: usernameLocal,
				passwordKey: passwordLocal,
				mailKey: mailLocal,
				firstNameKey: firstNameLocal,
				secondNameKey: secondNameLocal,
				phoneNumberKey: phoneNumberLocal,
				countryKey:country,
			}
			var c = localStorage.getItem('users');
			var b = JSON.parse(c);
			b.push(user);
			localStorage.setItem('users'.JSON.stringify(b));
			location.href = "../html/newSiteWithLogin.html";*/
	}
		/*else if(flag != false){
			alert("Fill all pls");
		}*/
	})
});