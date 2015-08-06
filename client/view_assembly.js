Template.viewAssembly.created = function() {
  Session.set("textClass", "big-text");
};

Template.viewAssembly.events({
  "focus #edit-assembly .js-editable-content-container": function (event) {
    $(event.currentTarget).toggleClass('content-item--editing');
    Session.set("isContentItemFocused", true);
  },
  "focusout #edit-assembly .js-editable-content-container": function (event) {
    updateTextStyle(event);
  },
  "click .save-button": function (event) {
    updateTextStyle(event);
  }
});

Template.viewAssembly.helpers({
  contentItemFocused: function () {
    return Session.get("isContentItemFocused");
  },

  textClass: function () {
    return Session.get("textClass");
  }
});

var updateTextStyle = function(event) {
  var text = event.target.textContent;

  $(event.currentTarget).toggleClass('content-item--editing');

  if(text.length > 200) {
    Session.set("textClass", "");
  }
  else {
    Session.set("textClass", "big-text");
  }
  Session.set("isContentItemFocused", false);
};
