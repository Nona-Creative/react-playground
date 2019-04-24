React Playground
===

> A minimal React project for experimenting and refining ideas / solutions

Master branch
---

Master branch is reserved for ideal skeleton project

So keep large additions and experiments on separate descriptively named branches

Initial setup
---

run the following command to initialize project:
```bash
npm run init
```

Available commands
--- 

to see a list of available commands run:
```bash
npm run help
```

to see a list of available Make commands run:
```bash
make
```

Local development
---

start serverless locally:
```bash
npm run start
```

Testing
---

run all unit tests
```bash
npm run test
```

Cypress Integration tests
---

clear previous cypress versions on machine
```bash
npm cypress:clear-cache
```
install cypress
```bash
npm cypress:install
```

open and run cypress tests
```bash
npm cypress:open
```

After running `npm cypress:open` for the first time cypress will automatically create some example tests.
Because of this have added the `/cypress` folder to the `.gitignore` file. If you would like to update any of the tests manually you can remove it from the `.gitignore`.

The automatically created files seem to cover most of the functionality of the library in a helpful way.

Contributing
---

To contribute new features to the ideal skeleton project, submit a pull request to master branch.
