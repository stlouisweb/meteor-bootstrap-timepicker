Package.describe({
  name: 'jplack:bootstrap-timepicker',
  summary: 'Bootstrap 3 timepicker for Meteor.',
  version: '0.1.1',
  git: 'https://github.com/stlouisweb/meteor-bootstrap-timepicker.git'
});

Package.onUse(function(api) {
  api.addFiles([
    'bootstrap-timepicker/css/bootstrap-timepicker.css',
    'bootstrap-timepicker/js/bootstrap-timepicker.js'
  ], ['client']);
  api.use('twbs:bootstrap', 'client', {weak: true});
  api.use('nemo64:bootstrap', 'client', {weak: true});
});