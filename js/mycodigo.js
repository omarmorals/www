	$(document).ready(function() {
    //if ($("#txt").text() == "144800"){alert(4)}
		startTime();
		start();
		$('#mesaespecial1').click(mesaespecial1);
		$('#mesaespecial2').click(mesaespecial2);
		$('#delatemesero1').click(delatemesero1);
		$('#delatemesero2').click(delatemesero2);
		function delatemesero1 () {
			$('#mesero1 tr:last-child').remove(); 
			turno();
		}
		function delatemesero2 () {
			$('#mesero2 tr:last-child').remove(); 
			turno();
		}
        function mesaespecial1 () {
       		//alert("hola soy la mesa espacial 3");
       		$('#mesero1').addClass('verde')
			$('#mesero3, #mesero2').removeClass('verde');
       }
       function mesaespecial2 () {
       	    //alert("hola soy la mesa espacial 3");
       		$('#mesero2').addClass('verde')
			$('#mesero3, #mesero1').removeClass('verde');
       }
		var number_ = parseInt("",10);
		var total = parseInt("",10);

	    function start () {
	    	turno();
	        boton();
	    }
		function turno () {
			if ( parseInt($('#mesero1 tr:last-child .total').text(),10) < 
				 parseInt($('#mesero2 tr:last-child .total').text(),10)
				) 
			{
	    		$("#mesero1").addClass("verde");
	    		$("#mesero2").removeClass("verde");
	    	}
	    	else if ( parseInt($('#mesero2 tr:last-child .total').text(),10) < 
	    			  parseInt($('#mesero1 tr:last-child .total').text(),10)
	    			 ) 
	    	{
	    		//alert("dos es el siguiente")
	    		$("#mesero2").addClass("verde");
	    		$("#mesero1").removeClass("verde");
	    	}
	    	else if ( parseInt($('#mesero1 tr:last-child .reloj').text(),10) < 
				 parseInt($('#mesero2 tr:last-child .reloj').text(),10) 
				) 
			{
	    		$("#mesero1").addClass("verde");
	    		$("#mesero2").removeClass("verde");
	    	}
	    	else if ( parseInt($('#mesero2 tr:last-child .reloj').text(),10) < 
	    			  parseInt($('#mesero1 tr:last-child .reloj').text(),10)
	    			 ) 
	    	{
	    		//alert("dos es el siguiente")
	    		$("#mesero2").addClass("verde");
	    		$("#mesero1").removeClass("verde");
	    	}
	    	else{
	    		alert("no se que hacer");
	    	}
	    }
	    function nuevaMesa (){
			var html = '';
			html += '<tr>';
			html += '<td class="reloj">' + parseInt($("#txt").text(),10) + '</td>'
			html += '<td class="mesa"> <input placeholder="Table"> </td>';
			html += '<td class="personas">' + parseInt(number_,10) + '</td>';
			html += '<td class="total">' + parseInt(total,10) + '</td>';
			html += '</tr>';
			return html;	
		}
		function boton () {
			$("#botones a").click(function() {
				    number_ = parseInt($(this).text(),10);
             		total = parseInt(number_) + parseInt($(".verde tr:last-child .total").text(),10);
		    		$(".verde").append(nuevaMesa);
		    	turno();	
		    });
		}
		function startTime(){
			var today=new Date();
			var h=today.getHours();
			var m=today.getMinutes();
			var s=today.getSeconds();
			m=checkTime(m);
			s=checkTime(s);
			document.getElementById('txt').innerHTML=h+""+m+""+s;
			t=setTimeout(function(){startTime()},500);
		}
		function checkTime(i){
			if (i<10)
			  {
			  i="0" + i;
			  }
			return i;
		}
		var now = new Date();
var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 1, 30, 0, 0) - now;
if (millisTill10 < 0) {
     millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
}
setTimeout(function(){alert("hay una reservacin en party room de 12 personas, una high chair !")}, millisTill10);

var stop = "";
/*var doIt = function() {
   alert("Thank you for try out EasyHost. Get your pro plan at www.depalab.com and star to esyosting today");
}
setTimeout(doIt, 10000);*/

    });


function onDeviceReady() {
    if (parseFloat(window.device.version) === 7.0) {
          document.body.style.marginTop = "20px";
    }
}
  
document.addEventListener('deviceready', onDeviceReady, false);