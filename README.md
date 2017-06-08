##Oracle OTM UI @JET

### 1. [Build and run project by NodeJS](http://www.oracle.com/webfolder/technetwork/jet/globalGetStarted.html)
 
 * Set up
  * Install NodeJS 
    * Download site: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
    * Install package
    * Once you install NodeJS successfully, type "node -v", follow result should show in commond tool:
    ```java
        v6.10.0
    ```
  * Install npm
    * The latest version NodeJS includes npm
    * Type "npm -v", follow information can be seen in command tool:
    ```java
        3.10.10
    ```
    * If your NodeJS does not integrate with npm, please try follow steps:
      * 1. install npm
        ```java
            git clone --recursive git://github.com/isaacs/npm.git 
            cd npm 
            node cli.js install npm -gf 
        ```
      * 2. After this, install underscore:
        ```java
            npm install underscore
        ```
      * 3. You can get result like below:
        ```java
            underscore@3.10.10 ./node_modules/underscore 
        ```
  * Setup JET enviroment
    * Using npm, run the following commands:
    ```java
        npm -g install yo grunt-cli
        npm -g install generator-oraclejet
    ```
  * Create JET project template
    * After installing the Oracle JET Yeoman generator, you can create a new project with:
    ```java
        yo oraclejet <project name> --template=navdrawer
    ```
  * Change src folder under template
    * Download src folder 
    ```java
        git clone --recursive git@github.com:screen-tiger/jetotm.git
    ```
    * Replace src folder under template with the one fetched.
  * Run JET UI project
    * Once your project has been created, you can serve it by running:
    ```java
        cd <project name>
        grunt build
        grunt serve
    ```

### 2. Basic skill
 
 * [Knockout.js](http://learn.knockoutjs.com)
  * JET use Knockout.js to bind data. Learn the tutorial.
  * For chinese version tutorial, browse [Knockout应用开发指](http://www.cnblogs.com/TomXu/archive/2011/11/21/2257154.html)
 * [Require.js](http://requirejs.org/)
  * JET use requirejs as module loader.
  * For chinese version turorial, check [require.js中文网](http://www.requirejs.cn/) for more detail
 * [Jquery.js](http://jquery.com/)
 * [bower](https://bower.io/)
  * Package manager for JET
  * Use command to download js file
  ```java
        bower install <js-package>
   ```
 * [Oracle JET](http://www.oracle.com/technetwork/developer-tools/jet/overview/index.html)
  * Learn [tutorial](http://docs.oracle.com/middleware/jet310/jet/index.html), and make sure you understand requirejs and knockoutjs before you get started on this.
  * Check [cockbook](http://www.oracle.com/webfolder/technetwork/jet/jetCookbook.html) for more details about kind of components.
  * Check more API with [JSDoc](http://www.oracle.com/webfolder/technetwork/jet/jsdocs/index.html).

### 3. Project introduction
 * Source folder's architecture
 ```
    src
        -css
            --fonts             # fonts file, include in css files, and is important for font-style icons.
            --images            # images used in css and html files
        -js
            --libs
                ---jquery
                ---myRequest.js # All ajax request APIs are defined in this module.
            --viewModels
                ---issues.js    # Mian controller for special path #issues
            --views
                ---issues.html  # Main view for special path #issuses
            --resources         # language files for i18
                ---nls
                    ----menu.js # default language
                    ----zh      # language files for chinese
                        -----menu.js    #this file is response for default language file
            --appController.js  # Controller for index.html
            --login.js          # Controller for login.html
            --main.js           # Apply module bindings for index.html, this file need to be included in html files and is the entry for whole JET module
        -index.html
        -login.html
 ```
* Control flow
    * Open "index.html"
    ```java
        <script type="text/javascript" src="js/libs/require/require.js"/>
        <script type="text/javascript" src="js/main.js"/>
    ```
    Line 1 include the library file to requirejs.   
    Line 2 include the JET entry for index page.
    * main.js is divided into two part
      * The first part configs requirejs for js dependency. And notice that you can include i18n resource files in ojL10n option.
      * The second one bids app(Jet controller)  to globalBody, and bid treeMenu module to treeMenu (You can write specific modules to different subpage)
    * appController.js
      * This file return app module used in main.js and points out modules bidding to router menu
      * It checks 'user' in cookie for permission
      * It defines translate function for i18n
    * issues.js
      * The module controls path  '#issues', mode detials can be viewed with codes
* Request detial
    * myRequest.js    
    All request must be sent by APIs defined in this file.    
    Because permission is controlled using token, 401 status trigger a reAuth action which send a request to refresh token state
* I18n    
  Default language files can be found in nls folder. And each of them should have architecture as below:
  ```javascript
    define({'root':{
        key:value,
        ...
    },
    "languageName":boolean, # if true, file with same name should be found in the language folder
    ...
    });
  ```
  Specific language files should have architecture like this:
  ```javascript
    define({'root':{
        key:value,
        ...
    }
    });
  ```
* Front-end    
  All front-end is responsive. And Main struture is like below:
  ```
    <html>
        <head></head>
        <body>
            <main-body>
                <!--buttons for navigation-->
                <navigation-bar></navigation-bar> 
                
                <!--banner for database/user/.. information-->
                <banner></banner>
                
                <!--main view frame and show the subpath html file-->
                <main-view></main-view>
            </main-body>
        <body>
    </html>
  ```
  * Responsive
  Respoe
