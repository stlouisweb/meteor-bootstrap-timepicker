if (Meteor.isClient) {
  Template.onRendered(function () {
    this.$('.timepicker').timepicker();
    this.$('.timepicker-precise').timepicker({
      minuteStep: 1
    });
    this.$('.timepicker-seconds').timepicker({
      minuteStep: 1,
      secondStep: 1,
      showSeconds: true
    });
  });
}