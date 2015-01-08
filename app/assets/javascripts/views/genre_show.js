Idiot.Views.GenreShow = Backbone.View.extend({
  template: JST["genres/show"],

  initialize: function () {
    this.listenTo(this.model, "sync", this.render)
  },

  render: function () {
    var content = this.template({ genre: this.model });
    this.$el.html(content);
    return this;
  }
});
