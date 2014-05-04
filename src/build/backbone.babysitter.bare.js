(function (Backbone, _) {
  'use strict';

  var previousChildViewContainer = Backbone.ChildViewContainer;

  // @include ../childviewcontainer.js

  Backbone.ChildViewContainer.VERSION = '<%= version %>';

  Backbone.ChildViewContainer.noConflict = function () {
    Backbone.ChildViewContainer = previousChildViewContainer;
    return this;
  };


})(Backbone, _);
