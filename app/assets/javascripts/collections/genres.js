Idiot.Collections.Genres = Backbone.Collection.extend({
  url: "api/genres",
  model: Idiot.Models.Genre,
  getOrAdd: function (id) {
    var genre = this.get(id);
    if (!genre) {
      genre = new Idiot.Models.Genre({id: id});
    }
    return genre;
  }
});
