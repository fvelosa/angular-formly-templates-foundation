export default ngModule => {
  ngModule.config(addCheckboxType);

  function addCheckboxType(formlyConfigProvider, formlyFoundationApiCheck) {
    const c = formlyFoundationApiCheck;
    formlyConfigProvider.setType({
      name: 'checkbox',
      template: require('./checkbox.html'),
      wrapper: ['bootstrapHasError'],
      apiCheck: {
        templateOptions: c.shape({
          label: c.string
        })
      },
      apiCheckInstance: c
    });
  }
};
