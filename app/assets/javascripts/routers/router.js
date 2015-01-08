Idiot.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "genresIndex",
    "genres/:id": "genreShow"
  },

  initialize: function () {
    this.$rootEl = $("#main");
    this._genres = new Idiot.Collections.Genres();
  },

  genresIndex: function () {
    this._genres.fetch({
      success: function () {
        var view = new Idiot.Views.GenresIndex({collection: this._genres});
        this.swapView(view);
      }.bind(this)
    });
  },

  genreShow: function (id) {
    var genre = this._genres.getOrAdd(id);
    genre.fetch({
      success: function () {
        var view = new Idiot.Views.GenreShow({model: genre});
        this.swapView(view);
      }.bind(this)
    })
  },

  swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
