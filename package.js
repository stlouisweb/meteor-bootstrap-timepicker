Package.describe({
  name: 'jplack:bootstrap-timepicker',
  summary: 'Bootstrap 3 timepicker for Meteor.',
  version: '0.2.1',
  git: 'https://github.com/stlouisweb/meteor-bootstrap-timepicker.git'
});

Package.onUse(function(api) {
  api.addFiles([
    'bootstrap-timepicker/css/bootstrap-timepicker.css',
    'bootstrap-timepicker/js/bootstrap-timepicker.js'
  ], ['client']);
  api.use(['templating@1.1.1'],'client');
  api.addFiles(['timepicker.js'],'client');
  api.use('aldeed:template-extension@3.4.3', 'client');
  api.use('twbs:bootstrap@3.3.1', 'client', {weak: true});
  api.use('nemo64:bootstrap@3.3.1', 'client', {weak: true});
});