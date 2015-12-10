/* global AutoForm, $ */

AutoForm.addInputType("bootstrap-timepicker", {
  template: "afBootstrapTimepicker",
  valueOut: function () {
    if (this.val()) {
      var val = this.timepicker('getTime');
      return (val instanceof String) ? val : this.val();
    }
  },
  valueConverters: {
    "string": function (val) {
      return val;
    },
    "stringArray": function (val) {
      return [val];
    }
  }
});

Template.afBootstrapTimepicker.helpers({
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    // Add bootstrap class
    atts = AutoForm.Utility.addClass(atts, "form-control");
    delete atts.timePickerOptions;
    return atts;
  }
});

Template.afBootstrapTimepicker.rendered = function () {
  var $input = this.data.atts.buttonClasses ? this.$('.input-group.time') : this.$('input');
  var data = this.data;

  // instanciate timepicker
  $input.timepicker(data.atts.timePickerOptions);

  // set and reactively update values
  this.autorun(function () {
    var data = Template.currentData();

    // set field value
    if (data.value instanceof String) {
      $input.timepicker('setTime', data.value);
    }
  });
};

Template.afBootstrapTimepicker.destroyed = function () {
  var $input = this.data.atts.buttonClasses ? this.$('.input-group.time') : this.$('input');
  $input.timepicker('remove');
};