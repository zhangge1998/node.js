exports.world = function(x){
var str="";
var i=0;
while(i<x.length)
{
	if(x.charAt(i)==1||x.charAt(j)==6)
		str+='... ';
	else
		str+='._. ';
i++;
}
str+='\n';
var j=0;
while(j<x.length)
{
	if(x.charAt(j)==0)
		str+='|.| ';
	else if(x.charAt(j)==1 || x.charAt(j)==7)
		str+='..| ';
	else if(x.charAt(j)==2 || x.charAt(j)==3)
		str+='._| ';
	else if(x.charAt(j)==5 || x.charAt(j)==6)
		str+='|_. ';
	else
		str+='|_| ';
j++;
}
str+='\n';
var k=0;
while(k<x.length)
{
	 if(x.charAt(k)==0||x.charAt(k)==6||x.charAt(j)==8)
                str+='|_| ';
        else if(x.charAt(k)==1 ||x.charAt(k)==4|| x.charAt(k)==7||x.charAt(k)==9)
                str+='..| ';
        else if(x.charAt(k)==2)
                str+='|_. ';
        else if(x.charAt(k)==3 || x.charAt(k)==5)
                str+='._| ';
k++;
}
console.log(str);
}
