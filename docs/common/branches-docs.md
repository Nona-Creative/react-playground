Branch Specific Docs
===


"master" branch
---

the "master" branch is ``iso__base``, this repo has no ``master`` or ``develop`` branches.
this is for clarity about what ``iso__base`` is, ie. the base branch for all ``iso`` branches


Generate template
---

To generate a template file for the current branch run:
```bash
npm run docs:gen
```
this will create a template file in the docs directory for the current branch, eg.
```
+-- docs
    +-- iso__base.tpl.md
```


Populating the template
---

You can populate the generated template file with regular markdown.

You can also reference and query code snippets in the generated template file
eg.
```markdown
{lang=javascript}  
<<[](../src/index.js)`;
```
Will include the entire index file at that point in the markdown.

```markdown
{lang=javascript,crop-query=.sayHello}  
<<[](../src/common/utils.js)`;
```
Will include only the ``sayHello`` variable from the utils file.

Check out [remark-cq](https://github.com/fullstackio/cq/tree/master/packages/remark-cq) for more details.


Render markdown
---

To render markdown from the template file run:
```bash
npm run docs:render
```
This will happen automatically on commit and push.
