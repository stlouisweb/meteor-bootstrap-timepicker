# meteor-bootstrap-timepicker
### Bootstrap 3 timepicker for Meteor.

Packages [acpmasquerade/bootstrap3-timepicker2](https://github.com/acpmasquerade/bootstrap3-timepicker2) for use in Meteor projects.

### Usage
call the timepicker script from the meteor templates rendered callback with the id of your time input:
```javascript
Template.templatename.rendered = function() {
  $("#timepicker-default").timepicker();
};
```
and in your template file:
```handlebars
<template name="templatename">
    <input id="timepicker-default" type="text">
</template>
```

#### To-Do
AutoForm integration
