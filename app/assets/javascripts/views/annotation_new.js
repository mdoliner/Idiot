Idiot.Views.AnnotationNew = Backbone.CompositeView.extend({
  template: JST["annotations/new"],
  formTemplate: JST["annotations/form"],

  events: {
    "click a.new-annotation": "renderNewForm",
    "submit": "createAnnotation"
  },

  initialize: function (options) {
    this.currentUser = options.currentUser;
    this.headerView = options.headerView;
  },

  render: function () {
    var content = this.template();
    var selection = window.getSelection();
    var anchorNode = selection.anchorNode;
    var selectionLength = selection.extentOffset - selection.anchorOffset;
    this.startIndex = this.findStartLength(anchorNode) - anchorNode.length + selection.anchorOffset;
    this.endIndex = this.startIndex + selectionLength;
    this.$el.html(content);
    return this;
  },

  findStartLength: function (node) {
    if (node.previousSibling === null) {
      return $(node).text().length;
    } else {
      return $(node).text().length + this.findStartLength(node.previousSibling);
    }
  },

  renderNewForm: function (event) {
    event.preventDefault();
    if (!this.currentUser.get("logged_in")) {
      this.headerView.trigger("forceLogin");
    } else {
      var annotation = new Idiot.Models.Annotation();
      var content = this.formTemplate({
        startIndex: this.startIndex,
        endIndex: this.endIndex,
        pageId: this.model.id,
        isNew: true,
        annotation: annotation
      });
      this.$el.html(content);
      return this;
    }
  }
});
