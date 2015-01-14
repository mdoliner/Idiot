Idiot.Collections.Users = Backbone.Collection.extend ({
  url: "api/users",
  model: Idiot.Models.User,
  getOrAdd: function (id) {
    var user = this.get(id);
    if (!user) {
      user = new Idiot.Models.User({id: id});
    }
    return user;
  }
});
