// Filename: collections/projects
define([
  'underscore',
  'Backbone',
  // Pull in the Model module from above
  'models/project'
], function(_, Backbone, ProjectModel){
  var ProjectCollection = Backbone.Collection.extend({
    model: ProjectModel,
    url:'/MvcApp/__models__?controller=user'
  });
  // You don't usually return a collection instantiated
  return ProjectCollection;
});
