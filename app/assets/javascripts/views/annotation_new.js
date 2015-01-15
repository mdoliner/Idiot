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
    this.anchorNode = selection.anchorNode;
    this.extentNode = selection.extentNode;
    var length = this.findLength(this.anchorNode);
    this.startIndex = length - this.anchorNode.length + selection.anchorOffset;
    this.endIndex = length - this.anchorNode.length + selection.extentOffset;
    this.$el.html(content);
    return this;
  },

  findLength: function (node) {
    if (node.previousSibling === null) {
      return $(node).text().length;
    } else {
      return $(node).text().length + this.findLength(node.previousSibling);
    }
  },

  overlaps: function () {
    if (this.anchorNode.nodeValue != this.extentNode.nodeValue) {
      return true;
    }
    return false;
  },

  renderNewForm: function (event) {
    event.preventDefault();
    if (!this.currentUser.get("logged_in")) {
      this.headerView.trigger("forceLogin");
    } else if (this.overlaps()) {

    } else {
      var annotation = new Idiot.Models.Annotation();
      var content = this.formTemplate({
        startIndex: this.startIndex,
        endIndex: this.endIndex,
        pageId: this.model.id,
        isNew: true,
        annotation: annotation
      });
      this.$el.html(content);;
      return this;
    }
  }
});
