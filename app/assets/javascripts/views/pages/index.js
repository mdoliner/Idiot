Idiot.Views.PagesIndex = Backbone.View.extend({
  template: JST["pages/index"],
  tagName: "span",
  className: "pages-index",

  render: function () {
    var content = this.template({ genre: this.model, pages: this.collection });
    this.$el.html(content);
    return this;
  }
});
