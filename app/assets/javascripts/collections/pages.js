Idiot.Collections.Pages = Backbone.Collection.extend({
  url: "api/pages",
  model: Idiot.Models.Page,
  getOrAdd: function (id) {
    var page = this.get(id);
    if (!page) {
      page = new Idiot.Models.Page({id: id});
    }
    return page;
  }
})
