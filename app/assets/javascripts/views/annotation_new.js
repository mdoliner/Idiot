Idiot.Views.AnnotationNew = Backbone.View.extend({
  template: JST["annotations/new"],

  render: function () {
    var content = this.template({});
    this.$el.html(content);
    return this;
  }
});
