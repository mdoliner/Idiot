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
    if (payload.pages) {
      this.pages().set(payload.pages, {parse: true});
      delete payload.pages;
    }

    return payload;
  },
  pages: function () {
    if(!this._pages) {
      this._pages = new Idiot.Collections.Pages({}, { genre: this });
    }

    return this._pages;
  },
  mostRecentPage: function () {
    if(!this._mostRecentPage) {
      this._mostRecentPage = new Idiot.Models.Page();
    }

    return this._mostRecentPage;
  },
  recentPages: function () {
    if(!this._recentPages) {
      this._recentPages = new Idiot.Collections.Pages({}, { genre: this });
    }
    return this._recentPages;
  }
});
