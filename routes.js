Router.configure({
  layoutTemplate: 'applicationLayout'
});

Router.route('/', function () {
});

Router.route('/admin/assemblies/new', function () {
  this.render('newAssembly');
});

Router.route('/admin/assemblies/:id', function () {
  this.render('editAssembly', {
    data: function() {
      return Assemblies.findOne({_id: this.params.id});
    }
  });
});
