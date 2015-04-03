(function(Viewport) {
  
  'use strict';

  var Header = Backbone.View.extend({
    tagName: 'header',
    template: $('#header-tmpl').html(),
    
    render: function () {
      this.$el.html(this.template);
      return this;
    }
  });

  var SideBar = Backbone.View.extend({
    tagName: 'aside',
    template: $('#sidebar-tmpl').html(),

    render: function () {
      this.$el.html(this.template);
      return this;
    }
  });

  Viewport.View = Backbone.View.extend({
    initialize: function() {
      this.header = new Header();
      this.sidebar = new SideBar();
    },

    render: function () {
      this.header.render();
      this.sidebar.render();

      this.$el.append(this.header.el);
      this.$el.append(this.sidebar.el);

      this.$el.append('<section class="content"></section>');

      return this;
    },

    remove: function() {
      this.header.remove();
      this.sidebar.remove();
      Backbone.View.prototype.remove.apply(this);
    }
  });


})(app.module('viewport'));

