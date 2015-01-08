Idiot.Views.AnnotationNew = Backbone.View.extend({
  template: JST["annotations/new"],

  events: {
    "click a.new-annotation": "renderNewForm"
  }

  render: function () {
    var content = this.template({});
    this.$el.html(content);
    return this;
  }
});
