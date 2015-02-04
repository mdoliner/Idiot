Idiot.Views.AnnotationNew = Backbone.CompositeView.extend({
  template: JST["annotations/new"],
  formTemplate: JST["annotations/form"],
  illegalTemplate: JST["annotations/illegal"],

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
    if (selection.anchorOffset < selection.extentOffset) {
      this.anchorNode = selection.anchorNode;
      this.extentNode = selection.extentNode;
      var anchorOffset = selection.anchorOffset;
      var extentOffset = selection.extentOffset;
    } else {
      this.anchorNode = selection.extentNode;
      this.extentNode = selection.anchorNode;
      var anchorOffset = selection.extentOffset;
      var extentOffset = selection.anchorOffset;
    }
    var length = this.findLength(this.anchorNode);
    this.startIndex = length - this.anchorNode.length + anchorOffset;
    this.endIndex = length - this.anchorNode.length + extentOffset;
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
    if (this.overlaps()) {
      $("#header-form").html(this.illegalTemplate());
      $("span.modal-background").css("visibility", "visible").css("opacity", "1");
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
