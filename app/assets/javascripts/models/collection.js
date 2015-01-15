Idiot.Models.Collection = Backbone.Model.extend({
  urlRoot: "api/collections",
  toJSON: function () {
    var json = { collection: _.clone( this.attributes )};
    if (this._image) {
      json.collection.photo = this._image;
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
})
