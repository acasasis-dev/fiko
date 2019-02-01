$('.hastooltip').mousemove(function(e){
	var tooltipText = $(this).attr('icon-text');
	$('#notif').text(tooltipText).show();
	$('#notif').css('top', e.clientY + 15);
	$('#notif').css('left', e.clientX + 10);
}).mouseout(function(){
	$('#notif').hide();
});

$('.deleteTooltip').mousemove(function(e){
	var tooltipText = $(this).attr('icon-text');
	$('#notif_delete').text(tooltipText).show();
	$('#notif_delete').css('top', e.clientY + 15);
	$('#notif_delete').css('left', e.clientX + 10);
	
}).mouseout(function(){
	$('#notif_delete').hide();
});