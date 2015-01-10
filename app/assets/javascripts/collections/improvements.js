Idiot.Collections.Improvements = Backbone.Collection.extend({
  urlRoot: "api/improvements",

  comparator: function (improvement1, improvement2) {
    return improvement1.get("created_at") < improvement2.get("created_at")
  }
});
