Idiot.Collections.Collections = Backbone.Collection.extend({
  url: "api/collections",
  model: Idiot.Models.Collection,
  comparator = 'track_number',
  getOrAdd: function (id) {
    var collection = this.get(id);
    if (!collection) {
      collection = new Idiot.Models.Collection({id: id});
    }
    return collection;
  }
});
