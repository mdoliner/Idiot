Idiot.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "genresIndex",
    "genres/:id": "genreShow",
    "genres/:id/pages": "pagesIndex",
    "pages/:id": "pageShow"
  },

  initialize: function () {
    this.$rootEl = $("#main");
    this._genres = new Idiot.Collections.Genres();
    this._pages = new Idiot.Collections.Pages();
  },

  genresIndex: function () {
    this._genres.fetch({
      success: function () {
        var view = new Idiot.Views.GenresIndex({
          collection: this._genres
        });
        this.swapView(view);
      }.bind(this)
    });
  },

  genreShow: function (id) {
    var genre = this._genres.getOrAdd(id);
    genre.fetch({
      success: function () {
        var view = new Idiot.Views.GenreShow({
          model: genre
        });
        this.swapView(view);
      }.bind(this)
    })
  },

  pagesIndex: function (id) {
    var genre = this._genres.getOrAdd(id);
    genre.fetch({
      success: function () {
        var view = new Idiot.Views.PagesIndex({
          model: genre,
          collection: genre.pages()
        });
        this.swapView(view);
      }.bind(this)
    })
  },

  pageShow: function (id) {
    var page = this._pages.getOrAdd(id);
    page.fetch({
      success: function () {
        var view = new Idiot.Views.PageShow({
          model: page
        });
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
