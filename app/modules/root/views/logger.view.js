(function(Logger) {
  
  'use strict';

  Logger.View = Backbone.View.extend({
    tagName: 'section',
    className: 'logger',

    events: {
      "mousedown": "onMouseDown",
      "mouseup": "onMouseUp"
    },

    initialize: function() {
      this.listenTo(this.dispatcher, 'log', this.onLogEvent);
      this.$body = $('body');
      this.onMouseMoveBound = this.onMouseMove.bind(this);
    },

    onLogEvent: function(message) {
      this.$el.prepend('<p>' + message + '</p>')
    },

    onMouseDown: function(e) {
      this.isDragging = true;
      var offset = this.$el.offset();
      this.delta = {
        top: e.pageY - offset.top,
        left: e.pageX - offset.left
      };
      this.$body.on('mousemove', this.onMouseMoveBound);
    },

    onMouseMove: function(e) {
      if (!this.isDragging) return;

      this.$el.offset({
        top: e.pageY - this.delta.top,
        left: e.pageX - this.delta.left
      });
    },

    onMouseUp: function() {
      this.isDragging = false;
      this.$body.off('mousemove', this.onMouseMoveBound);
    },

    remove: function() {
      Backbone.View.prototype.remove.apply(this);
    }
  });


})(app.module('logger'));
