Idiot.Views.PageShow = Backbone.CompositeView.extend({
  template: JST["pages/show"],

  events: {
    "blur .edit-text": "saveContent",
    "click a.annotation": "refreshAnnotation",
    "mouseup .page-text": "toggleNewAnnotation",
    "click #submit-annotation": "createAnnotation",
    "click #new-page-improvement input": "attachPageImprovementSubmit",
    "click #new-page-improvement textarea": "attachPageImprovementSubmit",
    "click #submit-page-improvement": "createPageImprovement",
    "click #edit-photo": "editPhoto",
    "dblclick p.editable": "editContent"

  },

  initialize: function (options) {
    this.currentUser = options.currentUser;
    this.headerView = options.headerView;
    this.listenTo(this.model.improvements(), "sync", this.render);
    this.listenTo(this.model, "change:image_url", this.render);
  },

  render: function () {
    var textContent = this.template({
      page: this.model,
      currentUser: this.currentUser
    });
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
        currentUser: this.currentUser,
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
      currentUser: this.currentUser,
      isDescription: false
    });
    this.addSubview('.page-annotations', annotationView);
    $(".page-annotations").css("top", event.pageY - $(".page-annotations").height() / 2);
  },

  toggleNewAnnotation: function (event) {
    event.preventDefault();
    if ($(event.target).hasClass("text-content")) {
      if (window.getSelection().toString().length === 0) {
        $('.page-annotations').empty();
        var annotationView = new Idiot.Views.AnnotationShow({
          model: this.model.description(),
          currentUser: this.currentUser,
          isDescription: true
        });
        this.addSubview('.page-annotations', annotationView);
        $(".page-annotations").css("top", event.pageY - $(".page-annotations").height() / 2);
      } else {
        $('.page-annotations').empty();
        var newAnnotationView = new Idiot.Views.AnnotationNew({
          collection: this.model.annotations(),
          model: this.model,
          currentUser: this.currentUser,
          headerView: this.headerView
        });
        this.addSubview('.page-annotations', newAnnotationView);
        $(".page-annotations").css("top", event.pageY - $(".page-annotations").height() / 2);
      }
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
            var top = $('.page-annotations').css("top");
            that.render();
            $('.page-annotations').empty();
            var annotationView = new Idiot.Views.AnnotationShow({
              model: annotation
            });
            that.addSubview('.page-annotations', annotationView);
            $(".page-annotations").css("top", top);
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
    if (this.currentUser.get("logged_in")) {
      attrs.username = this.currentUser.get("username");
      attrs.email = this.currentUser.get("email");
    } else {
      attrs.username = $("#page-improvement-username").val();
      attrs.email = $("#page-improvement-email").val();
    }
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
        if (!this.currentUser.get("logged_in")) {
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
          $("#content-error").text("Enter your suggestion");
        } else {
          $("#content-error").empty();
        }
      }.bind(this)
    });
  },

  editPhoto: function (event) {
    event.preventDefault();
    var $el = $("#edit-photo");
    var view = new Idiot.Views.PhotoNew({
      model: this.model,
      attrName: "page"
    });
    $el.after(view.render().$el);
    $el.remove();
  },

  editContent: function (event) {
    event.preventDefault();
    var $contentArea = $(event.target);
    var $textarea = $("<textarea class='edit-text'>");
    $textarea.css("height", $contentArea.height() + 30);

    $textarea.val(this.model.get("text"));
    $contentArea.removeClass('editable');
    $contentArea.html($textarea);
    $textarea.focus();
  },

  saveContent: function (event) {
    event.preventDefault();
    if (this.currentUser.get("level") === "editor") {
      var newContent = $(event.currentTarget).val();

      this.model.set("text", newContent);
      this.model.save();
    }
    this.render();
  },

});
