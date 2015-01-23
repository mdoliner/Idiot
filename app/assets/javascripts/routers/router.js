Idiot.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "genresIndex",
    "genres/:id": "genreShow",
    "genres/:id/pages": "pagesIndex",
    "pages/new": "pageNew",
    "pages/:id": "pageShow",
    "artists/:id": "artistShow",
    "users/:id": "userShow",
    "collections/:id": "collectionShow"
  },

  initialize: function () {
    this.$rootEl = $("#main");
    this.$headerEl = $("#header");
    this._currentUser = new Idiot.Models.CurrentUser();
    this._genres = new Idiot.Collections.Genres();
    this._currentUser.fetch({ async: false });
    this.header();
  },

  header: function () {
    var headerGenres = new Idiot.Collections.Genres();
    headerGenres.fetch({
      url: "api/genres/header",
      async: false
    });
    this._headerView = new Idiot.Views.Header({
      collection: headerGenres,
      model: this._currentUser,
      router: this
    });
    this.$headerEl.html(this._headerView.render().$el);
  },

  artistShow: function (id) {
    if (typeof this._artists === "undefined") {
      this._artists = new Idiot.Collections.Artists();
    }
    var artist = this._artists.getAndFetch(id);
    var view = new Idiot.Views.ArtistShow({
      headerView: this._headerView,
      model: artist,
      currentUser: this._currentUser
    });
    this.swapView(view);
  },

  collectionShow: function (id) {
    if (typeof this._collections === "undefined") {
      this._collections = new Idiot.Collections.Collections();
    }
    var collection = this._collections.getAndFetch(id);
    var view = new Idiot.Views.CollectionShow({
      model: collection,
      currentUser: this._currentUser
    });
    this.swapView(view);
  },

  genresIndex: function () {
    this._genres.fetch({ async: false });
    var view = new Idiot.Views.GenresIndex({
      collection: this._genres
    });
    this.swapView(view);
  },

  genreShow: function (id) {
    var genre = this._genres.getAndFetch(id);
    var view = new Idiot.Views.GenreShow({
      model: genre
    });
    this.swapView(view);
  },

  pagesIndex: function (id) {
    var genre = this._genres.getAndFetch(id);
    var view = new Idiot.Views.PagesIndex({
      model: genre,
      collection: genre.pages()
    });
    this.swapView(view);
  },

  pageNew: function () {
    this._currentUser.fetch({ async: false });
    if (this._currentUser.get("logged_in")) {
      var page = new Idiot.Models.Page();
      this._genres.fetch({ async: false });
      var view = new Idiot.Views.PageNew({
        model: page,
        collection: this._genres
      });
      this.swapView(view);
    } else {
      this._headerView.trigger("forceLogin");
    }
  },

  pageShow: function (id) {
    if (typeof this._pages === "undefined") {
      this._pages = new Idiot.Collections.Pages();
    }
    var page = this._pages.getAndFetch(id);
    var view = new Idiot.Views.PageShow({
      model: page,
      currentUser: this._currentUser,
      headerView: this._headerView
    });
    this.swapView(view);
  },

  userShow: function (id) {
    if (typeof this._users === "undefined") {
      this._users = new Idiot.Collections.Users();
    }
    var user = this._users.getAndFetch(id);
    var view = new Idiot.Views.UserShow({
      model: user,
      currentUser: this._currentUser
    });
    this.swapView(view);
  },

  swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
