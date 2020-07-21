How to use this Monorepo?
===

### Project initialization

run the following from the project root:
```
npm run init
```
this will run the ``init`` script in each package, initializing the entire project

### Adding packages or new dependencies

after you do any of the following:
 - create a new package eg. ``packages/some-new-package``
 - install a new dependency eg. ``cd packages/some-new-package && npm i -S ramda``
 - add a sibling package as a dependency eg. (you edit ``packages/some-new-package/pacakge.json`` and add ``@react-playground/react-app`` as a dependency 
you need to run the following from the project root:
```
npm run bootstrap
```
this will run install all package dependencies and link sibling packages

### Using packages in other packages

to use a package in another simply:
 1. add it as an npm dependency:
    eg.
    edit
    ```
    `packages/some-new-package/pacakge.json
    ```
    and add like this:
    ```
    {
     ...
     "dependencies": {
       ``@react-playground/react-app``,
    ```
 2. then run the following from the project root:
    ```
    npm run bootstrap
    ```

### publishing a new version

TODO: document

### continuous integration

TODO: document
