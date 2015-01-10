Idiot.Models.Annotation = Backbone.Model.extend({
  urlRoot: "api/annotations",

  toJSON: function () {
    return { annotation: _.clone( this.attributes )};
  },

  parse: function (payload) {
    if (payload.improvements) {
      this.improvements().set(payload.improvements, {parse:true});
      delete payload.improvements
    }
    return payload;
  },

  improvements: function () {
    if (!this._improvements) {
      this._improvements = new Idiot.Collection.Improvements();
    }

    return this._improvements;
  }
});
