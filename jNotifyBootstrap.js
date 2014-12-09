/**
 * Created by Ivo Mota
 * 04-11-2014
 *
 * jNotifyBootstrap - Jquery plugin to control bootstrap alert
*/

(function($) {

	$.jNotifyBootstrap = function( title , message, type_message ) {
		if ( $('.notification-section').size() === 0 ){
			$('<div class="notification-section"></div>').prependTo('body');
        }

        if ($('.alert').size() < 3 ){
		    // Create a notification on the container.
		    $('.notification-section').jNotifyBootstrap(title,message, type_message);
        }
	};


    $.fn.jNotifyBootstrap = function(title, message, type_message) {

        var options = {
            position: 'absolute',
            size: '600px',
            top: 10,
            left: 0,
            right: 0,
            margin: 'auto',
            z_index: 99999
        };

        var notification_type;

        if (type_message === 'error'){
            notification_type = 'danger';
        }else if (type_message === 'success'){
            notification_type = 'success';
        }else if (type_message === 'warning'){
            notification_type = 'warning';
        }else{
            notification_type = 'info';
        }

        var alert = $('<div/>')
            .addClass('alert alert-'+ notification_type +' alert-dismissible')
            .attr('role', 'alert');
        var button_close = $('<button/>')
            .addClass('close')
            .attr('data-dismiss', 'alert')
            .append('<span aria-hidden="true">&times;</span><span class="sr-only">Close</span>');
        var node_message = $('<span/>')
            .append('<strong>' + title + '</strong> ' + message);

        alert.append(button_close);
        alert.append(node_message);
        $(this).css(
            {
                'width': options.size,
                'position': options.position,
                'top': options.top,
                'left': options.left,
                'right': options.right,
                'margin': options.margin,
                'z-index': options.z_index
            }
        );
        $(this).append(alert);
        alert.hide();
        alert.fadeIn();
        setTimeout(function() {
            // Do after 4 seconds
            alert.fadeOut();
        }, 4000);

        setTimeout(function(){
            alert.remove();
        }, 5000);

    };

})(jQuery);
