Idiot.Views.CollectionNew = Backbone.View.extend({
  template: JST['collections/new'],
  tagName: "form",
  className: "collection-new",

  events: {
    "click #create-collection": "createCollection"
  },

  initialize: function (options) {
    this.headerView = options.headerView;
    this.artist = options.artist;
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  },

  createCollection: function (event) {
    event.preventDefault();
    var args = {
      title: $("#collection-name").val(),
      artist_id: this.artist.id
      };
    this.model.save(args, {
      success: function () {
        Backbone.history.navigate("#collections/" + this.model.id, {trigger: true});
        $("#header-form").empty();
        this.headerView.render();
      }.bind(this),
      error: function () {
        if (args.title.length === 0) {
          $("#collection-title-errors").text("Name cannot be blank");
        }
      }
    });
  }
});
