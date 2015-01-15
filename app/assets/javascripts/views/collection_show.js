Idiot.Views.CollectionShow = Backbone.View.extend({
  template: JST['collections/show'],
  tagName: "span",
  className: "collection-show",

  initialize: function (options) {
    this.currentUser = options.currentUser
  },

  render: function () {
    var content = this.template({
      collection: this.model,
      currentUser: this.currentUser
    });
    this.$el.html(content);
    return this;
  }
});
