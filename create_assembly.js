if (Meteor.isClient) {
  Template.newAssembly.events({
    "submit #new-assembly": function (event) {
      event.preventDefault();

      var title = event.target.assemblyTitle.value;

      id = Assemblies.insert({
        title: title,
        createdAt: new Date()
      });

      Router.go("/admin/assemblies/" + id);
    }
  });
}
