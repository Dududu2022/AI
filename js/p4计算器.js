var p4_fanhui=document.getElementById("p4_fanhui");
var a="";
		  var bool=false;
		  function show(){
		   element=event.srcElement.innerText;
		   if (element=="="||element=="C") {
		    return;
		   }
		   if (bool&&(element!="+" && element!="/" && element!="*" && element!="-")) {   
		     a="";
		   }
		   bool=false;
		   a+=element;
		   document.getElementById('end').innerText=a;
		  }
		  function Calculate(){
		   bool=true;
		   document.getElementById('end').innerText=eval(a);
		   a=eval(a);
		   if(a>=999999){
		    a="Err";
		   }
		  }
		  function clearly(){
		   a="";
		   document.getElementById('end').innerText="0";
		  }
p4_fanhui.onclick=function(){
	page4.style.display="none"
	page.style.display="block"
}