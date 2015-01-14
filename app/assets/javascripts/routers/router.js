Idiot.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "genresIndex",
    "genres/:id": "genreShow",
    "genres/:id/pages": "pagesIndex",
    "pages/new": "pageNew",
    "pages/:id": "pageShow",
    "artists/:id": "artistShow",
    "users/:id": "userShow"
  },

  initialize: function () {
    this.$rootEl = $("#main");
    this.$headerEl = $("#header");
    this._genres = new Idiot.Collections.Genres();
    this._pages = new Idiot.Collections.Pages();
    this._artists = new Idiot.Collections.Artists();
    this._users = new Idiot.Collections.Users();
    this._currentUser = new Idiot.Models.CurrentUser();
    this._session = new Idiot.Models.Session();
    this.header();
    this._headerView = new Idiot.Views.Header({
      collection: this._genres,
      model: this._currentUser
    });
  },

  header: function () {
    this._currentUser.fetch({
      success: function () {
        this._genres.fetch({
          success: function () {
            this.$headerEl.html(this._headerView.render().$el);
          }.bind(this)
        });
      }.bind(this)
    });
  },

  artistShow: function (id) {
    var artist = this._artists.getOrAdd(id);
    artist.fetch({
      success: function () {
        var view = new Idiot.Views.ArtistShow({
          model: artist,
          currentUser: this._currentUser
        });
        this.swapView(view);
      }.bind(this)
    });
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

  pageNew: function () {
    if (this._currentUser.get("logged_in")) {
      var page = new Idiot.Models.Page();
      this._genres.fetch({
        success: function () {
          var view = new Idiot.Views.PageNew({
            model: page,
            collection: this._genres
          });
          this.swapView(view);
        }.bind(this)
      });
    } else {
      this._headerView.trigger("forceLogin");
    }
  },

  pageShow: function (id) {
    var page = this._pages.getOrAdd(id);
    page.fetch({
      success: function () {
        var view = new Idiot.Views.PageShow({
          model: page,
          currentUser: this._currentUser,
          headerView: this._headerView
        });
        this.swapView(view);
      }.bind(this)
    });
  },

  userShow: function (id) {
    var user = this._users.getOrAdd(id);
    user.fetch({
      success: function () {
        var view = new Idiot.Views.UserShow({
          model: user,
          currentUser: this._currentUser
        });
        this.swapView(view);
      }.bind(this)
    });
  },

  swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
