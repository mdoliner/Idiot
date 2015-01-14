Idiot.Views.ArtistNew = Backbone.View.extend({
  template: JST['artists/new'],
  tagName: "form",
  className: "artist-new",

  events: {
    "click #create-artist": "createArtist"
  },

  initialize: function (options) {
    this.headerView = options.headerView;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createArtist: function (event) {
    event.preventDefault();
    var args = { name: $("#artist-name").val() };
    this.model.save(args, {
      success: function () {
        Backbone.history.navigate("#artists/" + this.model.id, {trigger: true});
        $("#header-form").empty();
        this.headerView.render();
      }.bind(this),
      error: function () {
        if (args.name.length === 0) {
          $("#artist-name-errors").text("Name cannot be blank");
        }
      }
    });
  }
});
