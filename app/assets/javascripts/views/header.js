Idiot.Views.Header = Backbone.CompositeView.extend({
  template: JST["header/show"],
  events: {
    "click #new-user": "newUserForm",
    "click #new-session": "newSessionForm",
    "keyup #search": "updateSearch",
    "click a.search-item": "clearSearch",
    "click": "hideSearch"
  },

  render: function () {
    var content = this.template({
      genres: this.collection,
      currentUser: this.model
    });
    this.$el.html(content);
    return this;
  },

  newUserForm: function (event) {
    event.preventDefault();
    var view = new Idiot.Views.UserNew({
      model: new Idiot.Models.User(),
      headerView: this
    });
    $("#header-form").html(view.render().$el);
  },

  newSessionForm: function (event) {
    event.preventDefault();
    var view = new Idiot.Views.SessionNew({
      headerView:this
    });
    $("#header-form").html(view.render().$el);
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
