Idiot.Views.PageNew = Backbone.View.extend({
  template: JST["pages/new"],
  tagName: 'form',
  events: {
    "submit": "createPage"
  },

  render: function () {
    var content = this.template({
      page: this.model,
      genres: this.collection
    });
    this.$el.html(content);
    return this;
  },

  createPage: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON().page;
    this.model.save(attrs, {
      wait: true,
      success: function () {
        Backbone.history.navigate("#pages/" + this.model.id, {trigger: true});
      }.bind(this),
      error: function (model, response) {
        var params = attrs.page;
        if (params.artist_id.length === 0) {
          $("#artist-error").text("This field is required.");
        } else {
          $("#artist-error").empty();
        }
        if (params.title.length === 0) {
          $("#title-error").text("This field is required.");
        } else {
          $("#title-error").empty();
        }
        if (params.text.length === 0) {
          $("#text-error").text("This field is required.");
        } else {
          $("#text-error").empty();
        }
        if (!params.genre_id) {
          $("#tag-error").text("This field is required.");
        } else {
          $("#tag-error").empty();
        }
      }
    })
  }
})
