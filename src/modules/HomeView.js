define(
    ['jquery', 
    'underscore', 
    'Backbone',
    'text!modules/HomeView.html', /*Load the template as text*/
    'modules/NextView' /*Another View*/
    ],
    function ($, _, Backbone, HomeViewTemplate, NextView) {
        var HomeView = Backbone.View.extend({
			el: $('#container'),
            template: _.template(HomeViewTemplate), /*Load the template*/

            events:{ /*Attach event to the link*/
                'click #btnNext':'btnNext_clickHandler'
            },

            render:function () {
            	console.log(this.template);
                this.$el.html(this.template);
                return this;
            },

            btnNext_clickHandler: function(event) {
                event.preventDefault();

                /*Push the next view*/
           		console.log($.mobile.jqmNavigator.getViews());
                $.mobile.jqmNavigator.pushView(new NextView());
                
            }

        });
    return HomeView;
 });