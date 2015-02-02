Idiot.Views.SessionNew = Backbone.View.extend({
  template: JST["session/new"],
  tagName: "span",
  className: "new-session",
  events: {
    "click button.login": "createSession",
    "click button.login-editor": "createGuestSession"
  },

  initialize: function (options) {
    this.headerView = options.headerView;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createSession: function (event) {
    event.preventDefault();
    var attrs = $(".new-session-form").serializeJSON().user;
    this.model.save(attrs, {
      wait: true,
      success: function () {
        this.headerView.model.fetch();
        this.remove();
      }.bind(this),
      error: function () {
        $("#login-error").text("Username/password incorrect.");
      }
    });
  },

  createGuestSession: function (event) {
    event.preventDefault();
    var guestNum = Math.floor(Math.random() * 100000)
    var attrs = {username: "guest" + guestNum, email: "guest" + guestNum + "@guest.com", password: "password"};
    user = new Idiot.Models.User;
    user.save(attrs, {
      wait: true,
      success: function () {
        this.headerView.model.fetch();
        this.remove();
      }.bind(this),
    });
  }
});
