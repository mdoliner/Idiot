Idiot.Views.PageShow = Backbone.CompositeView.extend({
  template: JST["pages/show"],

  events: {
    "click a.annotation": "refreshAnnotation",
    "mouseup .page-text": "toggleNewAnnotation",
    "click #submit-annotation": "createAnnotation",
    "click #new-page-improvement input": "attachPageImprovementSubmit",
    "click #new-page-improvement textarea": "attachPageImprovementSubmit",
    "click #submit-page-improvement": "createPageImprovement"
  },

  initialize: function (options) {
    this.currentUser = options.currentUser;
    this.listenTo(this.model.improvements(), "sync", this.render);
  },

  render: function () {
    var textContent = this.template({ page: this.model });
    var annotations = this.model.annotations();
    this.$el.html(textContent);
    var $textContent = this.$el.find(".text-content");
    var text = $textContent.text();
    annotations.each(function (annotation) {
      var startTag = "<a class='annotation' href='#' data-id=" + annotation.id + ">";
      var endTag = "</a>"
      if (annotation.get("end_index") === 0) {return}
      text = text.slice(0, annotation.get("start_index")) +
      startTag +
      text.slice(annotation.get("start_index"), annotation.get("end_index")) +
      endTag +
      text.slice(annotation.get("end_index"));
    });
    $textContent.html(text);
    if (this.model.description().id) {
      var annotationView = new Idiot.Views.AnnotationShow({
        model: this.model.description(),
        isDescription: true
      });
      this.addSubview('.page-annotations', annotationView);
    }
    var improvementView = new Idiot.Views.ImprovementPagePartial({
      collection: this.model.improvements(),
      currentUser: this.currentUser
    })
    this.$el.find("#page-improvements").html(improvementView.render({
      improvements: this.model.improvements()
    }).$el);
    return this;
  },

  refreshAnnotation: function (event) {
    event.preventDefault();
    var id = $(event.target).data("id");
    $('.page-annotations').empty();
    var annotationView = new Idiot.Views.AnnotationShow({
      model: this.model.annotations().findWhere({id: id}),
      isDescription: false
    });
    this.addSubview('.page-annotations', annotationView);
  },

  toggleNewAnnotation: function (event) {
    event.preventDefault();

    if (window.getSelection().toString().length === 0) {
      $('.page-annotations').empty();
      var annotationView = new Idiot.Views.AnnotationShow({
        model: this.model.description(),
        isDescription: true
      });
      this.addSubview('.page-annotations', annotationView);
    } else {
      $('.page-annotations').empty();
      var newAnnotationView = new Idiot.Views.AnnotationNew({
        collection: this.model.annotations(),
        model: this.model
      });
      this.addSubview('.page-annotations', newAnnotationView);
    }
  },

  createAnnotation: function (event) {
    event.preventDefault();
    var data = $("#annotation-form").serializeJSON().annotation;
    var that = this;
    this.model.annotations().create(data, {
      wait: true,
      success: function (annotation) {
        that.model.fetch({
          success: function () {
            that.render();
            $('.page-annotations').empty();
            var annotationView = new Idiot.Views.AnnotationShow({
              model: annotation
            });
            that.addSubview('.page-annotations', annotationView);
          }
        });
      }
    });
  },

  attachPageImprovementSubmit: function (event) {
    event.preventDefault();
    var $span = $("#submit-page-improvement");
    $span.empty();
    var $submit = $("<button class='submit-page-improvement' type='submit'></button>").html("Post suggestion");
    $span.append($submit);
    if (!this.currentUser.get("logged_in")) {
      $span.append($("<small class='signup-page-improvement'>Have an account? <a href='#'>Sign in</a> first |</small>"));
    }
    $span.append($("<a href='#'>How to add links/pics etc</a>"));
  },

  createPageImprovement: function (event) {
    event.preventDefault();
    var attrs = {};
    attrs.author_id = this.currentUser.id || 0;
    attrs.content = $("#page-improvement-content").val();
    attrs.username = this.currentUser.get("username") || $("page-improvement-username").val();
    attrs.email = this.currentUser.get("email") || $("page-improvement-email").val();
    attrs.improvementable_id = this.model.id;
    attrs.improvementable_type = "Page";
    var improvement = new Idiot.Models.Improvement();
    improvement.save(attrs, {
      wait: true,
      success: function () {
        this.model.improvements().add(improvement);
        if (this.currentUser.get("logged_in")) {
          $("#page-improvement-content").val("");
        } else {
          $("#new-page-improvement").empty();
        }
      }.bind(this),
      error: function () {
        if (this.currentUser.get("logged_in")) {
          if (attrs.username.length === 0) {
            $("#username-error").text("Enter your name.");
          } else {
            $("#username-error").empty();
          }
          if (attrs.email.length === 0) {
            $("#email-error").text("Enter your email address.");
          } else {
            $("#email-error").empty();
          }
        }
        if (attrs.content.length === 0) {
          $("#content-error").text("Enter your suggesstion");
        } else {
          $("#content-error").empty();
        }
      }.bind(this)
    })
  }
});
