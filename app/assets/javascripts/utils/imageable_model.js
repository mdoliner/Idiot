Backbone.ImageableModel = Backbone.Model.extend({
  toJSON: function () {
    var json = {}
    json[this.wrapper] = _.clone( this.attributes );
    if (this._image) {
      json[this.wrapper].photo = this._image;
    }
    return json;
  }
});
