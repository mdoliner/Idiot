Idiot.Models.Page = Backbone.Model.extend({
  urlRoot: "api/pages",
  parse: function (payload) {
    if (payload.artist) {
      this.artist().set(payload.artist, {parse: true});
      delete payload.artist;
    }

    return payload;
  },
  artist: function () {
    if(!this._artist) {
      this._artist = new Idiot.Models.Artist();
    }

    return this._artist;
  },
});
