$msgModal = {

    act: '',

    confirmed : function(){
        $msgModal.messageBoxClose();
        eval(act);
    },

    confirm : function(message, title, action) {
		
        if(message == '' || title == '' || action == ''){
            console.log('Invalid argument/s');
            return false;
        }

        $("body").append($msgModal.htmlConfirmBox(message, title));
        $("#confirmBox").fadeIn(200);

        act = action;

        return false;
    },

    messageBoxClose : function() {
        $("#confirmBox").fadeOut(200, function(){
            $("#confirmBox").remove();
        });
    },

    htmlConfirmBox : function(message, title) {
        return '<div id="confirmBox">' +
            '<div class="frame">' +
                '<div class="title">'+title+'</div>' +
                '<div class="icon"></div>' +
                '<div class="message">' +
                    '<span class="right">'+message+'</span>' +
                '</div>' +
                '<hr>' +
                '<span>'+
                    '<button onClick="$msgModal.confirmed();">Yes</button>' +
                    '<button onClick="$msgModal.messageBoxClose();">No</button>'+
               '</span>' +
            '</div>' +
        '</div>';
    },

    htmlMessageBox : function(message, title, type) {
        return '<div id="confirmBox">' +
            '<div class="frame">' +
                '<div class="title">'+title+'</div>' +
                '<div class="icon icon-'+type+'">' +
                '</div>' +
                '<div class="message">' +
                    '<span class="right">'+message+'</span>' +
                '</div>' +
                '<hr>' +
                '<span>' +
                    '<button onClick="$msgModal.messageBoxClose();">Ok</button>' +
               '</span>' +
            '</div>' +
        '</div>';
    },

    messageBox : function(message, type, title){

        if(message == '' || type == '') {
            console.log('Invalid argument/s');

        }
        else if(type != 'unable' && type != 'warning' && type != 'information') {
            console.log('Invalid 2nd parameter');
        }
        else {
            if(title == null) title = 'Message';

            $("body").append($msgModal.htmlMessageBox(message, title, type));
            $("#confirmBox").fadeIn(200);
        }

        return false;
    },

};