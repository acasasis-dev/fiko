var myUrl = $('#url').val();

//Start of Login 
	$('#loginAction').click(function(){
		$.ajax({
			url: myUrl + 'login/login_validation',
			type: 'POST',
			data: $('#login_form').serialize(),
			success: function(data){
				if(!data){
					mike_account();
				}
				else{
					var data = JSON.parse(data);
					var error = data.split(/\n/);
					login_validity(error);
				}
			}
		});
		function mike_account(){
			var username = $('#username').val();
			var password = $('#password').val();
			$.ajax({
				url: myUrl + 'login/do_login',
				type: 'POST',
				dataType: 'JSON',
				data: {'username': username, 'password': password},
				success: function(data){
					if(data == 'loggedIn'){
						location.replace(myUrl + 'home');
					}
					else{
						alert(data);
					}
				}
			});	
		}
		function login_validity(error){
			$('input').css("border-color","#cecfd3");
          	$('select').css("border-color","#cecfd3")
         	var fields =['username', 'password'];
          	console.log(Object.values(fields));

          	for(var i=0; i<error.length;i++){
            for(var a=0; a<fields.length; a++){
            	if(error[i].includes(fields[a])){
                $('#'+fields[a]).css("border-color","red");
                $('#'+fields[a]).attr("title",error[i]);
              }
            }
          }
		}
	});
//End of login