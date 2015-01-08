Idiot.Collections.Genres = Backbone.Collection.extend({
  url: "api/genres",
  model: Idiot.Models.Genre,
  getOrAdd: function (id) {
    var genre = this.get(id);
    if (!genre) {
      genre = new Idiot.Models.Genre({id: id});
    }
    var that = this;
    return genre;
  }
  // parse: function (payload) {
  //   if (payload.most_recent_page) {
  //
  //   }
  // }
});
