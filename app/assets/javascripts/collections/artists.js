Idiot.Collections.Artists = Backbone.Collection.extend({
  url: "api/artists",
  model: Idiot.Models.Artist,
  getOrAdd: function (id) {
    var artist = this.get(id);
    if (!artist) {
      artist = new Idiot.Models.Artist({id: id});
    }
    return artist;
  }
})
