/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource',
  'ojs/ojoffcanvas','jquery.cookie'],
  function(oj, ko) {
     function ControllerViewModel() {
       var self = this;

      // Media queries for repsonsive layouts
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
      var mdQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.MD_UP);
      self.mdScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(mdQuery);

       // Router setup
       self.router = oj.Router.rootInstance;
       self.router.configure({
         'test_plan': {label: 'Test Plan', isDefault: true},
         'requirements': {label: 'Requirements'},
         'tests': {label: 'Tests'},
         'test_execution': {label: 'Test Execution'},
         'issues': {label: 'Issues'},
         'reports': {label: 'Reports'},
         'dashboard': {label: 'Dashboard'}
       });
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

      // Navigation setup
      var navData = [
      {name: 'Test Plan', id: 'test_plan',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 test-plan-icon-24'},
      {name: 'Requirements', id: 'requirements',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 requirements-icon-24'},
      {name: 'Tests', id: 'tests',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 tests-icon-24'},
      {name: 'Test Execution', id: 'test_execution',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 tests-execution-icon-24'},
       {name: 'Issues', id: 'issues',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 issues-icon-24'},
       {name: 'Reports', id: 'reports',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 reports-icon-24'},
       {name: 'Dashboard', id: 'dashboard',
       iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 dashboard-icon-24'}
      ];
      self.navDataSource = new oj.ArrayTableDataSource(navData, {idAttribute: 'id'});

      // Drawer
      // Called by nav drawer option change events so we can close drawer after selection
      self.navChangeHandler = function (event, data) {
       if (data.option === 'selection' && data.value !== self.router.stateId()) {
         self.toggleDrawer();
       }
      }
      // Close offcanvas on medium and larger screens
      self.mdScreen.subscribe(function() {oj.OffcanvasUtils.close(self.drawerParams);});
      self.drawerParams = {
        displayMode: 'push',
        selector: '#navDrawer',
        content: '#pageContent'
      };
      // Called by navigation drawer toggle button and after selection of nav drawer item
      self.toggleDrawer = function() {
        return oj.OffcanvasUtils.toggle(self.drawerParams);
      }

      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("OTM");
      // User Info used in Global Navigation area
      self.userLogin = ko.observable($.cookie("userLogin")||'none...');
      self.database = ko.observable($.cookie("database")||'none...');
      self.project = ko.observable($.cookie("project")||'none...');
     
     }

     return new ControllerViewModel();
  }
);
