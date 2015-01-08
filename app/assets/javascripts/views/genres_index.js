Idiot.Views.GenresIndex = Backbone.View.extend({
  template: JST["genres/index"],

  initialize: function () {
    this.listenTo(this.collection, "sync", this.render);
  },

  render: function () {
    var content = this.template({ genres: this.collection });
    this.$el.html(content);
    return this;
  }
});
