Template.newAssembly.events({
  "submit #new-assembly": function (event) {
    event.preventDefault();

    var title = event.target.title.value;
    var isPublic = event.target.isPublic.checked;

    id = Assemblies.insert({
      title: title,
      isPublic: isPublic,
      published: false,
      createdAt: new Date()
    });

    Router.go("/assemblies/" + id);
  }
});
