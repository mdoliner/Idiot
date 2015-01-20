Idiot.Views.AnnotationShow = Backbone.View.extend({
  template: JST["annotations/show"],
  formTemplate: JST["annotations/form"],

  events: {
    "click a.edit": "renderEdit",
    "click button#submit-annotation": "updateAnnotation",
    "click #annotation-replies": "renderReplies",
    "click #submit-annotation-improvement": "createAnnotationImprovement",
    "click #new-annotation-improvement input": "attachAnnotationImprovementSubmit",
    "click #new-annotation-improvement textarea": "attachAnnotationImprovementSubmit"
  },

  initialize: function (options) {
    this.isDescription = options.isDescription;
    this.currentUser = options.currentUser;
    this.listenTo(this.model.improvements(), "add", this.renderReplies)
  },

  render: function () {
    var content = this.template({
      annotation: this.model,
      isDescription: this.isDescription });
    this.$el.html(content);
    return this;
  },

  renderEdit: function () {
    event.preventDefault();

    var height = $(".page-annotations p").height();
    var annotation = this.model;
    var content = this.formTemplate({
      annotation: this.model,
      isNew: false
    });
    $(".page-annotations p").html(content);
    $("textarea#content").css("height", height);
    return this;
  },

  updateAnnotation: function (options) {
    event.preventDefault();
    var content = $("textarea.annotation-content").val();
    this.model.set({content: content});
    this.model.save({annotation: {content: content}}, {patch: true});
    var annotationView = new Idiot.Views.AnnotationShow({
      model: this.model,
      isDescription: options.isDescription || false
    });
    this.$el.html(annotationView.render().$el);
  },

  renderReplies: function () {
    var improvementView = new Idiot.Views.ImprovementAnnotationPartial({
      collection: this.model.improvements(),
      currentUser: this.currentUser
    })
    var $improvements = this.$el.find("#annotation-improvements");
    $improvements.empty();
    $improvements.html(improvementView.render({
      improvements: this.model.improvements()
    }).$el);
  },

  createAnnotationImprovement: function (event) {
    event.preventDefault();
    var attrs = {};
    attrs.author_id = this.currentUser.id || 0;
    attrs.content = $("#annotation-improvement-content").val();
    if (this.currentUser.get("logged_in")) {
      attrs.username = this.currentUser.get("username");
      attrs.email = this.currentUser.get("email");
    } else {
      attrs.username = $("#annotation-improvement-username").val();
      attrs.email = $("#annotation-improvement-email").val();
    }
    attrs.improvementable_id = this.model.id;
    attrs.improvementable_type = "Annotation";
    var improvement = new Idiot.Models.Improvement();
    improvement.save(attrs, {
      wait: true,
      success: function () {
        this.model.improvements().add(improvement);
        if (this.currentUser.get("logged_in")) {
          $("#annotation-improvement-content").val("");
        } else {
          $("#new-annotation-improvement").empty();
        }
      }.bind(this),
      error: function () {
        if (!this.currentUser.get("logged_in")) {
          if (attrs.username.length === 0) {
            $("#anno-username-error").text("Enter your name.");
          } else {
            $("#anno-username-error").empty();
          }
          if (attrs.email.length === 0) {
            $("#anno-email-error").text("Enter your email address.");
          } else {
            $("#anno-email-error").empty();
          }
        }
        if (attrs.content.length === 0) {
          $("#anno-content-error").text("Enter your suggesstion");
        } else {
          $("#anno-content-error").empty();
        }
      }.bind(this)
    })
  },

  attachAnnotationImprovementSubmit: function () {
    event.preventDefault();
    var $span = $("#submit-annotation-improvement");
    $span.empty();
    var $submit = $("<button class='submit-annotation-improvement' type='submit'></button>").html("Post suggestion");
    $span.append($submit);
    if (!this.currentUser.get("logged_in")) {
      $span.append($("<small class='signup-annotation-improvement'>Have an account? <a href='#'>Sign in</a> first |</small>"));
    }
    $span.append($("<a href='#'>How to add links/pics etc</a>"));
  }

});
