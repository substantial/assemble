Template.viewAssembly.events({
  "focusout #edit-assembly": function (event) {
  },
  "focus #edit-assembly [contentEditable]": function (event) {
    console.log('editing');
  }
});
