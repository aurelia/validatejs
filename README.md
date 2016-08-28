# aurelia-validatejs

[![npm Version](https://img.shields.io/npm/v/aurelia-validatejs.svg)](https://www.npmjs.com/package/aurelia-validatejs)
[![ZenHub](https://raw.githubusercontent.com/ZenHubIO/support/master/zenhub-badge.png)](https://zenhub.io)
[![Join the chat at https://gitter.im/aurelia/discuss](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/aurelia/discuss?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![CircleCI](https://circleci.com/gh/aurelia/validatejs.svg?style=shield)](https://circleci.com/gh/aurelia/validatejs)

# *** DEPRECATED ***

This library has been deprecated. The [aurelia-validation](https://github.com/aurelia/validation) library now contains all the components necessary for validation out-of-the-box.

# *** WARNING ***

>The docs below are for an earlier version of this package.  The `validation` and `validatejs` plugins are undergoing an overhaul and are currently in alpha. **Expect Changes**.  The best docs we have for the alpha at this time are here:   http://blog.durandal.io/2016/06/14/new-validation-alpha-is-here/

# OLD DOCS:

## TypeScript Users

At the moment, [validate.js](https://validatejs.org/) doesn't have an official d.ts file. We've created one for you while we wait. You can find our d.ts file at `lib/validatejs.d.ts`.

## Validation Rules

Validation is performed using [validate.js](https://validatejs.org/).  You can visit their official site to get more information about how to use all of the validation rules.

You can use a decorator or the fluent syntax, both are shown. Here are the base rules -

### Date

[Ensure it is a date](https://validatejs.org/#validators-date)

```es6
export class Model {
  @date myDate = new Date();
}

export class Model {
  constructor() {
    this.validator = new Validator(this)
      .ensure('myDate')
        .date();
  }
}
```

### Datetime

[Ensure it is a datetime](https://validatejs.org/#validators-datetime)

```es6
export class Model {
  @datetime myDate = new Date();
}

export class Model {
  constructor() {
    this.validator = new Validator(this)
      .ensure('myDate')
        .datetime();
  }
}
```

### Email

[Ensure it is a valid e-mail format](https://validatejs.org/#validators-email)

```es6
export class Model {
  @email email = 'patrick@example.com';
}

export class Model {
  constructor() {
    this.validator = new Validator(this)
      .ensure('email')
        .email();
  }
}
```

### Equality

[Ensure it matches another property on the same object](https://validatejs.org/#validators-equality)

```es6
export class Model {
  @equality('password') confirmPassword = 'password1';
}

export class Model {
  constructor() {
    this.validator = new Validator(this)
      .ensure('confirmPassword')
        .equality('password');
  }
}
```

### Exclusion

[Disallow a set of values](https://validatejs.org/#validators-exclusion)

```es6
export class Model {
  @exclusion(['blue']) color = 'red';
}

export class Model {
  constructor() {
    this.validator = new Validator(this)
      .ensure('color')
        .exclusion(['blue']);
  }
}
```

### Format

[Ensure it matches a regex](https://validatejs.org/#validators-format)

```es6
export class Model {
  @format(/\d{5}(-\d{4})?/) zipCode = '90210';
}

export class Model {
  constructor() {
    this.validator = new Validator(this)
      .ensure('zipCode')
        .format(/\d{5}(-\d{4})?/);
  }
}
```

### Inclusion

[Ensure it is included a set of values](https://validatejs.org/#validators-inclusion)

```es6
export class Model {
  @inclusion(['blue', 'red']) blueOrRed = 'yellow';
}

export class Model {
  constructor() {
    this.validator = new Validator(this)
      .ensure('blueOrRed')
        .format(['blue', 'red']);
  }
}
```

### Length

[Ensure it is a certain length](https://validatejs.org/#validators-length)

```es6
export class Model {
  @length({ minimum: 5, maximum: 25 }) password = 'equal';
}

export class Model {
  constructor() {
    this.validator = new Validator(this)
      .ensure('password')
        .length({ minimum: 5, maximum: 25 });
  }
}
```

### Numericality

[Ensure it is a number (additional validation available, check validate.js documentation for more options)](https://validatejs.org/#validators-numericality)

```es6
export class Model {
  @numericality({ onlyInteger: true, lessThan: 115, greaterThan: 0 }) age = 25;
}

export class Model {
  constructor() {
    this.validator = new Validator(this)
      .ensure('age')
        .length({ onlyInteger: true, lessThan: 115, greaterThan: 0 });
  }
}
```

### Presence / Required

[Ensure it is set](https://validatejs.org/#validators-presence)

```es6
export class Model {
  @presence lastName = 'Skywalker';
  @required lastName = 'Skywalker';
}

export class Model {
  constructor() {
    this.validator = new Validator(this)
      .ensure('firstName')
        .required();
  }
}
```

### URL

[Ensure it is a valid URL](https://validatejs.org/#validators-url)

```es6
export class Model {
  @url website = 'http://www.google.com';
}

export class Model {
  constructor() {
    this.validator = new Validator(this)
      .ensure('website')
        .url();
  }
}
```

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```

## Running the Sample App

There is a sample application provided that runs using the plugin itself.  To run this application -

1. Change to the sample directory

  ```shell
  cd sample
  ```
2. Install all of the sample application's dev dependencies:

  ```shell
  npm install
  ```
3. Install all of the sample application's client-side dependencies with jspm:

  ```shell
  jspm install
  ```
4. Do an initial build of the sample app files:

  ```shell
  gulp build-sample
  ```
5. You can now run sample application:

  ```shell
  gulp watch
  ```

It will watch for changes to both `src` and `sample/src` and reload the browser on change.
