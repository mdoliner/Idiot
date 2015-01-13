Idiot.Views.PhotoNew = Backbone.View.extend ({
  template: JST["photos/new"],
  tagName: "form",
  className: "update-photo",
  events: {
    "submit": "addPhoto",
    "change #input-image": "fileInputChange"
  },

  initialize: function (options) {
    this.redirectUrl = options.url;
    this.attrName = options.attrName;
  },

  render: function (options) {
    var content = this.template({
      model: this.model
    });
    this.$el.html(content);
    return this;
  },

  addPhoto: function (event) {
    event.preventDefault();

    var arg = {};
    arg[this.attrName] = {photo: this.model._image};
    console.log(arg);
    this.model.save(arg, {
      patch: true,
      success: function () {
        delete this.model._image;
      }.bind(this)
    });
  },

  fileInputChange: function (event) {
    var file = event.currentTarget.files[0];
    var reader = new FileReader();
    var that = this;

    reader.onloadend = function() {
      that.model._image = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }

  }
});
