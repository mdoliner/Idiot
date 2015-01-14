Idiot.Views.ArtistNew = Backbone.View.extend({
  template: JST['artists/new'],

  tagName: "form",

  events: {
    "submit": "createArtist"
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
      }.bind(this),
      error: function () {
        if (args.name.length === 0) {
          $("#artist-name-errors").text("Name cannot be blank");
        }
      }
    });
  }
});
