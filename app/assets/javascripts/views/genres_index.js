Idiot.Views.GenresIndex = Backbone.View.extend({
  template: JST["genres/index"],

  render: function () {
    var content = this.template({ genres: this.collection });
    this.$el.html(content);
    return this;
  }
});
