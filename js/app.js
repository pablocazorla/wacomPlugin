$('document').ready(function(){
	var wacom = wacomAPI();

	var $tdata = $('#tdata');

	for(var a in wacom){
		$('<tr><td>'+a+'</td><td id="td-'+a+'"></td></tr>').appendTo($tdata);
	}

	var update = function(){
		for(var a in wacom){
			var v = wacom[a] + ' ';
			$('#td-'+a).html(v);
		}
		console.log(wacom.pointerType);
	};
	update();
	$(window).mousemove(update);
});