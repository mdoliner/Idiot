Idiot.Views.Header = Backbone.CompositeView.extend({
  template: JST["header/show"],
  events: {
    "click #new-user": "newUserForm",
    "click a.new-session": "newSessionForm",
    "click #destroy-session": "destroySession",
    "click #new-artist": "newArtistForm",
    "keyup #search": "updateSearch",
    "click a.search-item": "clearSearch",
    "click span.modal-background": "toggleModal",
    "click": "hideSearch",
    "click a.create": "ensureLogin"
  },

  initialize: function (options) {
    this.listenTo(this.model, "change:logged_in", this.refresh);
    this.on("forceLogin", this.newUserForm.bind(this));
    this.router = options.router;
  },

  render: function () {
    $("span.header-form").css("height", "330px");
    var content = this.template({
      genres: this.collection,
      currentUser: this.model
    });
    this.$el.html(content);
    return this;
  },

  refresh: function () {
    this.render();
    this.router._currentView && this.router.swapView(this.router._currentView);
  },

  toggleModal: function (event) {
    event.preventDefault();
    if ($(event.target).hasClass("modal-background")) {
      $("span.header-form").css("height", "330px");
      $("span.modal-background").css("opacity", "0").css("visibility", "hidden");
    }
  },

  newUserForm: function (event) {
    event && event.preventDefault();
    this.session = new Idiot.Models.Session();
    var view = new Idiot.Views.UserNew({
      session: this.session,
      model: new Idiot.Models.User(),
      headerView: this
    });
    $("#header-form").html(view.render().$el);
    $("span.modal-background").css("visibility", "visible").css("opacity", "1");
  },

  newSessionForm: function (event) {
    event.preventDefault();
    this.session = new Idiot.Models.Session();
    var view = new Idiot.Views.SessionNew({
      headerView:this,
      model: this.session
    });
    $("#header-form").html(view.render().$el);
    $("span.modal-background").css("visibility", "visible").css("opacity", "1");
  },

  destroySession: function (event) {
    event.preventDefault();
    this.model.fetch({
      url: "api/users/logout",
      success: function () {
        Backbone.history.navigate("", {trigger: true});
        this.model.fetch();
      }.bind(this)
    });
  },

  newArtistForm: function (event) {
    event.preventDefault();
    var artist = new Idiot.Models.Artist();
    var view = new Idiot.Views.ArtistNew({
      model: artist,
      headerView: this
    });
    $("#header-form").html(view.render().$el);
    $("span.modal-background").css("visibility", "visible").css("opacity", "1");
  },

  updateSearch: function () {
    var $results = $("#search-results");
    $results.css("display", "block")
    var query = $("#search").val().toLowerCase();
    var resultItems;
    if (query.length > 0) {
      var pages = new Idiot.Collections.Pages();
      pages.fetch({
        success: function () {
          $results.empty();
          resultItems = pages.filter(function (item) {
            return item.get("title").toLowerCase().indexOf(query) !== -1;
          });
          _.each(resultItems, function (item) {
            var $li = $("<li>");
            var $link = $("<a class='search-item' href='#pages/" + item.id + "'></a>").text(item.get("title") + " - " + item.get("artist_name"));
            $li.html($link);
            $results.append($li);
          })
        }
      });
    } else {
      this.hideSearch();
    }
  },

  ensureLogin: function (event) {
    this.model.fetch({ async: false });
    if (!this.model.get("logged_in")) {
      event.preventDefault();
      Backbone.history.fragment = "";
      this.trigger("forceLogin");
    }
  },

  clearSearch: function () {
    $("#search").val("");
    $("#search-results").empty();
  },

  hideSearch: function () {
    $("#search-results").css("display", "none")
  }


});
