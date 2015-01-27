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
    attachTo: '.pages-index',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Way ahead of you.',
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
    text: ["Let's click on 'Sign In' to get started."],
    attachTo: 'a.new-session',
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
    text: ["Oh man! You have to sign in?? Don't worry, I've got you covered. Click 'Guest Login'"],
    attachTo: '#header-form',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Cool, I\'m logged in!',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["I like you a lot, so I just gave you a (modified) editor account. You'll see you can now also make artists. Let's make one!"],
    attachTo: 'a#new-artist',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'What next??',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["Let's add whoever you want to the database. For more coolness later, choose an artist from Spotify and spell their name exactly as it appears there. If you want a suggestion why not try 'Foxy Shazam'?"],
    attachTo: '#header-form',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Made them!',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["You can now edit your artist. All of their songs will be on the left. You can upload a photo by clicking edit photo and you can update their bio by double clicking on it. Go on. Try it. Write something fun."],
    attachTo: 'p.biography',
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
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Done and... done.',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["Pick the right genre. Find your artist in the search input. You know the drill. Use the real title of the song as listed on Spotify. If you're doing Foxy Shazam, how about 'Unstoppable'? Also make sure to put some text in for lyrics. You'll want it soon."],
    attachTo: 'span.genre-buttons',
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
    text: ["Here's the heart of the site. You can highlight your lyrics to add annotations. Go for it. You can look at other annotations. Leave suggestions. Play the song. Even be yelled at for trying to annotate over another annotation. If you put in the right spelling of the song and artist you should also have some snazzy artwork and spotify player. Go try some stuff. Try a bunch of stuff."],
    attachTo: 'img.photo-main',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Ok, I\'ve had too much fun. What\'s next?',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["To finish out the tour, let's add this song to a cd. Click your artist's name to go back to their page."],
    attachTo: 'a.artist',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Yep yep.',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["You'll see your song should now be on the artist's list of songs on the left. Let's click a 'Add a New Work'"],
    attachTo: '#new-collection',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Ready to make it.',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["Yet again, let's make some real data. For Foxy, let's add the album 'Foxy Shazam'"],
    attachTo: '#header-form',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Made my first album.',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["Awesome, hopefully your album auto-loaded it's artwork. Let's use the search input to add our song from earlier."],
    attachTo: 'span.collection-items',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Added!',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["You can double-click the number to make it the proper track number."],
    attachTo: 'span.collection-items',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'On it.',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["Let's click the song to check out how the page changed."],
    attachTo: 'span.collection-items',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Oh cool.',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["You'll see the album is now there with any adjacent tracks."],
    attachTo: '.page-collection',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Oh cool.',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });
  tour.addStep({
    text: ["Let's click the artist for the last step."],
    attachTo: '.artist',
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
    text: ["If you would be so kind as to delete the artist. I'll treat you with some subtle css effects. Click the delete button twice to do the deed. It's been a pleasure getting to know you. I hope you enjoyed!"],
    attachTo: '#delete-artist',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
    buttons: [
    {
      text: 'Goodbye!',
      action: tour.next,
      classes: 'shepherd-button-example-primary'
    }
    ]
  });

})();
