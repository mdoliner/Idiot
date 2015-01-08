Idiot.Views.AnnotationShow = Backbone.View.extend({
  template: JST["annotations/show"],

  initialize: function (options) {
    this.isDescription = options.isDescription;
  },

  render: function () {
    var content = this.template({
      annotation: this.model,
      isDescription: this.isDescription });
    this.$el.html(content);
    return this;
  }
});
