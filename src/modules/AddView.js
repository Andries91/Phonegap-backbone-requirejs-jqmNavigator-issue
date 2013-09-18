// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'Backbone',
  // Pull in the Collection module from above
  'collections/projects',
  'text!modules/AddView.html',
  'modules/NextView'
], function($, _, Backbone, ProjectsCollection, projectsListTemplate, NextView){
  var AddView = Backbone.View.extend({
    el: $("#container"),
    initialize: function(){
      // Compile the template using Underscores micro-templating
       this.compiledTemplate = _.template( projectsListTemplate);
    },
    events:{ /*Attach event to the link*/
         'click #save_user':'save',
         'click #cancel': 'cancel'
    },
    render:function(){
    	var self=this;
      		//console.log(self.compiledTemplate);
    	self.$el.html(self.compiledTemplate());
		self.$el.trigger('pagecreate');
   
    },
    save:function(e)
    {
   		e.preventDefault();
   		//$.mobile.jqmNavigator.popView({reverse:false});

   		//alert(typeof(NextView));
   		//user=$('#add_user_form').serializeArray();
   		//user = this.generateModelObject($('#add_user_form'));
   		//this.collection = new ProjectsCollection();
   		//$.mobile.jqmNavigator.popToFirst();
   		//this.collection.create(user)
   		//$.mobile.jqmNavigator.replaceView(new NextView());
   		//console.log($.mobile.jqmNavigator.getViews());		
        $.mobile.jqmNavigator.pushView(new NextView());
    },
    cancel:function(e)
    {
   		e.preventDefault();
        $.mobile.jqmNavigator.pushView(new NextView());
    },
    generateModelObject:function (element)
			{
				obj = $(element).serializeArray();
				returnObj = new Object();
				$.each(obj, function(i, value){
					returnObj[value.name]=value.value;
				});
				return returnObj;
			}
  });
  // Returning instantiated views can be quite useful for having "state"
  return AddView;
});
