Backbone.SaveableModel = Backbone.Model.extend({
  toJSON: function () {
    var json = {};
    json[this.wrapper] = _.clone( this.attributes );
    return json;
  }
});
