Idiot.Views.PageShow = Backbone.View.extend({
  template: JST["pages/show"],

  render: function () {
    var content = this.template({ page: this.model });
    this.$el.html(content);
    return this;
  }
});
