Idiot.Views.PageNew = Backbone.View.extend({
  template: JST["pages/new"],
  tagName: 'form',
  className: 'new-page-form',
  events: {
    "submit": "createPage",
    "keyup #artist": "updateArtistSearch",
    "click li.chosen-artist": "selectArtist"
  },

  render: function () {
    var content = this.template({
      page: this.model,
      genres: this.collection
    });
    this.$el.html(content);
    return this;
  },

  updateArtistSearch: function () {
    var $results = $("#artist-search-results");
    $results.css("display", "block")
    var query = $("#artist").val().toLowerCase();
    var resultItems;
    if (query.length > 2) {
      var artists = new Idiot.Collections.Artists();
      artists.fetch({
        success: function () {
          $results.empty();
          resultItems = artists.filter(function (artist) {
            return artist.get("name").toLowerCase().indexOf(query) !== -1;
          });
          _.each(resultItems, function (artist) {
            var $li = $("<li class='chosen-artist'></li>");
            $li.data("id", artist.id);
            $li.html(artist.escape("name"))
            $results.append($li);
          })
        }
      });
    } else {
      this.hideSearch();
    }
  },

  hideSearch: function () {
    $("#artist-search-results").css("display", "none")
  },

  selectArtist: function (event) {
    event.preventDefault();

    var $target = $(event.target);
    this.artistId = $target.data("id");
    $("#artist").val($target.text());
    $("#artist-search-results").empty();
    this.hideSearch();
  },

  createPage: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON().page;
    attrs.artist_id = this.artistId;
    this.model.save(attrs, {
      wait: true,
      success: function () {
        Backbone.history.navigate("#pages/" + this.model.id, {trigger: true});
      }.bind(this),
      error: function (model, response) {
        if (!attrs.artist_id) {
          $("#artist-search-results").empty();
          $("#artist-error").text("Please choose your artist from the search results.");
        } else {
          $("#artist-error").empty();
        }
        if (attrs.title.length === 0) {
          $("#title-error").text("This field is required.");
        } else {
          $("#title-error").empty();
        }
        if (attrs.text.length === 0) {
          $("#text-error").text("This field is required.");
        } else {
          $("#text-error").empty();
        }
        if (!attrs.genre_id) {
          $("#tag-error").text("This field is required.");
        } else {
          $("#tag-error").empty();
        }
      }
    })
  }
})
