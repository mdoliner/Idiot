Idiot.Views.Header = Backbone.CompositeView.extend({
  template: JST["header/show"],
  events: {
    "click a#new-user": "newUserForm"
  },

  render: function () {
    var content = this.template({
      genres: this.collection,
      currentUser: this.model
    });
    this.$el.html(content);
    return this;
  },

  newUserForm: function (event) {
    event.preventDefault();
    var view = new Idiot.Views.UserNew;
    $("#new-user-form").html(view.render().$el);
  }
});
