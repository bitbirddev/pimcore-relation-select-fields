pimcore.registerNS("pimcore.bundle.RelationSelectFieldsBundle.startup");

pimcore.bundle.RelationSelectFieldsBundle.startup = Class.create({
  getClassName: function () {
    return "pimcore.bundle.RelationSelectFieldsBundle";
  },

  initialize: function () {
    document.addEventListener(
      pimcore.events.pimcoreReady,
      this.pimcoreReady.bind(this),
    );
  },

  pimcoreReady: function (params, broker) {
    // alert("RelationSelectFieldsBundle ready!");
    // broker.registerPlugin(this);
  },
});

const RelationSelectFieldsBundle =
  new pimcore.bundle.RelationSelectFieldsBundle.startup();
