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
      annotation: this.model,
      isNew: false
    });
    this.$el.html(content);
    return this;
  },

  updateAnnotation: function (options) {
    event.preventDefault();
    var content = $("textarea.annotation-content").val();
    this.model.set({content: content});
    this.model.save({annotation: {content: content}}, {patch: true});
    var annotationView = new Idiot.Views.AnnotationShow({
      model: this.model,
      isDescription: options.isDescription || false
    });
    this.$el.html(annotationView.render().$el);
  }

});
