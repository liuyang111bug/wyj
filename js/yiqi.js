// JavaScript Document
var Dianji=0;
window.onload=function(){
	var buhao = document.getElementById("buhao");
	var hao = document.getElementById("hao");
	buhao.onclick=function(){
		Dianji++;
		if(Dianji==1){
	   			alert("来登封吧");
	   }else if(Dianji==2){
		   		alert("吃火锅");
		   		
	   }else if(Dianji==3){
		   		alert("看电影");
		   		
	   }else if(Dianji==4){
		   		alert("登嵩山");
		   		
	  }else if(Dianji==5){
		   		alert("逛街");
	  }else if(Dianji==6){
		   		alert("好不好");
	  }else if(Dianji==7){
		   		alert("工");
		  		Dianji=1;
	  }

	}
	hao.onclick=function(){
		alert("那快点来吧我去接你");
	}
	

}