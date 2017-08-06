/*感觉这是最贴心的注释了
  时间 ：17/08/05 
  
 */
function dele(){
	
	var btnCheck=document.getElementsByName("checks");//获取所有选择框存在

	var isCheck ="";//设置一个变量赋空值
	btnCheck.forEach((item)=>{ //遍历我收集的选择框数据
		if(item.checked==true){  //checked 属性设置或返回 checkbox 是否应被选中。
			alert("确定要删除数据？");
			if(isCheck ==""){ 	 //给isChenk赋值 值为value；
				isCheck+=item.value
			}else{
				isCheck = ",";
				isCheck+=item.value;
			}
		}
	});
	if(isCheck==""){ //这个就是没有选择选择框
		alert("请选择要删除的数据");
	}else{
		if(confirm("确定删除吗？")){
				let arrays=isCheck.split(","); //用，分割isCheck  split() 方法用于把一个字符串分割成字符串数组。
				arrays.forEach((item)=>{ 
				let index=document.getElementById("row_"+item).rowIndex; //获取下标 我建表已经表好了哈哈哈
				document.getElementById("myTable").deleteRow(index); //deleteRow() 方法用于从表格删除指定位置的行
				});

		}
	}
} 
function add(){
	var userName = document.getElementById("add_username").value; //这个四个就是获取
	var address = document.getElementById("add_address").value;
	var phoneNumber = document.getElementById("add_phoneNumber").value;
	var remak = document.getElementById("add_remark").value;
	document.getElementById("section_tableUser").hidden=false; //表格显示
	document.getElementById("section_addUser").hidden.true; //表格隐藏
	let table=document.getElementById("myTable"); //获取原表格
	let len=table.rows.length; //获取表格长途
	let maxNumber=parseInt(table.rows[len-1].id.substring(4))+1;//获取插入row_xx这个xx
	let row=table.insertRow(len-1); //在len-1插入新的一行
	row.class= "add"; //行的类 我原本想添加样式的失败我回头学学
	row.id="row_"+maxNumber; //id
	
	let cell0=row.insertCell(0); //单元格第一个插入
	let input = document.createElement("input");//插入一个input 标签
	input.value=maxNumber; //input value
	input.type="checkbox";
	input.name="checks";
	cell0.appendChild(input); //下面 就是添加表格信息
	row.insertCell(1).innerHTML=userName;
	row.insertCell(2).innerHTML=address;
	row.insertCell(3).innerHTML=phoneNumber;
	row.insertCell(4).innerHTML=remak
	}
function init(){
				document.getElementById("add_btn_addUser").addEventListener("click",add,false); //增加按钮添加监听事件
				document.getElementById("btnDelete").addEventListener("click",dele,false);//删除按钮添加监听事件
				document.getElementById("btnAddition").addEventListener("click",()=>{ //提交按钮监听事件
				document.getElementById("section_tableUser").hidden=true; //用户表隐藏
				document.getElementById("section_addUser").hidden=false;//添加表显示
				},false);
				
			}
			window.addEventListener("load",init,false); 






	

