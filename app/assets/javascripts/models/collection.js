Idiot.Models.Collection = Backbone.Model.extend({
  urlRoot: "api/collections",

  toJSON: function () {
    var json = { collection: _.clone( this.attributes )};
    if (this._image) {
      json.collection.photo = this._image;
    }
    return json;
  },

  artist: function () {
    if (!this._artist) {
      this._artist = new Idiot.Models.Artist();
    }

    return this._artist;
  }
})
