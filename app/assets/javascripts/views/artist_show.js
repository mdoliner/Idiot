Idiot.Views.ArtistShow = Backbone.View.extend({
  template: JST["artists/show"],
  tagName: 'span',
  className: 'artist-content',

  events: {
    "click #edit-photo": "editPhoto",
    "dblclick p.editable": "editBiography",
    "blur .edit-biography": "saveBiography"
  },

  initialize: function (options) {
    this.currentUser = options.currentUser;
    this.listenTo(this.model, "sync", this.render);
  },

  render: function () {
    var content = this.template({
      artist: this.model,
      currentUser: this.currentUser
    });
    this.$el.html(content);
    return this;
  },

  editBiography: function (event) {
    event.preventDefault();
    var $biography = $(event.currentTarget);
    var $textarea = $("<textarea class='edit-biography'>");
    $textarea.css("height", $biography.height() + 30);

    $textarea.val(this.model.get("biography"));
    $biography.removeClass('editable');
    $biography.html($textarea);
    $textarea.focus();
  },

  saveBiography: function (event) {
    event.preventDefault();
    if (this.currentUser.get("level") === "editor") {
      var newBiography = $(event.currentTarget).val();

      this.model.set("biography", newBiography);
      this.model.save();
    }
    this.render();
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
