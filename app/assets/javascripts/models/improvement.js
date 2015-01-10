Idiot.Models.Improvement = Backbone.Model.extend({
  url: "api/improvements",

  toJSON: function () {
    return { improvement: _.clone( this.attributes )};
  }
});
