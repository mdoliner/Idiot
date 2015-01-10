Idiot.Models.Page = Backbone.Model.extend({
  urlRoot: "api/pages",

  parse: function (payload) {
    if (payload.artist) {
      this.artist().set(payload.artist, {parse: true});
      delete payload.artist;
    }
    if (payload.description) {
      this.description().set(payload.description, {parse: true});
      delete payload.description;
    }
    if (payload.annotations) {
      this.annotations().set(payload.annotations, {parse: true});
      delete payload.annotations
    }
    if (payload.improvements) {
      this.improvements().set(payload.improvements, {parse:true});
      delete payload.improvements
    }
    return payload;
  },

  artist: function () {
    if (!this._artist) {
      this._artist = new Idiot.Models.Artist();
    }

    return this._artist;
  },

  description: function () {
    if (!this._description) {
      this._description = new Idiot.Models.Annotation({ page: this });
    }

    return this._description;
  },

  annotations: function () {
    if (!this._annotations) {
      this._annotations = new Idiot.Collections.Annotations();
    }

    return this._annotations;
  },

  improvements: function () {
    if (!this._improvements) {
      this._improvements = new Idiot.Collections.Improvements();
    }

    return this._improvements;
  }

});
