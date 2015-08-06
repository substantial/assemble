Template.viewAssembly.events({
  "focusout #edit-assembly": function (event) {
  },
  "focus #edit-assembly [contentEditable]": function (event) {
    Session.set("isContentItemFocused", true);
  }
});
Template.viewAssembly.helpers({
  contentItemFocused: function () {
    return Session.get("isContentItemFocused");
  }
});
