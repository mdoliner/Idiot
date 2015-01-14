Idiot.Views.UserShow = Backbone.View.extend({
  template: JST["users/show"],

  initialize: function (options) {
    this.currentUser = options.currentUser;
    this.listenTo(this.model, "change:image_url", this.render);
  },

  events: {
    "click #edit-photo": "editPhoto"
  },

  render: function () {
    var content = this.template({
      user: this.model,
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
      attrName: "user"
    });
    $el.after(view.render().$el);
    $el.remove();
  }
});
