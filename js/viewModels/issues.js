/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojTree','ojs/ojknockout', 'ojs/ojcheckboxset', 'ojs/ojbutton', 'ojs/ojtoolbar', 'ojs/ojmenu'],
 function(oj, ko, $) {
    function TestPlanViewModel() {
      var self = this;
      self.handleActivated = function(info) {
      };
      self.handleAttached = function(info) {
        // Implement if needed
      };
      self.handleBindingsApplied = function(info) {
        // Implement if needed
      };

      self.handleDetached = function(info) {
        // Implement if needed
      };

      //selected node
      self.selectedNode = ko.observable('None');

      self.getJson = getJson;

      self.toolbarClassNames = ko.observableArray([]);

      self.toolbarClasses = ko.computed(function() {
            return self.toolbarClassNames().join(" ");
      }, self);

      self.setNode = function(id)
      {
        self.nodeId = id ;
      };

      self.setActiveNode = function(event, ui)
      {
        self.setNode(ui.item[0].id) ;
      }

      $(document).ready(
        function()
        {
          $("#tree").on("ojoptionchange", function(e, ui) {
                 if (ui.option == "selection") {
                   // show selected nodes
                   var selected = _arrayToStr(ui.value) ;
                   self.selectedNode(selected);
                 }
          });
          $("#menuId").on('click', function() {
            console.log(self.selectedNode(),$("#menuId").val());
          });
        }
      );
    }
    
    

   function  getJson(node, fn)       // get data json
    {
      $.get("../../data/tree.json",function(ret){
              fn(ret["data"]);
            });
        // pass to ojTree using supplied function
    };

    // Convert a jQuery list of html element nodes to string containing node id's.
    function _arrayToStr(arr)
    {
       var s = "" ;
       $.each(arr, function(i, val)
          {
            if (i) {
              s += ", " ;
            }
            s += $(arr[i]).attr("id") ;
          }) ;

       return s ;
    };
    return new TestPlanViewModel();
  }
);
