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
    "click": "hideSearch"
  },

  initialize: function () {
    this.listenTo(this.model, "change:logged_in", this.render);
  },

  render: function () {
    var content = this.template({
      genres: this.collection,
      currentUser: this.model
    });
    this.$el.html(content);
    return this;
  },

  toggleModal: function (event) {
    event.preventDefault();
    if ($(event.target).hasClass("modal-background")) {
      $("span.modal-background").css("opacity", "0").css("visibility", "hidden");
    }
  },

  newUserForm: function (event) {
    event.preventDefault();
    var view = new Idiot.Views.UserNew({
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
    this.session && this.session.destroy({
      success: function () {
        this.model.fetch();
      }.bind(this)
    });
  },

  newArtistForm: function (event) {
    event.preventDefault();
    var artist = new Idiot.Models.Artist();
    var view = new Idiot.Views.ArtistNew({
      model: artist
    });
    $("#header-form").html(view.render().$el);
    $("span.modal-background").css("visibility", "visible").css("opacity", "1");
  },

  refresh: function () {
    this.model.fetch({
      success: function () {
        this.render();
      }.bind(this)
    })
  },

  updateSearch: function () {
    var $results = $("#search-results");
    $results.css("display", "block")
    var query = $("#search").val().toLowerCase();
    var resultItems;
    if (query.length > 2) {
      $results.empty();
      var pages = new Idiot.Collections.Pages();
      pages.fetch({
        success: function () {
          resultItems = pages.filter(function (item) {
            return item.get("title").toLowerCase().indexOf(query) !== -1;
          });
          _.each(resultItems, function (item) {
            var $li = $("<li>");
            var $link = $("<a class='search-item' href='#pages/" + item.id + "'></a>").text(item.escape("title"));
            $li.html($link);
            $results.append($li);
          })
        }
      });
    } else {
      this.hideSearch();
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
