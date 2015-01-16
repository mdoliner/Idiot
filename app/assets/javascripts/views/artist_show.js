Idiot.Views.ArtistShow = Backbone.View.extend({
  template: JST["artists/show"],
  tagName: 'span',
  className: 'artist-content',

  events: {
    "click #edit-photo": "editPhoto",
    "dblclick p.editable": "editBiography",
    "blur .edit-biography": "saveBiography",
    "click #new-collection": "newCollectionForm",
    "click #delete-artist": "deletePrep",
    "click #delete-artist.active": "deleteArtist"
  },

  initialize: function (options) {
    this.headerView = options.headerView;
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

  newCollectionForm: function (event) {
    event.preventDefault();
    var collection = new Idiot.Models.Collection();
    var view = new Idiot.Views.CollectionNew({
      model: collection,
      artist: this.model,
      headerView: this.headerView
    });
    $("#header-form").html(view.render().$el);
    $("span.modal-background").css("visibility", "visible").css("opacity", "1");
  },

  deletePrep: function (event) {
    event.preventDefault();
    $(event.currentTarget).addClass("active");
  },

  deleteArtist: function (event) {
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
      attrName: "artist"
    });
    $el.after(view.render().$el);
    $el.remove();
  }
})
