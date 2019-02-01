$(document).ready(function(){
	$('input.datepicker').datepicker({
		maxDate: new Date(),
      changeMonth: true,
      changeYear: true,      
		showOtherMonths: true,
		yearRange: "c-100:c",
      dateFormat: "yy-mm-dd",
	});
});

/*
* name: notif
* description: the function to use the toaster of inspina 
* return: none
* parameter: String msg; the message, String type; the type of toaster
*/
function notif(msg, type) {
	toastr.options = {
	  "closeButton": true,
	  "debug": false,
	  "progressBar": true,
	  "preventDuplicates": false,
	  "positionClass": "toast-top-right",
	  "onclick": null,
	  "showDuration": "400",
	  "hideDuration": "1000",
	  "timeOut": "7000",
	  "extendedTimeOut": "1000",
	  "showEasing": "swing",
	  "hideEasing": "linear",
	  "showMethod": "fadeIn",
	  "hideMethod": "fadeOut"
	};
		
	switch(type) {
		case 'success' :
			toastr.success(msg);
			break;
		case 'info':
			toastr.info(msg);
			break;
		case 'warning':
			toastr.warning(msg);
			break;
		case 'error': 
			toastr.error(msg);
			break;
		default: 
			console.log('Toastr: Unknown type.')
	}
}