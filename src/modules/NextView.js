// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'Backbone',
  // Pull in the Collection module from above
  'collections/projects',
  'text!modules/NextView.html',
  'modules/AddView',
 // 'modules/EditView'
], function($, _, Backbone, ProjectsCollection, projectsListTemplate, AddView, EditView){
  var NextView = Backbone.View.extend({
    el: $("#container"),
    initialize: function(){
      // Compile the template using Underscores micro-templating
       this.compiledTemplate = _.template( projectsListTemplate);
    },
    events:{ /*Attach event to the link*/
         'click #add_user':'add_user_clH',
         'click #edit_user': 'edit_user_clH'
    },
    render:function(){
    	var self=this;
    	// this.collection = new ProjectsCollection();
      	// this.collection.fetch({data: {params:{a:'b'}}, success: function(response, xhr){
      		//console.log(self.compiledTemplate);
      		self.$el.html(self.compiledTemplate);
    		//self.$el.html(self.compiledTemplate({ project: self.collection.models }));
    		self.$el.trigger('pagecreate');
      // }});
    },
    add_user_clH:function(e)
    {
   		e.preventDefault();
   		console.log($.mobile.jqmNavigator.getViews());
        $.mobile.jqmNavigator.pushView(new AddView());
    },
    // edit_user_clH:function(e)
    // {
   		// e.preventDefault();
        // $.mobile.jqmNavigator.pushView(new AddView());
    // }
  });
  // Returning instantiated views can be quite useful for having "state"
  return NextView;
});
