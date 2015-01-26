(function () {
  if (typeof Idiot === "undefined") {
    window.Idiot = {};
  }

  var tour = Idiot.Tour = new Shepherd.Tour({
    classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
    showCancelLink: true
  });

  tour.addStep({
    text: ["Welcome to Idiot!"],
    attachTo: 'body',
    classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      buttons: [
        {
          text: 'Exit',
          classes: 'shepherd-button-secondary',
          action: tour.cancel
        }, {
          text: 'Next',
          action: tour.next,
          classes: 'shepherd-button-example-primary'
        }
      ]
  });


})();
