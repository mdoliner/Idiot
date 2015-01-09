Idiot.Views.Header = Backbone.CompositeView.extend({
  template: JST["header/show"],
  events: {
    "click #new-user": "newUserForm"
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
    var view = new Idiot.Views.UserNew({
      model: new Idiot.Models.User(),
      headerView: this
    });
    $("#new-user-span").html(view.render().$el);
  },

  refresh: function () {
    this.model.fetch({
      success: function () {
        this.render();
      }.bind(this)
    })
  }


});
