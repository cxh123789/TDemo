function init(){
	document.getElementById("bodyTest").addEventListener("click",()=>{
		console.log("body");
	},false);
	document.getElementById("pTest").addEventListener("click",function(){
		console.log("P");
	},false);
	document.getElementById("divTest").addEventListener("click",()=>{
		console.log("div");
	},false);
	document.getElementById("btnTest").addEventListener("click",(event)=>{
		console.log("button");
		event.stopPropagation();
	},false);
	window.addEventListener("click",()=>{
		console.log("window");
	},false);
}

window.addEventListener("load",init,false);
