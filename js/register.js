function provinceInit() {
	//1.创建异步提交对象
	let xhr = new XMLHttpRequest();
	//2.异步提交对象初始化
	xhr.open("GET", "data/provinceAndCity.json", true); //true为异步
	//3.提交异步请求
	xhr.send(null);
	//4.设置响应函数
	xhr.addEventListener("readystatechange", () => {
		if(xhr.readyState == 4 && xhr.status == 200) { //请求完成,且状态OK
			let json = JSON.parse(xhr.responseText);
			let node = document.getElementById("province");
			let option = document.createElement("option");
			option.value = "00";
			option.innerHTML = "请选择省份";
			option.selected = true;
			node.appendChild(option);
			if(json.result == "ok") {
				json.list.forEach((item) => {
					if(item.code.length == 2) {
						let option = document.createElement("option");
						option.value = item.code;
						option.innerHTML = item.name;
						node.appendChild(option);
					}
				});
			}

			//给第一个province设置change监听事件得到city
			let nodeCity = document.getElementById("city");
			let optionCity = document.createElement("option");
			optionCity.innerHTML += "<option>请选择市</option>";
			nodeCity.appendChild(optionCity);
			document.getElementById("province").addEventListener("change", () => {
				let select1 = document.getElementById("province").value;
				document.getElementById("city").length = 1; //清空保留第一行<请选择市>
				json.list.forEach((item) => {
					if(item.code.length == 4 && select1 == item.code.substring(0, 2)) {
						let optionCity = document.createElement("option");
						optionCity.value = item.code;
						optionCity.innerHTML = item.name;
						nodeCity.appendChild(optionCity);
					}
				});

			}, false);

		}
	}, false);

}

function init() {
	provinceInit();
	/*校验用户名*/
		document.getElementById("userName").addEventListener("focus", () => {
		document.getElementById("userName").innerHTML = "";
		document.getElementById("userNameMessage").className = "";
		document.getElementById("userNameImage").className = "";
	}, false);
	document.getElementById("userName").addEventListener("blur", () => {
		let regUsernameCode = /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/;
		let userNameValue = document.getElementById("userName").value;
		let resultUserN = regUsernameCode.test(userNameValue);
		//1.创建异步提交对象
		let xhr = new XMLHttpRequest();
		//2.异步提交对象初始化
		xhr.open("GET", "data/user.json", true); //true为异步
		//3.提交异步请求
		xhr.send(null);
		//4.设置响应函数
		xhr.addEventListener("readystatechange", () => {
			if(xhr.readyState == 4 && xhr.status == 200) { //请求完成,且状态OK
				let json = JSON.parse(xhr.responseText);
				if(json.result == "repeat") {
					let re = false;
					json.list.forEach((item) => {
						if(item.name == userNameValue)
							re = true;
					});

					if(resultUserN) { //先判断输入的是否符合格式
						if(re == true) { //在判断是否存在
							document.getElementById("userNameMessage").innerHTML = "用户名已存在";
							document.getElementById("userNameMessage").className = "errorColor";
							document.getElementById("userNameImage").className = "errotImage";
						} else {
							document.getElementById("userNameMessage").innerHTML = "用户名正确";
							document.getElementById("userNameMessage").className = "successColor";
							document.getElementById("userNameImage").className = "sucessImage";
						}
					} else {
						document.getElementById("userNameMessage").innerHTML = "用户格式错误!用户名为:字母开头,5-16字节";
						document.getElementById("userNameMessage").className = "errorColor";
						document.getElementById("userNameImage").className = "errotImage";
					}

				}
			}
		}, false);
	}, false)
	/*校验密码*/
	document.getElementById("password").addEventListener("focus", () => {
		document.getElementById("passwordMessage").innerHTML = "";
		document.getElementById("passwordMessage").className = "";
		document.getElementById("passwordImage").className = "";
	}, false);
	document.getElementById("password").addEventListener("blur", () => {
		let regPasswordCode = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/; //必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间
		let passwordValue = document.getElementById("password").value;
		let resultPassword = regPasswordCode.test(passwordValue);
		if(resultPassword) {
			document.getElementById("passwordMessage").innerHTML = "密码格式正确";
			document.getElementById("passwordMessage").className = "successColor";
			document.getElementById("passwordImage").className = "sucessImage";
		} else {
			document.getElementById("passwordMessage").innerHTML = "格式错误,请输入8-10位包含大小写字母和数字";
			document.getElementById("passwordMessage").className = "errorColor";
			document.getElementById("passwordImage").className = "errotImage";
		}
	}, false);

	/*校验确认密码*/
	document.getElementById("rePassword").addEventListener("focus", () => {
		document.getElementById("rePassword").innerHTML = "";
		document.getElementById("rePasswordMessage").className = "";
		document.getElementById("rePasswordImage").className = "";
	}, false);
	document.getElementById("rePassword").addEventListener("blur", () => {
		let repasswordValue = document.getElementById("rePassword").value;
		let passwordValue = document.getElementById("password").value;
		if(repasswordValue == passwordValue) {
			document.getElementById("rePasswordMessage").innerHTML = "确认密码正确";
			document.getElementById("rePasswordMessage").className = "successColor";
			document.getElementById("rePasswordImage").className = "sucessImage";
		} else {
			document.getElementById("rePasswordMessage").innerHTML = "密码确认错误";
			document.getElementById("rePasswordMessage").className = "errorColor";
			document.getElementById("rePasswordImage").className = "errotImage";
		}
	}, false);

	/*校验邮箱*/
	document.getElementById("email").addEventListener("focus", () => {
		document.getElementById("emailMessage").innerHTML = "";
		document.getElementById("emailMessage").className = "";
		document.getElementById("emailImage").className = "";
	}, false);
	document.getElementById("email").addEventListener("blur", () => {
		let regEmailCode = /^\w+@\w+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2,3})?$/;
		let emailValue = document.getElementById("email").value;
		let resultEmail = regEmailCode.test(emailValue);
		if(resultEmail) {
			document.getElementById("emailMessage").innerHTML = "邮箱格式正确";
			document.getElementById("emailMessage").className = "successColor";
			document.getElementById("emailImage").className = "sucessImage";
		} else {
			document.getElementById("emailMessage").innerHTML = "邮箱格式错误!";
			document.getElementById("emailMessage").className = "errorColor";
			document.getElementById("emailImage").className = "errotImage";
		}

	}, false);
}
window.addEventListener("load", init, false);