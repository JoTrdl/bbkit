(function(Root) {
  
  'use strict';

  var Viewport = app.module('viewport');
  var Logger = app.module('Logger');

  Root.View = Backbone.View.extend({
    el: 'body',

    initialize: function() {
      this.viewport = new Viewport.View();
      this.logger = new Logger.View();
    }, 

    render: function() {
      this.viewport.render();
      this.logger.render();

      this.$el.append(this.viewport.el);
      this.$el.append(this.logger.el);
    }
  });

})(app.module('root'));
