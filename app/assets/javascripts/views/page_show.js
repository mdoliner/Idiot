Idiot.Views.PageShow = Backbone.CompositeView.extend({
  template: JST["pages/show"],

  events: {
    "mouseup .page-text": "refreshAnnotation"
  },

  render: function () {
    var textContent = this.template({ page: this.model });
    var annotationView = new Idiot.Views.AnnotationShow({
      model: this.model.description(),
      isDescription: true
    });
    this.$el.html(textContent);
    this.addSubview('.page-annotations', annotationView);
    return this;
  },

  refreshAnnotation: function (event) {
    if (window.getSelection().toString().length === 0) {
      $('.page-annotations').empty();
      var annotationView = new Idiot.Views.AnnotationShow({
        model: this.model.description(),
        isDescription: true
      });
      this.addSubview('.page-annotations', annotationView);
    } else {
      $('.page-annotations').empty();
      var newAnnotationView = new Idiot.Views.AnnotationNew({});
      this.addSubview('.page-annotations', newAnnotationView);
    }
  }
});
