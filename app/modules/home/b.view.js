(function(Home) {
  
  "use strict";

  Home.ViewB = Backbone.View.extend({
    
    initialize: function() {
      this.dispatcher.trigger('log', 'Home ViewB initialized.');
    },

    render: function() {
      this.$el.html("<div class='text-center'><b>I am a subview of home</b></div>");
      return this;
    },

    remove: function() {
      this.dispatcher.trigger('log', 'Home ViewB removed.');
      Backbone.View.prototype.remove.apply(this);
    }
  });

})(app.module('home'));