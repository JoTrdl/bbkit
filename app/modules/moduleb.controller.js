
(function(ModuleB) {
  
  "use strict";

  var Helper = app.module('helper');

  var View = Backbone.View.extend({
    template: $('#module-b-tmpl').html(),

    initialize: function() {
      this.dispatcher.trigger('log', 'ModuleA initialized.');
    },

    render: function() {
      this.$el.append(this.template);
      return this;
    },

    remove: function() {
      Backbone.View.prototype.remove.apply(this);
    }
  });

  var ModuleSubRouter = Backbone.SubRoute.extend({

    routes: {
      "": "root"
    },

    initialize: function ($el) {
      this.$el = $el;
      this.on('route', this.logRoute, this);
    },

    root: function () {
      if (this.view) this.view.remove();
      this.view = new View();
      this.view.render();
      this.$el.html(this.view.$el);
    },

    logRoute: function(route) {
      this.dispatcher.trigger('log', 'ModuleB controller: matched route [' + Backbone.history.getFragment() + '].');
    }

  }); // Router


  ModuleB.Controller = Backbone.View.extend({
    
    initialize: function(options) {
      this.dispatcher.trigger('log', 'ModuleB controller initialized with base [' + options.route + ']');
      
      this.router = new ModuleSubRouter(options.route, this.$el);
    }
  });


})(app.module('moduleb'));

