Idiot.Models.Artist = Backbone.Model.extend({
  urlRoot: "api/artists",
  toJSON: function () {
    var json = { artist: _.clone( this.attributes )};
    if (this._image) {
      json.artist.photo = this._image;
    }
    return json;
  },

  parse: function (payload) {
    if (payload.pages) {
      this.pages().set(payload.pages, {parse: true});
      delete payload.pages;
    }
    return payload;
  },

  pages: function () {
    if (!this._pages) {
      this._pages = new Idiot.Collections.Pages();
    }

    return this._pages;
  }

});
