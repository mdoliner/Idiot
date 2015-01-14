Idiot.Views.UserNew = Backbone.View.extend({
  template: JST["users/new_method"],
  formTemplate: JST["users/new"],
  tagName: "article",
  className: "user-new",
  events: {
    "click #sign-up-email": "newUserEmail",
    "submit": "createUser"
  },

  initialize: function (options) {
    this.headerView = options.headerView;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  newUserEmail: function () {
    var form = this.formTemplate();
    this.$el.append(form);
    return this;
  },

  createUser: function (event) {
    event.preventDefault();
    var attrs = $("#new-user-form").serializeJSON().user;
    this.model.save(attrs, {
      wait: true,
      success: function () {
        this.headerView.refresh();
        this.remove();
      }.bind(this),
      error: function () {
        if (attrs.username.length === 0) {
          $("#username-error").text("Enter a nickname.");
        } else {
          $("#username-error").empty();
        }
        if (attrs.email.length === 0) {
          $("#email-error").text("Enter your email address.");
        } else {
          $("#email-error").empty();
        }
        if (attrs.password.length === 0) {
          $("#password-error").text("Enter a password.");
        } else {
          $("#password-error").empty();
        }
      }
    })
  }
});
