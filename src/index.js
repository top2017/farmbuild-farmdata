'use strict';

// Inject modules
angular.module('farmbuild.farmdata').run(function(){});

window.farmbuild = {
  farmdata: {}
};

// Init api by instantiating angular module internally, users are not tied to angular for using farmbuild.
angular.injector(['ng', 'farmbuild.farmdata']);