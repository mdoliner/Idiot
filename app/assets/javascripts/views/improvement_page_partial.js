Idiot.Views.ImprovementPagePartial = Backbone.View.extend({
    template: JST['improvements/page_partial'],

    render: function () {
      var content = this.template({
        improvements: this.collection
      });
      this.$el.html(content);
      return this;
    }
});
