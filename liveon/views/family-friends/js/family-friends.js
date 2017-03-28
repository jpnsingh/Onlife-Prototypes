(function () {
    var bttn = document.getElementById('notification-trigger');

    // make sure..
    bttn.disabled = false;

    bttn.addEventListener('click', function () {
        // simulate loading (for demo purposes only)
        classie.add(bttn, 'active');
        setTimeout(function () {

            classie.remove(bttn, 'active');

            // create the notification
            var notification = new NotificationFx({
                message: '<div class="ns-thumb"><img src="../../assets/images/Onlife_Tracy_User.jpg"/></div><div class="ns-content"><p><a href="#">Tracy</a> accepted your invitation.</p></div>',
                layout: 'other',
                ttl: 6000,
                effect: 'thumbslider',
                type: 'notice', // notice, warning, error or success
                onClose: function () {
                    bttn.disabled = false;
                }
            });

            // show the notification
            notification.show();

        }, 1200);

        // disable the button (for demo purposes only)
        this.disabled = true;
    });
})();