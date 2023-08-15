var p2_anniu=document.querySelector(".p2_anniu");
var p2_anniu1=document.getElementById("p2_anniu1");
var p2_wz=document.querySelector(".p2_wz");
var p2_wz1=document.querySelector(".p2_wz1");
var p2_wz2=document.querySelector(".p2_wz2");
var p2_wz3=document.querySelector(".p2_wz3");
var p4_anniu=document.querySelector(".p4_anniu");
var p5_anniu=document.getElementById("p5_anniu");
var p5_anniu1=document.getElementById("p5_anniu1");
var p5_anniu2=document.getElementById("p5_anniu2");
var p5_fanhui=document.getElementById("p5_fanhui");
var p6_anniu=document.querySelector(".p6_anniu");
var p8_anniu=document.querySelector(".p8_anniu");
var p_wz1=document.getElementById("p_wz1");
var p_wz2=document.getElementById("p_wz2");
var p_wz3=document.getElementById("p_wz3");
var p_wz4=document.getElementById("p_wz4");
var p_wz5=document.getElementById("p_wz5");
var p_wz6=document.getElementById("p_wz6");
var page2=document.getElementById("page2");
var page3=document.getElementById("page3");
var p3_ann=document.getElementById("p3_ann");
var jiazai=document.getElementById("jiazai");
var page=document.getElementById("page");
var i=0;
var t=setInterval(function(){
 if (i<100){
  i++;
 }
 else{
  clearInterval(t);
  jiazai.style.display="none";
  page.style.display="block";
 }
},30)
p_wz1.onclick=function(){
	page.style.display="none"
	page3.style.display="block"
}
p_wz3.onclick=function(){
	page.style.display="none"
	page2.style.display="block"
}
p_wz5.onclick=function(){
	page.style.display="none"
	page4.style.display="block"
}
p_wz6.onclick=function(){
	page.style.display="none"
	page6.style.display="block"
}
p8_anniu.onclick=function(){
	page8.style.display="none"
	page.style.display="block"
}
var p2xuan1=document.getElementById("p2xuan1");
var p2xuan2=document.getElementById("p2xuan2");
var p2xuan3=document.getElementById("p2xuan3");
var p2xuan4=document.getElementById("p2xuan4");
var p_xuan1=document.getElementById("p_xuan1");
var p_xuan2=document.getElementById("p_xuan2");
var p_xuan3=document.getElementById("p_xuan3");
var p_xuan4=document.getElementById("p_xuan4")
var p_xuanb1=document.getElementById("p_xuanb1");
var p_xuanb2=document.getElementById("p_xuanb2");
var p_xuanb3=document.getElementById("p_xuanb3");
var p_xuanb4=document.getElementById("p_xuanb4");
var p_xuanc1=document.getElementById("p_xuanc1");
var p_xuanc2=document.getElementById("p_xuanc2");
var p_xuanc3=document.getElementById("p_xuanc3");
var p_xuanc4=document.getElementById("p_xuanc4");
var p_xuand1=document.getElementById("p_xuand1");
var p_xuand2=document.getElementById("p_xuand2");
var p_xuand3=document.getElementById("p_xuand3");
var p_xuand4=document.getElementById("p_xuand4");
var cuowu=document.getElementById("cuowu");
var cuowu1=document.getElementById("cuowu1");
var cuowu2=document.getElementById("cuowu2");
var timu=document.getElementById("timu");
var timu1=document.getElementById("timu1");
var timu2=document.getElementById("timu2");
var timu3=document.getElementById("timu3");
var p2t_fanhui=document.getElementById("p2t_fanhui");
var ti_fanhui=document.getElementById("ti_fanhui");
var ti1_fanhui=document.getElementById("ti1_fanhui");
var ti2_fanhui=document.getElementById("ti2_fanhui");
var ti3_fanhui=document.getElementById("ti3_fanhui");
ti_fanhui.onclick=function(){
	page2.style.display="none"
	page.style.display="block"
}
ti1_fanhui.onclick=function(){
	page2.style.display="none"
	page.style.display="block"
}
ti2_fanhui.onclick=function(){
	page2.style.display="none"
	page.style.display="block"
}
ti3_fanhui.onclick=function(){
	page2.style.display="none"
	page.style.display="block"
}
p2t_fanhui.onclick=function(){
	page2.style.display="none"
	page.style.display="block"
}
p2xuan1.onclick=function(){
	cuowu.style.display="block"
	setTimeout(function(){
		cuowu.style.display="none";
		
	},1000)
}
p2xuan2.onclick=function(){
	cuowu.style.display="block"
	setTimeout(function(){
		cuowu.style.display="none";
		
	},1000)
}
p2xuan3.onclick=function(){
	p2timu.style.display="none"
	timu.style.display="block"
}
p2xuan4.onclick=function(){
	cuowu.style.display="block"
	setTimeout(function(){
		cuowu.style.display="none";
		
	},1000)
}
p_xuan1.onclick=function(){
	timu.style.display="none"
	timu1.style.display="block"
}
p_xuan2.onclick=function(){
	cuowu1.style.display="block"
	setTimeout(function(){
		cuowu1.style.display="none";
		
	},1000)
}
p_xuan3.onclick=function(){
	cuowu1.style.display="block"
	setTimeout(function(){
		cuowu1.style.display="none";
		
	},1000)
}
p_xuan4.onclick=function(){
	cuowu1.style.display="block"
	setTimeout(function(){
		cuowu1.style.display="none";
		
	},1000)
}
p_xuanb1.onclick=function(){
	cuowu2.style.display="block"
	setTimeout(function(){
		cuowu2.style.display="none";
		
	},1000)
}
p_xuanb2.onclick=function(){
	timu1.style.display="none"
	timu2.style.display="block"
}
p_xuanb3.onclick=function(){
cuowu2.style.display="block"
	setTimeout(function(){
		cuowu2.style.display="none"
	},1000)
}
p_xuanb4.onclick=function(){
cuowu2.style.display="block"
	setTimeout(function(){
		cuowu2.style.display="none"
	},1000)
}
p_xuanc1.onclick=function(){
	cuowu3.style.display="block"
		setTimeout(function(){
			cuowu3.style.display="none"
		},1000)
}
p_xuanc2.onclick=function(){
	cuowu3.style.display="block"
		setTimeout(function(){
			cuowu3.style.display="none"
		},1000)
}
p_xuanc3.onclick=function(){
	timu2.style.display="none"
	timu3.style.display="block"
}
p_xuanc4.onclick=function(){
	cuowu3.style.display="block"
		setTimeout(function(){
			cuowu3.style.display="none"
		},1000)
}
p_xuand1.onclick=function(){
	cuowu4.style.display="block"
		setTimeout(function(){
			cuowu4.style.display="none"
		},1000)
}
p_xuand2.onclick=function(){
	cuowu4.style.display="block"
		setTimeout(function(){
			cuowu4.style.display="none"
		},1000)
}
p_xuand3.onclick=function(){
	cuowu4.style.display="block"
		setTimeout(function(){
			cuowu4.style.display="none"
		},1000)
}
p_xuand4.onclick=function(){
	page2.style.display="none"
	page8.style.display="block"
}
var p_55=document.getElementById("p_55")
p_55.onclick = function() {
	if(p_5.style.animationPlayState=='paused')
	{
		p_5.style.animationPlayState='running';
		yy.play();
	}
	else {
		p_5.style.animationPlayState='paused';
		yy.pause();
	}
}
var mmm=document.querySelector(".mmm")
page.onclick=function(){
	setTimeout(function(){
		mmm.style.display="none"
	},3000)
}
p3_fanhui.onclick=function(){
	page3.style.display="none"
	page.style.display="block"
}
p3_ann.onclick=function(){
	page3.style.display="none"
	page8.style.display="block"
}