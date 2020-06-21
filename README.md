React Playground
===

> A minimal React project for experimenting and refining templates / deployment pipelines


Quick Start
---

 1. go through everything in [Prerequisites](docs/common/prerequisites.md)
 2. ``npm run init`` initialize the project (creates local env files and install dependencies)
 3. ``npm run start`` start react app in your browser


Available commands
--- 

to see a list of available commands run:
```bash
npm run help
```


Special Branches
---

to checkout all remote special branches run:
```bash
npm run branches:checkout
```

to then list all special branches locally run:
```bash
npm run branches:ls
```

what are special branches? read all about how this project's branches work in [Branches](docs/common/branches.md)


Monorepo
---

> this playground is a monorepo, that uses Lerna

 - [Why is this playground a Monorepo?](docs/common/monorepo-why.md)
 - [How to use this Monorepo?](docs/common/monorepo-how.md)


Contributing
---

Before contributing please read through everything in [Contributing](docs/common/contributing.md)

Then pick something from [TODO](./TODO.md), do it, create a PR onto this branch.

If you have any ideas, but want someone else to implement, update [TODO](./TODO.md) and create PR onto this branch.


Testing
---

run all unit tests (optionally in watch mode):
```bash
npm run test
npm run test:watch
```


Additional Docs
---

 1. [Contributing](docs/common/contributing.md)
 2. [Branches](docs/common/branches.md)
 3. [ENVs](docs/common/envs.md)
 4. [Prerequisites](docs/common/prerequisites.md)
 5. [AWS](docs/common/aws.md)
 6. [Node Version](docs/common/node-version.md)
 7. [Branch Specific Docs](docs/common/branches-docs.md)
