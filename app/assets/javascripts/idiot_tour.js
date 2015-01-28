(function () {
  if (typeof Idiot === "undefined") {
    window.Idiot = {};
  }

  var tour = Idiot.Tour = new Shepherd.Tour({
    classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
    showCancelLink: true
  });

  tour.addStep({
    text: ["Welcome to Idiot! Would you like to take a tour?"],
    attachTo: 'span.page-link-big',
    showCancelLink: true,
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
    text: ["Sweet! Please try to follow the steps. You can mess around after. I promise. If it's too long, feel free to quit and explore."],
    showCancelLink: true,
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
    text: ["Welcome to the front page. Here you can see the most recent pages in every category. You can check out all the genres at the top. Let's make our own page."],
    showCancelLink: true,
    attachTo: 'span.page-link-big',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Great how?',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  //
  // tour.addStep({
  //   text: ["You can check out any specific genre by clicking on one of the header links. Let's go check out Rap."],
  //   showCancelLink: true,
  //   attachTo: 'ul.nav-links',
  //   classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  //   advanceOn: "pre click"
  // });
  //
  // tour.addStep({
  //   text: ["Here you can see the five most recent songs for Rap. Let's click 'See more Rap Idiot' for some more songs."],
  //   showCancelLink: true,
  //   classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  //   attachTo: 'html bottom',
  //   advanceOn: "a.pages-index click"
  // });
  //
  // tour.addStep({
  //   text: ["We can now see all the poppin' songs Rap has to offer. However, your favorite song probably isn't here. Let's try to make our own."],
  //   attachTo: 'html bottom',
  //   showCancelLink: true,
  //   classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  //   buttons: [
  //   {
  //     text: 'Great, how?',
  //     action: tour.next,
  //     classes: 'shepherd-button-example-primary'
  //   }
  //   ]
  // });

  tour.addStep({
    text: ["Let's click on 'Sign In' to get started."],
    attachTo: 'a.create',
    showCancelLink: true,
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    advanceOn: 'pre click'
  });
  tour.addStep({
    text: ["Oh man! You have to sign in?? Don't worry, I've got you covered. Click 'Guest Login'"],
    attachTo: '#header-form',
    showCancelLink: true,
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    advanceOn: 'button.login-editor click'
  });
  tour.addStep({
    text: ["I like you a lot, so I just gave you a (modified) editor account. You'll see you can now also make artists. Let's make one! Click 'Create Artist'."],
    attachTo: '#header',
    showCancelLink: true,
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    advanceOn: "a#new-artist click"
  });
  tour.addStep({
    text: ["Let's add whoever you want to the database. For more coolness later, choose an artist from Spotify and spell their name exactly as it appears there. If you want a suggestion why not try 'Foxy Shazam'?"],
    attachTo: '#header-form',
    showCancelLink: true,
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    advanceOn: "button#create-artist click"
  });
  tour.addStep({
    text: ["You can now edit your artist. All of their songs will be on the left. You can change their photo, and you can update their bio by double clicking on it. Go on. Try it. Write something fun."],
    attachTo: '#header',
    showCancelLink: true,
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'I totes updated the bio.',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["Awesome, now let's give your artist a new song. Click 'Create Page'!"],
    attachTo: 'a.create',
    showCancelLink: true,
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    advanceOn: "a.create click"
  });
  tour.addStep({
    text: ["Let's make the page. Use the real title of the song as listed on Spotify. If you're doing Foxy Shazam, how about 'Unstoppable'? Also make sure to put some text in for lyrics. You'll want it soon."],
    attachTo: '#header',
    showCancelLink: true,
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Created my page!',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });

  tour.addStep({
    text: ["Here's the heart of the site. First, if you put in the right spelling of the song and artist you should have some snazzy artwork and spotify player at the top of the page."],
    attachTo: '#header',
    showCancelLink: true,
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Very cool.',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["You can highlight your lyrics to add annotations. Go for it."],
    attachTo: 'img.photo-main',
    showCancelLink: true,
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Nice, what else can I do?',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["You can view other annotations. Edit your annotations. Leave suggestions. Even be yelled at for trying to annotate over another annotation. Try lots of stuff!"],
    attachTo: 'img.photo-main',
    showCancelLink: true,
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'I\'m ready to finish the tour.',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["To finish out the tour, head back to the artist's page."],
    attachTo: 'a.artist',
    showCancelLink: true,
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    advanceOn: 'a.artist click'
  });
  tour.addStep({
    text: ["There's lots more features to play with, like adding songs to albums by click 'Add a New Work'. Please play around. However, once you're done, if you could delete the artist, that'd be great. Just click 'Delete This Artist' twice. I'll even treat you to some subtle css. Hope you enjoyed!"],
    attachTo: '#header',
    showCancelLink: true,
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Bye!',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  // tour.addStep({
  //   text: ["Yet again, let's make some real data. For Foxy, let's add the album 'Foxy Shazam'"],
  //   attachTo: '#header-form',
  //   classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  //   advanceOn: 'button#create-collection click'
  // });
  // tour.addStep({
  //   text: ["Awesome, hopefully your album auto-loaded it's artwork. Let's use the search input to add our song from earlier. Just click in and begin typing your song name."],
  //   attachTo: '#header',
  //   classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  //   buttons: [
  //   {
  //     text: 'Added!',
  //     action: tour.next,
  //     classes: 'shepherd-button-example-primary'
  //   }
  //   ]
  // });
  // tour.addStep({
  //   text: ["You can double-click the number to make it the proper track number."],
  //   attachTo: 'span.collection-items',
  //   classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  //   buttons: [
  //   {
  //     text: 'Awesome.',
  //     action: tour.next,
  //     classes: 'shepherd-button-example-primary'
  //   }
  //   ]
  // });
  // tour.addStep({
  //   text: ["Let's click the song to check out how the page changed."],
  //   attachTo: 'span.collection-items',
  //   classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  //   advanceOn: 'a click'
  // });
  // tour.addStep({
  //   text: ["You'll see the album is now there with any adjacent tracks. Let's click the artist for the last step."],
  //   attachTo: '.page-collection',
  //   classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  //   advanceOn: 'a.artist click'
  // });
  // tour.addStep({
  //   text: [""],
  //   attachTo: '#delete-artist',
  //   classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
  //
  // });

})();
