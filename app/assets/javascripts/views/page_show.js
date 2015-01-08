Idiot.Views.PageShow = Backbone.CompositeView.extend({
  template: JST["pages/show"],

  events: {
    "click a.annotation": "refreshAnnotation",
    "mouseup .page-text": "toggleNewAnnotation"

  },

  render: function () {
    var textContent = this.template({ page: this.model });
    var annotations = this.model.annotations();
    this.$el.html(textContent);
    var $textContent = this.$el.find(".text-content");
    var text = $textContent.text();
    annotations.each(function (annotation) {
      if (annotation.get("end_index") === 0) {return}
      text = text.slice(0, annotation.get("start_index")) +
      "<a class='annotation' href='#' data-id=" + annotation.id + ">" +
      text.slice(annotation.get("start_index"), annotation.get("end_index")) +
      "</a>" +
      text.slice(annotation.get("end_index"));
    });
    $textContent.html(text);
    var annotationView = new Idiot.Views.AnnotationShow({
      model: this.model.description(),
      isDescription: true
    });
    this.addSubview('.page-annotations', annotationView);
    return this;
  },

  refreshAnnotation: function (event) {
    event.preventDefault();
    var id = $(event.target).data("id");
    $('.page-annotations').empty();
    var annotationView = new Idiot.Views.AnnotationShow({
      model: this.model.annotations().findWhere({id: id}),
      isDescription: true
    });
    this.addSubview('.page-annotations', annotationView);
  },

  toggleNewAnnotation: function (event) {
    event.preventDefault();

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
