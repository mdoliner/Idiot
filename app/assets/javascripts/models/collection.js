Idiot.Models.Collection = Backbone.ImageableModel.extend({
  urlRoot: "api/collections",
  wrapper: "collection",

  parse: function (payload) {
    if (payload.pages) {
      this.pages().set(payload.pages, {parse: true});
      delete payload.pages;
    }
    if (payload.artist) {
      this.artist().set(payload.artist, {parse: true});
      delete payload.artist;
    }
    return payload;
  },

  pages: function () {
    if (!this._pages) {
      this._pages = new Idiot.Collections.Pages();
    }

    return this._pages;
  },


  artist: function () {
    if (!this._artist) {
      this._artist = new Idiot.Models.Artist();
    }

    return this._artist;
  }
})
