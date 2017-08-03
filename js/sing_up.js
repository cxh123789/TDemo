function init(){
	document.getElementById("myForm").addEventListener("submit",(event)=>{
		let username = document.getElementById("username").value;
		if(username==""){
			alert("用户名不为空!");
			event.preventDefault();
		}
		let pass = document.getElementById("userpass").value.length;
		if(pass<6){
			alert("密码不得小于6位！！！");
			event.preventDefault();
		}
		if(pass>22){
			alert("密码不得大于22位！！！");
			event.preventDefault();
		}
		let password = document.getElementById("userpass").value;
		let repassword = document.getElementById("reuserpass").value;
		if(password!=repassword){
			alert("两次密码不相同！！！");
			event.preventDefault();
		}
	},false);
}

window.addEventListener("load",init,false);
function next(frm){
	
	
			if(window.event.keyCode==13){
				window.event.keyCode=9;
			}
	
	};
		
		

