'use strict';

// Drupal Template Helper Options.
// Provides helpers to save and load options.

// Drupal Template Helper Options.

var DrupalTemplateHelperOptions = {

  // Save settings.
  save: function save(settings, callback) {
    chrome.storage.sync.set(settings, function (settings) {
      if (typeof callback !== 'undefined') {
        callback(settings);
      }
    });
  },

  // Returns settings.
  get: function get(settings, callback) {
    chrome.storage.sync.get(settings, function (settings) {
      if (typeof callback !== 'undefined') {
        callback(settings);
      }
    });
  },

  // Shows an alert.
  alert: function alert(message, type) {
    var type = type || 'success';
    var $alert = document.getElementById('alerts');
    $alert.innerHTML = '<div class="alert ' + type + '">' + message + '</div>';
  },

  // Logs a message to the console.
  log: function log(message) {
    chrome.extension.getBackgroundPage().console.log(message);
  }
};
