/**
 * Pimcore
 *
 * LICENSE
 *
 * This source file is subject to the new BSD license that is bundled
 * with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://www.pimcore.org/license
 *
 * @copyright  Copyright (c) 2023 bitbird development (http://www.bitbird.de)
 * @license    http://www.pimcore.org/license     New BSD License
 */

pimcore.registerNS("pimcore.object.classes.data.manyToManyRelationSelect");
pimcore.object.classes.data.manyToManyRelationSelect = Class.create(
  pimcore.object.classes.data.manyToManyRelation,
  {
    type: "manyToManyRelationSelect",
    allowIndex: true,

    /**
     * define where this datatype is allowed
     */
    allowIn: {
      object: true,
      objectbrick: true,
      fieldcollection: true,
      localizedfield: true,
      classificationstore: false,
      block: true,
    },

    initialize: function (treeNode, initData) {
      this.type = "manyToManyRelationSelect";

      this.initData(initData);

      pimcore.helpers.sanitizeAllowedTypes(this.datax, "classes");
      pimcore.helpers.sanitizeAllowedTypes(this.datax, "assetTypes");
      pimcore.helpers.sanitizeAllowedTypes(this.datax, "documentTypes");

      // overwrite default settings
      this.availableSettingsFields = [
        "name",
        "title",
        "tooltip",
        "mandatory",
        "noteditable",
        "invisible",
        "visibleGridView",
        "visibleSearch",
        "style",
      ];

      this.treeNode = treeNode;
    },

    getTypeName: function () {
      return t("manyToManyRelationSelect");
    },

    getGroup: function () {
      return "relation";
    },

    getLayout: function ($super) {
      $super();

      this.specificPanel.items.items[0].add([
        {
          xtype: "checkbox",
          fieldLabel: t("relationselectfieldsbundle_relationselect_recursive"),
          name: "recursive",
          value: this.datax.recursive,
        },
      ]);

      this.specificPanel.items.items[1].items.items[1].add([
        {
          fieldLabel: t("relationselectfieldsbundle_relationselect_folder"),
          name: "documentFolder",
          fieldCls: "input_drop_target",
          value: this.datax.documentFolder,
          width: 500,
          xtype: "textfield",
          labelAlign: "top",
          listeners: {
            render: function (el) {
              new Ext.dd.DropZone(el.getEl(), {
                ddGroup: "element",
                getTargetFromEvent: function (e) {
                  return this.getEl();
                }.bind(el),

                onNodeOver: function (target, dd, e, data) {
                  return Ext.dd.DropZone.prototype.dropAllowed;
                },

                onNodeDrop: function (target, dd, e, data) {
                  data = data.records[0].data;
                  if (data.elementType == "document") {
                    this.setValue(data.id);
                    return true;
                  }
                  return false;
                }.bind(el),
              });
            },
          },
        },
      ]);

      this.specificPanel.items.items[2].add([
        {
          fieldLabel: t("relationselectfieldsbundle_relationselect_folder"),
          name: "assetFolder",
          fieldCls: "input_drop_target",
          value: this.datax.assetFolder,
          width: 500,
          xtype: "textfield",
          labelAlign: "top",
          listeners: {
            render: function (el) {
              new Ext.dd.DropZone(el.getEl(), {
                ddGroup: "element",
                getTargetFromEvent: function (e) {
                  return this.getEl();
                }.bind(el),

                onNodeOver: function (target, dd, e, data) {
                  return Ext.dd.DropZone.prototype.dropAllowed;
                },

                onNodeDrop: function (target, dd, e, data) {
                  data = data.records[0].data;
                  if (data.elementType == "asset") {
                    this.setValue(data.id);
                    return true;
                  }
                  return false;
                }.bind(el),
              });
            },
          },
        },
      ]);

      this.specificPanel.items.items[3].items.items[1].add([
        {
          fieldLabel: t("relationselectfieldsbundle_relationselect_folder"),
          name: "objectFolder",
          fieldCls: "input_drop_target",
          value: this.datax.objectFolder,
          width: 500,
          xtype: "textfield",
          labelAlign: "top",
          listeners: {
            render: function (el) {
              new Ext.dd.DropZone(el.getEl(), {
                ddGroup: "element",
                getTargetFromEvent: function (e) {
                  return this.getEl();
                }.bind(el),

                onNodeOver: function (target, dd, e, data) {
                  return Ext.dd.DropZone.prototype.dropAllowed;
                },

                onNodeDrop: function (target, dd, e, data) {
                  data = data.records[0].data;
                  if (data.elementType == "object") {
                    this.setValue(data.id);
                    return true;
                  }
                  return false;
                }.bind(el),
              });
            },
          },
        },
        {
          xtype: "textfield",
          fieldLabel: t("relationselectfieldsbundle_relationselect_fieldname"),
          name: "displayFieldName",
          labelAlign: "top",
          value: this.datax.displayFieldName,
        },
      ]);

      return this.layout;
    },

    isValid: function ($super) {
      return $super();
    },

    applySpecialData: function (source) {
      if (source.datax) {
        if (!this.datax) {
          this.datax = {};
        }
        Ext.apply(this.datax, {
          objectFolder: source.datax.objectFolder,
          assetFolder: source.datax.assetFolder,
          documentFolder: source.datax.documentFolder,
          displayFieldName: source.datax.displayFieldName,
          recursive: source.datax.recursive,
        });
      }
    },
  },
);
