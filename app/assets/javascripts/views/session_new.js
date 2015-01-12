Idiot.Views.SessionNew = Backbone.View.extend({
  template: JST["session/new"],
  tagName: "form",
  className: "new-session-form",
  events: {
    "submit": "createSession"
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
        this.headerView.refresh();
        this.remove();
      }.bind(this),
      error: function () {

      }
    })
  }
});
