Idiot.Views.Header = Backbone.View.extend({
  template: JST["header/show"],
  render: function () {
    var content = this.template({
      genres: this.collection,
      currentUser: this.model
    });
    this.$el.html(content);
    return this;
  }
});
