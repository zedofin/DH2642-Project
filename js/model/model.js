function putConsole(text){
	$('#console').append("> "+text +"<br />");
}
$('#console').click(function(){
	if ($('#console').height() == 15) {
		$('#console').height("100%");
	}
	else {
		$('#console').height(15);
	}
});
putConsole("CLICK TO TOGGLE");
putConsole("putConsole('Hello World!');");
putConsole("Hello World!");
putConsole("");
putConsole("included: model.js");

