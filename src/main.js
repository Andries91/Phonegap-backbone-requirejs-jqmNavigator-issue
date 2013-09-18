require.config({
    paths:{
        // RequireJS plugin
        text:'../assets/js/require/text',
        // RequireJS plugin
        domReady:'../assets/js/require/domReady',
        // underscore library
        underscore:'../assets/js/underscore/underscore',
        // Backbone.js library
        Backbone:'../assets/js/backbone/backbone',
        // jQuery
        jquery:'../assets/js/jquery/jquery',
        // jQuery Mobile framework
        jqm:'../assets/js/jquery.mobile/jquery.mobile',
        // jQuery Mobile plugin for Backbone views navigation
        jqmNavigator:'../assets/js/jquery.mobile/jqmNavigator'
    },
    shim:{
        Backbone:{
            deps:['underscore', 'jquery'],
            exports:'Backbone'
        },
        underscore:{
            exports:'_'
        },
        jqm:{
            deps:['jquery', 'jqm-config'/* jQM specific config */, 'jqmNavigator']
        }
    }
});

require(['domReady', 'modules/HomeView', 'jqm'],
    function (domReady, HomeView) {
		
        // domReady is RequireJS plugin that triggers when DOM is ready
        domReady(function () {
            function onDeviceReady() {;
                $.mobile.jqmNavigator.pushView(new HomeView());
            }
            document.addEventListener('deviceready', onDeviceReady, false);    
			var e = document.createEvent('Events'); 
			e.initEvent("deviceready", false, false);
			document.dispatchEvent(e);
			                  
        });
    }
);



