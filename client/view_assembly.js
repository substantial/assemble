Template.viewAssembly.events({
  "focusout #edit-assembly": function (event) {
  },
  "focus #edit-assembly [contentEditable]": function (event) {
    Session.set("isContentItemFocused", true);
  },
  "focusout #edit-assembly [contentEditable]": function (event) {
    Session.set("isContentItemFocused", false);
  },
  "click .save-button": function (event) {
    Session.set("isContentItemFocused", false);
  }
});
Template.viewAssembly.helpers({
  contentItemFocused: function () {
    return Session.get("isContentItemFocused");
  }
});
