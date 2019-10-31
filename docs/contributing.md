React Playground :: Contributing
===

Master branch is reserved for ideal skeleton project, so to contribute new features to the ideal skeleton project, submit a pull request to master branch.

Alternatively you can create a new feature or implement some additional tech on a separate branch.

You can also add yourself as a code owner to any branches you create, add protection to it, and then invite others to contribute to it.

Naming conventions
---

### GIT Branch Names

seperate features/technologies being implemented by double underscore and words by dash eg.
```
redux
redux__epics
redux__epics__jwt-login
redux__sagas
redux__sagas__jwt-login
```
so in the example branches above we have:
 - ``redux`` which would contain the ideal skeleton project files for any React Redux implementation
 - ``redux__epics`` again an ideal skeleton but specifically for implementing epics with React Redux, but still only containing setup and workflow etc, no actual epics
 - ``redux__epics__jwt-login`` here we build on the previous branch to actually include some epics, specifically examples/strategies relating to JWT login 
 - and then we have the same as above but with sagas instead of epics

Documentation
---

Add any documentation relevant to your branch to:
 - the root README (remember to keep this to a minimum)
 - any existing files in the ``docs`` directory

And add new files to ``docs`` directory as needed.