Idiot.Views.CollectionShow = Backbone.View.extend({
  template: JST['collections/show'],
  tagName: "span",
  className: "collection-show group",

  events: {
    "click #edit-photo": "editPhoto",
    "dblclick small.editable": "editNumbering",
    "blur .edit-numbering": "saveNumbering",
    "click #delete-photo": "deletePrep"
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

  deletePrep: function (event) {
    event.preventDefault();
    $(event.currentTarget).addClass("active");
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
