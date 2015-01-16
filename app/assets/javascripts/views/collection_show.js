Idiot.Views.CollectionShow = Backbone.View.extend({
  template: JST['collections/show'],
  tagName: "span",
  className: "collection-show group",

  events: {
    "click #edit-photo": "editPhoto",
    "dblclick small.editable": "editNumbering",
    "blur .edit-numbering": "saveNumbering",
    "click #delete-collection": "deletePrep",
    "click button#delete-collection.active": "deleteCollection",
    "keyup #new-page": "updatePageSearch",
    "click li.chosen-page": "selectPage"
  },

  initialize: function (options) {
    this.currentUser = options.currentUser;
    this.listenTo(this.model, "change:image_url", this.render);
  },

  render: function () {
    var content = this.template({
      collection: this.model,
      currentUser: this.currentUser
    });
    this.$el.html(content);
    return this;
  },

  editNumbering: function (event) {
    event.preventDefault();
    var $number = $(event.currentTarget);
    var id = $number.data("id")
    var $input = $("<input data-id='" + id + "' class='edit-numbering'>");
    var page = this.model.pages().get(id);

    $input.val(page.escape("collection_number"));
    $number.removeClass('editable');
    $number.html($input);
    $input.focus();
  },

  saveNumbering: function (event) {
    event.preventDefault();
    if (this.currentUser.get("level") === "editor") {
      var newNumbering = $(event.currentTarget).val();
      var page = this.model.pages().get($(event.currentTarget).data("id"));
      page.set("collection_number", newNumbering);
      page.save();
      this.model.fetch({
        success: function () {
          this.render();
        }.bind(this)
      })
    }
  },

  updatePageSearch: function (event) {
    var $results = $("#page-search-results");
    $results.css("display", "block")
    var query = $("#new-page").val().toLowerCase();
    var resultItems;
    if (query.length > 2) {
      $results.empty();
      var pages = new Idiot.Collections.Pages();
      pages.fetch({
        success: function () {
          resultItems = pages.filter(function (page) {
            return page.get("title").toLowerCase().indexOf(query) !== -1;
          });
          _.each(resultItems, function (page) {
            var $li = $("<li class='chosen-page'></li>");
            $li.data("id", page.id);
            $li.text(page.escape("title"))
            $results.append($li);
          })
        }
      });
    } else {
      this.hideSearch();
    }
  },

  selectPage: function (event) {
    event.preventDefault();
    var $target = $(event.target);
    var pageId = $target.data("id");
    var pages = new Idiot.Collections.Pages();
    var page = pages.getOrAdd(pageId);
    page.save({page: {collection_id: this.model.id}}, {
      patch: true,
      success: function () {
        this.model.fetch({
          success: function () {
            $("#page-search-results").empty();
            this.hideSearch();
            this.render();
          }.bind(this)
        })
      }.bind(this)
    });
  },

  hideSearch: function () {
    $("#page-search-results").css("display", "none")
  },

  deletePrep: function (event) {
    event.preventDefault();
    $(event.currentTarget).addClass("active");
  },

  deleteCollection: function (event) {
    this.model.destroy({
      wait: true,
      success: function () {
        Backbone.history.navigate("", { trigger: true });
      }
    });
  },

  editPhoto: function (event) {
    event.preventDefault();
    var $el = $("#edit-photo");
    var view = new Idiot.Views.PhotoNew({
      model: this.model,
      attrName: "collection"
    });
    $el.after(view.render().$el);
    $el.remove();
  }
});
