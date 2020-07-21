Why is this Playground a Monorepo?
===

### Isolating the React app

Separate packages is the only way to keep the React app (being demonstrated)
minimal and completely isolated from playground specific documentation, scripts and dependencies.

### Custom external services and libs

A monorepo also allows us to implement APIs, SDKs and custom external libraries 
for the React app (being demonstrated) to interact with, that are near but not part
of the React app's codebase.

### Custom external React packages & components

It also allows us to split the React app into multiple packages (if needed), 
and demonstrate things like using custom external React packages, 
lazy loading external React components etc.

### Single/local commands/docs for everything

Lastly it allows us to spin up the React app with all required external services 
with a single command, or at the very least local, and locally documented commands.
