Idiot.Views.ArtistShow = Backbone.View.extend({
  template: JST["artists/show"],
  tagName: 'span',
  className: 'artist-content',

  events: {
    "click #edit-photo": "editPhoto"
  },

  initialize: function () {
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      artist: this.model
    });
    this.$el.html(content);
    return this;
  },

  editPhoto: function (event) {
    event.preventDefault();
    var $el = $("#edit-photo");
    var view = new Idiot.Views.PhotoNew({
      model: this.model,
      attrName: "artist"
    });
    $el.after(view.render().$el);
    $el.remove();
  }
})
