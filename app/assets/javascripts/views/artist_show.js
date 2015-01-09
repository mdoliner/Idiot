Idiot.Views.ArtistShow = Backbone.View.extend({
  template: JST["artists/show"],
  events: {
    "submit form": "addPhoto",
    "change #input-artist-image": "fileInputChange"
  },
  render: function () {
    var content = this.template({
      artist: this.model
    });
    this.$el.html(content);
    return this;
  },

  addPhoto: function (event) {
    event.preventDefault();

    var attrs = $("form").serializeJSON().artist;
    this.model.save(attrs, {
      patch: true,
      success: function () {
        delete this.model._image
        Backbone.history.navigate("artists/" + this.model.id, {trigger: true});
      }.bind(this)
    })
  },

  fileInputChange: function (event) {
    var file = event.currentTarget.files[0];
    var reader = new FileReader();
    var that = this;

    reader.onloadend = function() {
      that.model._image = reader.result;
    }

    if (file) {
      reader.readAsDataURL(file);
    }

  }
})
