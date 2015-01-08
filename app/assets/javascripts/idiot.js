window.Idiot = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new Idiot.Routers.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Idiot.initialize();
});
