Branches
===

> This repository follows a branch naming convention detailed in [git-compose](https://github.com/neilrussell6/git-compose)

We have 3 types of branches:
 - Isolation Branches
 - Integration Branches
 - Feature Branches

### Special branches

An **Isolation Branch** is a single technology in isolation, prefixed with ``iso__``.
[read more ...](https://github.com/neilrussell6/git-compose/blob/master/docs/branches-isolation.md)

An **Integration Branch** is an Integration between multiple technologies (ie. composed branches), prefixed with ``int__``.
[read more ...](https://github.com/neilrussell6/git-compose/blob/master/docs/branches-integration.md)

A **Feature Branch** is one or more Isolation and/or Integration Branches composed to create a foundation upon which a feature is built, prefixed with ``feat__``.
[read more ...](https://github.com/neilrussell6/git-compose/blob/master/docs/branches-feature.md)

### Other branches

All **Other Branches** can be named whatever you want so long as they do not start with iso__, int__ or feat__ they will not be touched, by the commands below.
This includes PR branches used to get code into "Special Branches".


Auto Merging
---

NOTE: **git-compose** is used to keep all Special branches up to date,
so expect parent branches to be consistently merged into child branches, 
read more about this [here](https://github.com/neilrussell6/git-compose/blob/master/docs/commands-cascade-merge.md).


Creating an Integration Branch
---

You can use **git-compose** to create an Integration Branch eg.
```
npx git-compose build_integration_branch <integration branch name>
```
read more about this [here](https://github.com/neilrussell6/git-compose/blob/master/docs/commands-build-integration-branch.md)


Displaying Branch Hierarchy
---

You can print out the Branch Hierarchy for the whole project using **git-compose** eg.
```
npx git-compose print_heirarchy
```
