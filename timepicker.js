if (Meteor.isClient) {
  Template.onRendered(function () {
    this.$('.timepicker').timepicker();
  });
}