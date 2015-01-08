window.Idiot = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    alert('Hello from Backbone!');
    var router = new Idiot.Routers.Router();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  Idiot.initialize();
});
