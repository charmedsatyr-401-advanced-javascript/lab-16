![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Lab 16: Event Driven Applications

### Author: Joseph Wolfe

### Links and Resources
* [repo](https://github.com/charmedsatyr-401-advanced-javascript/lab-16)
* [![Build Status](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-16.svg?branch=submission)](https://travis-ci.org/charmedsatyr-401-advanced-javascript/lab-16)

#### Documentation
* [jsdoc](./docs/)

### Modules
`./index.js`

`./src/app.js`

`./src/events.js`

`./src/logger.js`

`./src/lib/read.js`

`./src/lib/uppercase.js`

`./src/lib/write.js`

-----

#### `./index.js`
##### Exported Values and Methods
This is the entry point of the application that accepts the application's command line arguments.

-----

#### `.src/app.js`
##### Exported Values and Methods
* `alterFile(file)` -> `undefined`
* This function takes a filepath and uses the helper functions `read`, `uppercase`, and `write` to capitalize the letters in the file. It emits appropriate events in its `try/catch` block.

-----

#### `./src/events.js`
##### Exported Values and Methods
* This module instantiates an events listener.

-----

#### `./src/logger.js`
##### Exported Values and Methods
This module provides event listeners and handling functions that log to the console.
* `handleRead(payload)` -> log
* `handleWrite(payload)` -> log
* `handleAlter(payload)` -> log
* `handleUppercase()` -> log
* `handleError(payload)` -> log

-----

#### `./src/lib/read.js`
##### Exported Values and Methods
This module reads a file and returns a Promise. It emits events as appropriate.
* `read(file)` -> `Promise` -> `buffer`

-----

#### `./src/lib/uppercase.js`
##### Exported Values and Methods
* `uppercase(data)` -> modified `data`
This module takes a readable buffer or other input, converts it to a string, and capitalizes its letters. It emits events as appropriate.

-----

#### `./src/lib/write.js`
##### Exported Values and Methods
* `write(file, text)` -> `Promise` -> side effect
This module reads a file and returns a Promise. It writes a `file` with the given `text` as a side effect. It emits events as appropriate.

-----

### Setup
#### `.env` 
* N/A

#### Running the app
* `node index.js <fileName>`, where `<fileName>` is the path to a readable file. 

#### Tests
* How do you run tests?
  * `npm run test`
  * `npm run test-watch`
  * `npm run lint`
* What assertions were made?
  * `alterFile` function

    ✓ should call emit an event
  
    ✓ should call the `read` function on a `file` argument
  
    ✓ should call the `uppercase` function
  
    ✓ should call the `write` function
  
  * `handleRead` function
  
    ✓ should log to the console
  * `handleUppercase` function
  
    ✓ should log to the console
  * `handleWrite` function
  
    ✓ should log to the console
  * `handleAlter` function
  
    ✓ should log to the console
  * `handleAlter` function
  
    ✓ should log to the console
  * `read` function
  
    ✓ should cause an event to be emitted
  
    ✓ resolves when given a good file
  
    ✓ throws an error when given a bad file
  * `uppercase` function
  
    ✓ should cause an event to be emitted
  
    ✓ should transform its argument text to uppercase
  * `write` function
  
    ✓ should cause an event to be emitted
  
    ✓ resolves when given a good file
  
    ✓ rejects when given a bad file
  
    ✓ rejects when given bad data

* What assertions need to be / should be made?
  * `app.js` line 22
  * `read.js` line 20
  * `uppercase.js` line 16
  * `write.js` line 19

#### UML
[uml diagram](./docs/assets/uml.jpg)
