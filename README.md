# UnproductiveChatClient

Unproductive Chat is a chat client thats made to simply distract you from being productive.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Prerequisites

Make sure you have the following:
* [Angular CLI](https://github.com/angular/angular-cli)
* [Pusher Account](https://pusher.com/signup)
* [UnproductiveChatServer](https://github.com/xTrebliG/unproductive-chat-server)

Be sure to add your Pusher App ID, Key and Secret to api.js:
```
// ..routes/api.js

const pusher = new Pusher({
    appId: 'ADD_APP_ID_HER'E,
    key: 'ADD_KEY_HERE',
    secret: 'ADD_SECRET_HERE'
});
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
