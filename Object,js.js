var teacher = new Object();
teacher.name = "家輝";
teacher.age = 40;
teacher.subject = "OS"
teacher.teach = function()
{
	console.log("教學中....");
};
	console.log(teacher);
	//取得屬性
	console.log(teacher.name)

//-------建立物件的兩種寫法--------//

var teacher2 =
{
	name:'開暉',
	age:90,
	subject:"tras",
	teach:function()
	{
		console.log("教學中");
	}	
};
console.log(teacher2);
//取得屬性的第二種寫法
console.log(teacher2["name"]);