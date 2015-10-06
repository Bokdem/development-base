# DEVELOPMENT BASE
**Setup for front-end webdevelopment. This includes JADE & SASS compiling. Creates a localhost:8000 and more. _Just clone the project and run Gulp._**

* 'httpdocs/' is filled with output
* 'project/' is the working area


##Clone the project
To clone the prject to your local folder, type in your terminal:

`git clone https://github.com/Bokdem/angular-js.git`

The project will now be cloned to the folder you selected in the terminal. To change the drectory root, type `cd go/to/this/folder`


##Start the building
To activate Gulp to build the project, type in your terminal:

`Gulp`

This is the default option Gulp is set to. Gulp will automatically;
* Build the project
  * _styles (compile SASS + merge + minify)_
  * _scripts (merge + minify)_
  * _templates (compile JADE + merge)_
* Serve a localhost
  * _activate BrowserSync_
  * _localhost at port:8000_
* Watch the project
  * _compile SASS on file save_
  * _compile JADE on file save_


~~For now, this is about it! Maybe some music? ;D~~

<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank"><img src="http://i.imgur.com/QPWf4un.png" alt="amazing!" width="100%" /></a>
