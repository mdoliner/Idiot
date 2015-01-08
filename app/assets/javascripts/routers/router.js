Idiot.Routers.Router = Backbone.Router.extend({
  routes: {
    "": "genresIndex"
  },

  initialize: function () {
    this.$rootEl = $("#main");
    this._genres = new Idiot.Collections.Genres();
  },

  genresIndex: function () {
    this._genres.fetch();
    var view = new Idiot.Views.GenresIndex({collection: this._genres});
    this.swapView(view);
  },

  swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
