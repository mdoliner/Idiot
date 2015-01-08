Idiot.Views.PageShow = Backbone.CompositeView.extend({
  template: JST["pages/show"],

  render: function () {
    var textContent = this.template({ page: this.model });
    var annotationView = new Idiot.Views.AnnotationShow({ model: this.model.description() })
    this.$el.html(textContent);
    this.addSubview('.page-annotations', annotationView);
    return this;
  }
});
