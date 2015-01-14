Idiot.Models.Session = Backbone.Model.extend({
  url: "api/session",
  toJSON: function () {
    return { user: _.clone( this.attributes )};
  }
});
