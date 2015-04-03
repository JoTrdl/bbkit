(function(Home) {
  
  "use strict";

  Home.ViewA = Backbone.View.extend({
    
    template: $('#home-tmpl').html(),

    initialize: function() {
      this.dispatcher.trigger('log', 'Home ViewA initialized.');
    },

    render: function() {
      this.$el.html(this.template);
      return this;
    },

    remove: function() {
      this.dispatcher.trigger('log', 'Home ViewA removed.');
      Backbone.View.prototype.remove.apply(this);
    }
  });

})(app.module('home'));