# TypeScript

- [Project](http://www.typescriptlang.org/)
- [Language Spec](http://www.typescriptlang.org/Content/TypeScript%20Language%20Specification.pdf)

## Structure
    
    /bootstraps
    /projects/common
    /projects/tablet

## How to install a external JavaScript Lib

There are several steps necessary to install a external JS lib. Here we use as an example the lib `minilog`.

    ## install lib with bower
    ## before: change dir to js src
    $ cd static/src/javascripts
    $ bower install minilog --save-dev
    
    ## (optional -- only if TypeScript definition exists) 
    ## search for TypeScript definition: https://github.com/borisyankov/DefinitelyTyped
    ## install TypeScript definition
    ## before: change dir to project root
    ## install the typescript definition manager (if not already happened):
    $ npm install tsd@next -g
    ## install the definition file
    $ tsd query minilog --action install --save
    
    ## (optional -- only with TypeScript definition)
    ## add minilog.d.ts to static/src/typescript/definitions.d.ts
    
    ## config requirejs path
    ## add minilog path to: grunt/requirejs.js
    ## add minilog path to: static/test/typescript/main.js
    
    ## ready to work! :D
