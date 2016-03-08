## Ionic 2 + Angular 2 + Typescript + Karma-Jasmine + Travis Seed project
This project is a seed project that is referring to this project: https://github.com/lathonez/clicker.
It covers how to write an app using the framework Ionic2 which is based on Angular2. The language use in this project is typescript and unit tests are written using Karma-Jasmine. The deployment is done using Travis.

# Requirements
1. nodejs
2. travis

# How to start

**Note** that this project requires node v4.x.x or higher and npm 2.14.7.

```bash
git clone https://github.com/lathonez/clicker.git
cd clicker
npm install       # or `npm run reinstall` if you get an error
npm test          # run unit tests
npm start         # start the application
```

## TODO:
* ~~tslint / eshint~~
* ~~travis~~
* ~~convert clickers to use map? - doesn't make sense as we need to persist it anyway and you can't JSON.stringify a map~~
* ~~full test coverage~~
* finish README (better description, ~~install from scratch~~)
* ~~licence~~
