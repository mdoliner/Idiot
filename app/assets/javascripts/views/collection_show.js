Idiot.Views.CollectionShow = Backbone.View.extend({
  template: JST['collections/show'],
  tagName: "span",
  className: "collection-show group",

  events: {
    "click #edit-photo": "editPhoto"
  },

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
  },

  editPhoto: function (event) {
    event.preventDefault();
    var $el = $("#edit-photo");
    var view = new Idiot.Views.PhotoNew({
      model: this.model,
      attrName: "collection"
    });
    $el.after(view.render().$el);
    $el.remove();
  }
});
