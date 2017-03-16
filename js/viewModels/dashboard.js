/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your about ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojTree','ojs/ojlegend','ojs/ojchart',,'ojs/ojknockout', 'ojs/ojcheckboxset', 'ojs/ojbutton', 'ojs/ojtoolbar', 'ojs/ojmenu'],
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
                          // Attribute Groups Handler for Consistent Coloring
                    var attrGroups = new oj.ColorAttributeGroupHandler();

                    // Categories
                    var categories = ["Initial", "Qualification", "Meeting", "Proposal", "Close"];
                    var hiddenCategories = [categories[0]];
                    self.hiddenCategoriesValue = ko.observableArray(hiddenCategories);

                    // Chart Data
                    var categoricalSeries = [{items: []}];
                    var categoricalSeriesItems = categoricalSeries[0].items;
                    categoricalSeriesItems.push({value: 42, color: attrGroups.getValue(categories[0]), categories: [categories[0]]});
                    categoricalSeriesItems.push({value: 55, color: attrGroups.getValue(categories[1]), categories: [categories[1]]});
                    categoricalSeriesItems.push({value: 36, color: attrGroups.getValue(categories[2]), categories: [categories[2]]});
                    categoricalSeriesItems.push({value: 15, color: attrGroups.getValue(categories[3]), categories: [categories[3]]});
                    categoricalSeriesItems.push({value: 12, color: attrGroups.getValue(categories[4]), categories: [categories[4]]});

                    var timeSeries = [{name: categories[0], items: [74, 62, 70, 76, 66]},
                        {name: categories[1], items: [50, 38, 46, 54, 42]},
                        {name: categories[2], items: [34, 22, 30, 32, 26]},
                        {name: categories[3], items: [18, 6, 14, 22, 10]},
                        {name: categories[4], items: [3, 2, 3, 3, 2]}];

                    var pieSeries = [{name: categories[0], items: [42]},
                        {name: categories[1], items: [55]},
                        {name: categories[2], items: [36]},
                        {name: categories[3], items: [10]},
                        {name: categories[4], items: [5]}];

                    var bubbleSeries = [{name: categories[0], items: [{x: 15, y: 25, z: 5}, {x: 25, y: 30, z: 12}]},
                        {name: categories[1], items: [{x: 15, y: 15, z: 8}, {x: 20, y: 35, z: 14}]},
                        {name: categories[2], items: [{x: 10, y: 10, z: 8}, {x: 18, y: 55, z: 10}]},
                        {name: categories[3], items: [{x: 8, y: 20, z: 6}, {x: 11, y: 30, z: 8}]},
                        {name: categories[4], items: [{x: 25, y: 45, z: 12}, {x: 40, y: 55, z: 35}]}];

                    var timeGroups = [1980, 1990, 2000, 2010, 2020];

                    self.categoricalSeriesValue = ko.observableArray(categoricalSeries);
                    self.categoricalGroupsValue = ko.observableArray(categories);
        self.timeSeriesValue = ko.observableArray(timeSeries);
        self.timeGroupsValue = ko.observableArray(timeGroups);
        self.pieSeriesValue = ko.observableArray(pieSeries);
        self.bubbleSeriesValue = ko.observableArray(bubbleSeries);
       
        // Legend Data
        var legendSections = [{items : []}]; 
        var legendItems = legendSections[0].items;
        for(var categoryIndex = 0; categoryIndex < categories.length; categoryIndex++) {
          var category = categories[categoryIndex];
          legendItems.push({text : category, color : attrGroups.getValue(category), shortDesc: "Filter: " + category});
        }
       
        self.legendSections = ko.observableArray(legendSections);
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
