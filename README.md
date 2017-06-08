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
     *
      *
      ```java
        git clone --recursive git://github.com/isaacs/npm.git 
        cd npm 
        node cli.js install npm -gf 
      ```
      
      * After this, run:
      ```java
         npm install underscore
      ```
      * You can get result like below:
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
            --fonts
            --images
        -js
            --libs
                ---jquery
                ---myRequest.js # All ajax request APIs are defined in this module.
            --viewModels
                ---issues.js    # Mian controller for special path #issues
            --views
                ---issues.html  # Main view for special path #issuses
            --appController.js  # Controller for index.html
            --login.js          # Controller for login.html
            --main.js           # Apply module bindings for index.html, this 
        -locales
        -index.html
        -login.html
 ```
