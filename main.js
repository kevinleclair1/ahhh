$(function() {
	$('a').on('click', function(e){
		e.preventDefault();
		$('audio')[0].play();
	});
});