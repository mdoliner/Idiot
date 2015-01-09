Idiot.Models.Artist = Backbone.Model.extend({
  urlRoot: "api/artists",
  toJSON: function () {
    return { artist: _.clone( this.attributes )};
  }
})
