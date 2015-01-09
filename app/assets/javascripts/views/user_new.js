Idiot.Views.UserNew = Backbone.View.extend({
  template: JST["users/new_method"],
  formTemplate: JST["users/new"],
  tagName: 'form',
  events: {
    "click #sign-up-email": "newUserEmail"
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
  }
});
