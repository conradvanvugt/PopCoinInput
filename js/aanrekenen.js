$('.func').click(function(){
	var bedrag = $('#voorpunt').val() + '.' + $('#napunt').val();
	var beschrijving ="";
	var lines = $('#beschrijving').val().split('\n');
for(var i = 0;i < lines.length;i++){
    //code here using lines[i] which will give you each line
	beschrijving += lines[i] ;
	if (lines.length -1 != i){
		
	
	beschrijving  += ":enter:";
	}
	
	}
	if (beschrijving != ""){
	beschrijving = beschrijving.split(' ').join(':space:');
	}
	var client = new HttpClient();
     	client.post('http://192.168.137.101:8000/api/pay/' + bedrag + '/' + beschrijving , function(response) {
    // do something with response

	
	console.log(response + ' werkt');
	});
		$('#voorpunt').val("00");
	$('#napunt').val("00");
	$('#beschrijving').val("");
	 $('#beschrijving').trigger('autoresize');
});
var HttpClient = function() {
    this.post = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() { 
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open( "POST", aUrl, true );            
        anHttpRequest.send( null );
    }
}
function validateQty(event) {
    var key = window.event ? event.keyCode : event.which;
if (event.keyCode == 8 || event.keyCode == 46
 || event.keyCode == 37 || event.keyCode == 39) {
    return true;
}
else if ( key < 48 || key > 57 ) {
    return false;
}
else return true;
};