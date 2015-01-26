(function () {
  if (typeof Idiot === "undefined") {
    window.Idiot = {};
  }

  var tour = Idiot.Tour = new Shepherd.Tour({
    classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
    showCancelLink: true
  });

  tour.addStep({
    text: ["Welcome to Idiot! Would you like to take a tour? But like, really, take a tour."],
    attachTo: 'span.page-link-big',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      buttons: [
        {
          text: 'No',
          classes: 'shepherd-button-secondary',
          action: tour.cancel
        }, {
          text: 'Yes',
          action: tour.next,
          classes: 'shepherd-button-example-primary'
        }
      ]
  });

  tour.addStep({
    text: ["Sweet! Please try to follow the steps. You can mess around after. I promise."],
    attachTo: 'span.page-link-big',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      buttons: [
      {
        text: 'Ok, I Promise!',
        action: tour.next,
        classes: 'shepherd-button-example-primary'
      }
      ]
  });

  tour.addStep({
    text: ["Welcome to the front page. Here you can see the most recent pages in every category."],
    attachTo: 'span.page-link-big',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Dope.',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });

  tour.addStep({
    text: ["You can check out any specific genre by clicking on one of the header links. Let's go check out what's happening at Rap."],
    attachTo: 'ul.nav-links',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'I absolutely clicked Rap.',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });

  tour.addStep({
    text: ["Here you can see the five most recent songs for Rap. Let's click 'See more Rap Idiot' for some more songs."],
    attachTo: 'ul.nav-links',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Way ahead of you. Already there.',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });

  tour.addStep({
    text: ["We can now see all the poppin' songs Rap has to offer. However, your favorite song probably isn't here. Let's try to make our own."],
    attachTo: 'li.page-item',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Great, how?',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });

  tour.addStep({
    text: ["Let's click on 'Create Page' to get started."],
    attachTo: 'a.create',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Clicked it!',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["Oh man! You have to sign in?? Don't worry, I've got you covered. Click 'Sign in here.'"],
    attachTo: '#header-form',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Ok, clicked that too.',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["I like you a lot, so I'm go to give you a (modified) editor account. Sign in with username 'editor' and password 'editor'"],
    attachTo: '#header-form',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Logged in!',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });

})();
