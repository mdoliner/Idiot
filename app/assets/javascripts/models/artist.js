Idiot.Models.Artist = Backbone.ImageableModel.extend({
  urlRoot: "api/artists",
  wrapper: "artist",

  parse: function (payload) {
    if (payload.pages) {
      this.pages().set(payload.pages, {parse: true});
      delete payload.pages;
    }
    if (payload.collections) {
      this.collections().set(payload.collections, {parse: true});
      delete payload.collections;
    }
    return payload;
  },

  pages: function () {
    if (!this._pages) {
      this._pages = new Idiot.Collections.Pages();
    }

    return this._pages;
  },

  collections: function () {
    if (!this._collections) {
      this._collections = new Idiot.Collections.Collections();
    }

    return this._collections;
  }

});
