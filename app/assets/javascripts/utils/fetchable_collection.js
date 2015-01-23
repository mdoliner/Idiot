Backbone.FetchableCollection = Backbone.Collection.extend({
  getAndFetch: function (id) {
    var model = this.get(id);
    if (!model) {
      model = new this.model({id: id});
    }
    model.fetch({ async: false });
    return model;
  }
});
