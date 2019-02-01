
  notification();
 setInterval(function(){ notification(); }, 3000);
  function notification(){
    $.ajax({
      url: 'http://localhost/sis_se/buildings/notification',
      success: function(data){
        $('#notif').html('');
        var data = JSON.parse(data);
        var count = 0;
        for(var i=0; i<data.length; i++){
          if(data[i].View === 0 || data[i].View == 0){
            count++;
            $('#count-notif').html(count);
            var notif = "<a href='http://localhost/sis_se/buildings/display_notification?notifid="+data[i].NotificationID+"&&sid="+data[i].StockID+"' id='message-box' style='background-color: rgb(105, 200, 255);'><h4><b>"+ data[i].ProductName +"</b></h4><p>"+data[i].ProductName+"is low of stock!</p></a>";
          }else{
            var notif = "<a href='http://localhost/sis_se/buildings/display_notification?notifid="+data[i].NotificationID+"&&sid="+data[i].StockID+"' id='message-box'><h4><b>"+ data[i].ProductName +"</b></h4><p>"+data[i].ProductName+"is low of stock!</p></a>";
             
          }$('#notif').append(notif); 
        }
      }
    });
  }