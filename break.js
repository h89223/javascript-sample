label:for(var i=0;i<3;i++)
{
		console.log("i="+i);
		for(var j=0;j<3;j++)
		{
			if (i==0)
			{
				break label;
			}
			console.log("j="+j);
		}
		console.log("=====")
}