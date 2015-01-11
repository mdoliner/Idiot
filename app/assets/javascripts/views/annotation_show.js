Idiot.Views.AnnotationShow = Backbone.View.extend({
  template: JST["annotations/show"],
  formTemplate: JST["annotations/form"],

  events: {
    "click a.edit": "renderEdit",
    "click button#submit-annotation": "updateAnnotation"
  },

  initialize: function (options) {
    this.isDescription = options.isDescription;
  },

  render: function () {
    var content = this.template({
      annotation: this.model,
      isDescription: this.isDescription });
    this.$el.html(content);
    return this;
  },

  renderEdit: function () {
    event.preventDefault();

    var annotation = this.model;
    var content = this.formTemplate({
      annotation: this.model
    });
    this.$el.html(content);
    return this;
  }
});
