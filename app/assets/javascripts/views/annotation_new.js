Idiot.Views.AnnotationNew = Backbone.CompositeView.extend({
  template: JST["annotations/new"],
  formTemplate: JST["annotations/form"],

  events: {
    "click a.new-annotation": "renderNewForm",
    "submit": "createAnnotation"
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

    var content = this.formTemplate({
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      pageId: this.model.id
    });
    this.$el.html(content);
    return this;
  }
});
