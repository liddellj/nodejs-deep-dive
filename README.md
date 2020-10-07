# Node JS Deep Dive

This repository provides various examples that introduce the capabilities of JavaScript via Node JS. It is not exhaustive - but is intended to act as a decent introduction to those unfamiliar with Node or JavaScript.

The notes are primarily intended to act as a reminder to me in explaining things to other developers. They are therefore brief and provide little context.

## History of JavaScript and Node JS

- Originally written by Brendan Eich in 1995, in 10 days
- He was working for Netscape at the time
- Java is to Javascript as ham is to hamster
- Originally used to provide dynamic behaviour to web pages
- NodeJS introduced in 2009 running on Google's V8 Javascript engine (only supported Linux/OSX)
- npm was introduced in 2010
- 2011 - Windows support

Popularity according to:
- GitHub [1st](https://madnight.github.io/githut/) (based on public GitHub activity)
- TIOBE Index [7th](https://www.tiobe.com/tiobe-index/) (based on search results)
- PYPL Index [3rd](http://pypl.github.io/PYPL.html) (how often language tutorials are Googled)

Why do we use it?
- Fast startup time (but not as fast as Python) [https://theburningmonk.com/2017/06/aws-lambda-compare-coldstart-time-with-different-languages-memory-and-code-sizes/]
- Skill availability

  single-threaded
  uses an event-loop (just like browser javascript)

## CLI

Version:
```sh
node --version
```

Running a script:
```sh
node index.js
```

Inline evaluation:
```sh
node -e "console.log('hello');"
```

REPL (Read-Eval-Print-Loop):
```sh
node
> console.log('hello world')
> process.exit()
```

You can also run shell scripts through Node by starting the script with:

```
#! /usr/local/bin/node
```

You can use npx to immediately run a package without installing it:
```sh
npx create-react-app my-react-app
```

## Contents
The rest of this repository is broken down into executable files that contain examples of different JavaScript syntax.

- [Variables](variables.js)
- [Functions](functions.js)
- [Classes](classes.js)
- [Object](object.js)
- [this](this.js)
- [Async/Await](async.js)
- [Destruct](destruct.js)
- [Spread](spread.js)
- [String Templates](string-templates.js)
- [Rest](rest.js)
- [Computed Property Names](computed-property-name.js)
- [Environment Variables](env-vars.js)