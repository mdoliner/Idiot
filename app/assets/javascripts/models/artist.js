Idiot.Models.Artist = Backbone.Model.extend({
  urlRoot: "api/artists",
  toJSON: function () {
    var json = { artist: _.clone( this.attributes )}
    if (this._image) {
      json.artist.photo = this._image;
    }
    return json;
  }
})
