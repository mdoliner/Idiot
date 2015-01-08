Idiot.Models.Genre = Backbone.Model.extend({
  urlRoot: "api/genres",
  parse: function (payload) {
    if (payload.most_recent_page) {
      this.mostRecentPage().set(payload.most_recent_page, {parse: true});
      delete payload.most_recent_page;
    }
    if (payload.recent_pages) {
      this.recentPages().set(payload.recent_pages, {parse: true});
      delete payload.recent_pages;
    }

    return payload;
  },
  mostRecentPage: function () {
    if(!this._mostRecentPage) {
      this._mostRecentPage = new Idiot.Models.Page();
    }

    return this._mostRecentPage;
  },
  recentPages: function () {
    if(!this._recentPages) {
      this._recentPages = new Idiot.Collections.Pages();
    }
    return this._recentPages;
  }
});
