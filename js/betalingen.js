var rows = 0;
function getdata(){
		  			$.ajax({
						type: "POST",
						url: 'http://51.15.42.16/selectbedrag.php',
  crossDomain: true,
  dataType: 'text',
  success: function(data) {
	if(data != "0 results"){
	var splitter = data.split('!<br>!');
	var arrayLength = splitter.length -1 ;
	
for (rows; rows < arrayLength; rows++) {
    var lijn = splitter[rows].split('!-!');
	var bedrag = lijn[0].replace("bedrag: ", "");
	var beschrijving = lijn[1].replace("beschrijving: ", "");
	beschrijving = beschrijving.split(':enter:').join('<br/>');
	beschrijving = beschrijving.split(':space:').join(' ');
	var tijdstip = lijn[2].replace("tijdstip: ", " ")
	$('tbody').prepend('<tr><td>' + tijdstip + '</td><td>&euro; ' + bedrag + '</td><td>' + beschrijving + '</td></tr>');
	$('.t').show();
}
  }
  else{
	  $('.t').hide();
  }
  	}
});
}
$( document ).ready(function() {
	getdata();
	window.setInterval(function(){
 getdata();
}, 5000);

})



