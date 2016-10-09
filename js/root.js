// JavaScript Document
	var element=document.getElementById("one");
	var position=300;
	var id=setInterval(function(){
		if(position===600)
			{
				clearInterval(id);
				position=300;
			}
		position++;
		element.style.left=position + 'px';	
	},10);
	 $(window).load(function() {
		 "use strict";
       $("#222").hide();
		 $("#333").hide();
		 $("#444").hide();
    });
	$(document).ready(function(){
		"use strict";
		$("#2").click(function(){
			if ($("#2").text()==="more") {
				//setflag = false;
				$("#2").html("hide");
				$("#222").show();
				//alert("Not a valid character   "+$("#2").text());
			}	
			else
			{
				//alert("demo");
				$("#2").html("more");
				$("#222").hide();
			}
				
		//$("#2").html("hide");			
       // $("#222").toggle();
    });
		
		$("#3").click(function(){
       // $("#333").toggle();
			if ($("#3").text()==="more") {
				//setflag = false;
				$("#3").html("hide");
				$("#333").show();
				//alert("Not a valid character   "+$("#3").text());
			}	
			else
			{
				//alert("demo");
				$("#3").html("more");
				$("#333").hide();
			}
    });
		$("#4").click(function(){
       // $("#333").toggle();
			if ($("#4").text()==="more") {
				//setflag = false;
				$("#4").html("hide");
				$("#444").show();
				//alert("Not a valid character   "+$("#3").text());
			}	
			else
			{
				//alert("demo");
				$("#4").html("more");
				$("#444").hide();
			}
    });
	
		$("#about").click(function(){
			showDet();
		});
		
		container();
		
});


function showDet()
{
	alert();
}
function container()
{
	var container= document.getElementById("container");
	var position=0;
	var rotate=setInterval(function(){
		if(position===1550)
			{
				position=0;
				var top=container.offsetTop;
				if(top===1040)
					{
						top=190-170;
					}
				
				top=top+170;
				container.style.top=top +'px';
				//alert(top);
				
			}
		position++;
		container.style.left=position+ 'px';
		
	},1);
}
	