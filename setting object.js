var teacher = 
{
	name:"家輝",	     //屬性
	age:18,		     //屬性
	subject:"區塊鏈", //屬性

	teaching:function()
	{
		console.log("開始教學");	  //行為
	},
	relaxing:function()
	{
		console.log("開始講故事"); //行為
	}
};
teacher.subject = ["線性代數","區塊鏈"];   //新增科目線代
teacher.teaching=function()  //也可寫teacher["teaching"]=function()
{
	console.log("教線代");
};
teacher.students=["a","b","c","d"]; //增加學員類表
console.log(teacher);