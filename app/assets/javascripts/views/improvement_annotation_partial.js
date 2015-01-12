Idiot.Views.ImprovementAnnotationPartial = Backbone.View.extend({
  template: JST['improvements/annotation_partial'],
  tagName: "span",
  className: "annotation-improvement-partial group",

  initialize: function (options) {
    this.currentUser = options.currentUser;
  },

  render: function () {
    var content = this.template({
      improvements: this.collection,
      currentUser: this.currentUser
    });
    this.$el.html(content);
    return this;
  }
});
