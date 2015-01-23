Idiot.Models.Annotation = Backbone.SaveableModel.extend({
  urlRoot: "api/annotations",
  wrapper: "annotation",

  parse: function (payload) {
    if (payload.improvements) {
      this.improvements().set(payload.improvements, {parse:true});
      delete payload.improvements
    }
    return payload;
  },

  improvements: function () {
    if (!this._improvements) {
      this._improvements = new Idiot.Collections.Improvements();
    }

    return this._improvements;
  }
});
