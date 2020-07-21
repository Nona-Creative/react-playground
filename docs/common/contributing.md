Contributing
===

Naming conventions
---

### GIT Branch Names

Follow the guidelines outlined in [branches](branches.md)


Pull Requests & Merging
---

 1. Branch your task branch from any existing branch
 2. Once your work is done, create a Pull Request onto that branch
 3. Create a Pull Request, this will automatically request reviews from all code owners on your target branch 
 4. Once approved, squash merge into the target branch


GIT Commit Messages
---

We are using [semantic commit messages](https://seesparkbox.com/foundry/semantic_commit_messages).

Additionally we will include the context (package/feature module name) when only changes were made to it eg.
```
"feat(books-api): return list of users"
```
```
"style(books-web-ui): change all blue colors to red"
```
```
"refactor(books-api): make something better"
```

> NOTE: chore refers to infrastructure, CI, scripts etc, so will never relate to a feature module, so you should never do ``"chore(some-module): some chore"``


Contribution Options
---

1. just push your code as any branch not named iso__*, int__* or feat__*, and ask a maintainer to get it in

2. create or ask a maintainer to create a iso__*, int__* or feat__ branch and PR onto it

 2.1 ask maintainer to complete it

 2.2 back and forth until it can go in
