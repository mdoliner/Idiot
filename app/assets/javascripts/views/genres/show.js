Idiot.Views.GenreShow = Backbone.View.extend({
  template: JST["genres/show"],

  render: function () {
    var content = this.template({ genre: this.model });
    this.$el.html(content);
    return this;
  }
});
