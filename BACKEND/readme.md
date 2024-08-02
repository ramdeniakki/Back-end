
### File Operations with Node.js `fs` Module
### Writing a File (`fs.writeFile`)

### Structure:
```javascript
fs.writeFile(file, data, function(err) {
    if (err) console.log(err);
    else console.log("File is Created!");
});
```

### Example:
```javascript
fs.writeFile("Abc.txt", "Hello aap kaiso!", function(err) {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("File is Created Buddy!");
    }
});
```

### Explanation:
- **`fs.writeFile`**: Asynchronously writes data to a file.
- **`file`**: Path to the file where data will be written.
- **`data`**: Content to be written to the file.
- **Callback function**: Receives an `err` parameter that indicates any error encountered during the operation.
- In the example, `"Abc.txt"` is created with the content `"Hello aap kaiso!"`. If successful, it logs `"File is Created Buddy!"`; otherwise, it logs the error.

## Reading a File (`fs.readFile`)

### Structure:
```javascript
fs.readFile(file, function(err, data) {
    if (err) console.log(err);
    else console.log(data);
});
```

### Example:
```javascript
fs.readFile('./Abc.txt', function(err, data) {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("File content:", data);
    }
});
```

### Explanation:
- **`fs.readFile`**: Asynchronously reads the entire content of a file.
- **`file`**: Path to the file to be read.
- **Callback function**: Receives `err` (error) and `data` (file content).
- In the example, it reads the contents of `"Abc.txt"`. If successful, it logs the file content; otherwise, it logs the error.

## Appending to a File (`fs.appendFile`)

### Structure:
```javascript
fs.appendFile(filepath, data, function(err) {});
```

### Example:
```javascript
fs.appendFile("Abc.txt", "Appended Data", function(err) {
    if (err) {
        console.log("Error:", err.message);
    } else {
        console.log("Appended Data!");
    }
});
```

### Explanation:
- **`fs.appendFile`**: Asynchronously appends data to a file. If the file does not exist, it is created.
- **`filepath`**: Path to the file where data will be appended.
- **`data`**: Content to be appended to the file.
- **Callback function**: Receives an `err` parameter that indicates any error encountered during the operation.
- In the example, `"Appended Data"` is appended to `"Abc.txt"`. If successful, it logs `"Appended Data!"`; otherwise, it logs the error.

## Renaming a File (`fs.rename`)

### Structure:
```javascript
fs.rename(oldpath, newpath, function(err) {});
```

### Example:
```javascript
fs.rename("Abc.txt", "Hello.txt", function(err) {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log("Renamed the File!");
    }
});
```

### Explanation:
- **`fs.rename`**: Asynchronously renames a file or moves it to a new location.
- **`oldpath`**: Current path/name of the file.
- **`newpath`**: New path/name to which the file should be renamed or moved.
- **Callback function**: Receives an `err` parameter that indicates any error encountered during the operation.
- In the example, `"Abc.txt"` is renamed to `"Hello.txt"`. If successful, it logs `"Renamed the File!"`; otherwise, it logs the error.

## Deleting a File (`fs.unlink`)

### Structure:
```javascript
fs.unlink(path, function(err) {});
```

### Example:
```javascript
fs.unlink("Hello.txt", function(err) {
    if (err) {
        console.log("Error:", err.message);
    } else {
        console.log("Deleted the File!");
    }
});
```

### Explanation:
- **`fs.unlink`**: Asynchronously deletes a file.
- **`path`**: Path of the file to be deleted.
- **Callback function**: Receives an `err` parameter that indicates any error encountered during the operation.
Let's break down each of the provided code examples step by step:

### Example 1: Basic HTTP Server using Node.js

```javascript
const http = require('http');

var server = http.createServer((req, res) => {
    res.end("Hello");
});

server.listen(3000);
```

#### Explanation:
1. **Require HTTP Module**: `const http = require('http');` imports the built-in Node.js HTTP module, which provides functionality to create HTTP servers and handle HTTP requests.
   
2. **Create Server**: `http.createServer((req, res) => { ... })` creates an HTTP server instance. The callback function `(req, res)` is called whenever a request is made to this server.

3. **Handle Requests**: Inside the callback function:
   - `res.end("Hello");` sends the response "Hello" back to the client.
   
4. **Server Listening**: `server.listen(3000);` makes the server listen on port 3000 for incoming HTTP requests.

### Example 2: HTTP Server with Basic Routing

```javascript
const http = require('http');

const server = http.createServer(function(req, res) {
    if (req.url === '/') {
        res.end("Welcome to the Page");
    } else if (req.url === '/profile') {
        res.end('Profile page');
    } else {
        res.end("Page not found");
    }
});

server.listen(3000);
```

#### Explanation:
1. **Create HTTP Server**: `http.createServer(function(req, res) { ... })` creates an HTTP server with a callback function `(req, res)`.

2. **Routing**:
   - `if (req.url === '/') { ... }`: Handles requests to the root URL (`/`) and sends back "Welcome to the Page".
   - `else if (req.url === '/profile') { ... }`: Handles requests to `/profile` and sends back "Profile page".
   - `else { ... }`: Handles any other URL and sends back "Page not found".

3. **Server Listening**: `server.listen(3000);` makes the server listen on port 3000.

### Example 3: HTTP Server with Express

```javascript
const express = require('express');
const app = express();

app.get("/", function(req, res) {
    res.send('Home page');
});

app.listen(3000);
```

#### Explanation:
1. **Require Express Module**: `const express = require('express');` imports the Express.js module.

2. **Create Express Application**: `const app = express();` creates an Express application instance.

3. **Define Route**: `app.get("/", function(req, res) { ... })` defines a route for HTTP GET requests to the root URL (`/`).
   - `res.send('Home page');` sends back the response "Home page" when someone accesses the root URL.

4. **Server Listening**: `app.listen(3000);` starts the server on port 3000.


### Example 4 : Basic Express Server

```javascript
const express = require('express');
const app = express();

// Middleware function
app.use(function(req, res, next) {
    console.log("Hello world");
    next(); // Calls the next middleware function in the stack
});

// Route handlers
app.get('/', function(req, res) {
    res.send("Welcome page");
});

app.get('/about', function(req, res) {
    res.send("about page");
});

app.get('/contact', function(req, res) {
    res.send("contact page");
});

app.get('/service', function(req, res) {
    res.send("service page");
});

// Catch-all route for undefined routes
app.get("*", function(req, res) {
    res.send("Page not Found");
});

// Server listening on port 3000
app.listen(3000);

```

#### Explanation:
- **Express**: This line `const express = require('express');` imports the Express.js framework, which is a Node.js web application framework.
- **App Initialization**: `const app = express();` creates an Express application instance.
- **Middleware**: `app.use(function(req, res, next) { ... })` registers a middleware function that logs "Hello world" to the console for every incoming request. `next()` is called to pass control to the next middleware function.
- **Routing**: `app.get(path, callback)` defines routes for HTTP GET requests:
  - `/`: Sends "Welcome page" as a response.
  - `/about`: Sends "about page" as a response.
  - `/contact`: Sends "contact page" as a response.
  - `/service`: Sends "service page" as a response.
  - `*` (catch-all route): Sends "Page not Found" for any other path not matched by the previous routes.
- **Server Listening**: `app.listen(3000);` starts the server on port 3000.

### Example 5: Sessions with Express

1. **Require and Initialize Express**:
   - `const express = require('express');`: Imports the Express.js module.
   - `const app = express();`: Creates an Express application instance `app`.

2. **Middleware Function**:
   - `app.use(function(req, res, next) { ... })`: Registers a middleware function using `app.use()`. Middleware functions have access to the `req` (request) and `res` (response) objects. They can also manipulate these objects, execute code, or modify the request and response objects.
   - **Middleware Function Details**:
     - `console.log("Hello world");`: Outputs "Hello world" to the console for every incoming request.
     - `next();`: Calls the next middleware function in the stack. It's crucial to call `next()` to pass control to the next middleware function. If omitted, the request will be left hanging.

3. **Route Handlers**:
   - `app.get('/', function(req, res) { ... })`: Defines a route handler for GET requests to the root URL (`/`). When someone accesses the root URL, it sends back "Welcome page".
   - `app.get('/about', function(req, res) { ... })`: Defines a route handler for GET requests to `/about`, sending back "about page".
   - `app.get('/contact', function(req, res) { ... })`: Defines a route handler for GET requests to `/contact`, sending back "contact page".
   - `app.get('/service', function(req, res) { ... })`: Defines a route handler for GET requests to `/service`, sending back "service page".

4. **Catch-All Route**:
   - `app.get("*", function(req, res) { ... })`: Defines a catch-all route handler for any other undefined routes. If someone accesses a route that isn't explicitly defined (`/`, `/about`, `/contact`, `/service`), it sends back "Page not Found".

5. **Server Listening**:
   - `app.listen(3000);`: Starts the Express server on port 3000.

### Middleware Explanation:

- **What is Middleware?**:
  - Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application's request-response cycle.
  - They can perform tasks such as:
    - Executing any code.
    - Modifying request and response objects.
    - Ending the request-response cycle.
    - Calling the next middleware function in the stack.

- **Why Use Middleware?**:
  - Middleware provides a way to execute code globally for every request or for specific routes before sending a response.
  - It can be used for tasks like logging, parsing request data, authentication, error handling, etc.
  - In the provided example, `console.log("Hello world");` in the middleware logs "Hello world" for every incoming request, demonstrating its global execution nature.

- **`next()` Function**:
  - `next()` is a function in Express's middleware system that is used to pass control to the next middleware function.
  - It's crucial to call `next()` within a middleware function to ensure that the request continues to the next middleware function or route handler.
  - If `next()` is not called, the request will be left hanging, and the response won't be sent back to the client.


```javascript
const express = require('express');
const app = express();

const session = require("express-session");

app.use(session({
    secret: "random-key",
    resave: false,
    saveUninitialized: false
}));

app.get('/', function(req, res) {
    res.send("Home page");
});

app.get("/create", function(req, res, next) {
    req.session.polo = true;
    res.send("created!");
});

app.get('/checks', function(req, res, next) {
    console.log(req.session.polo);
});

app.listen(3000);
```

#### Explanation:
- **Session Middleware**: `app.use(session({ ... }))` sets up sessions with the following options:
  - `secret`: A string used to sign the session ID cookie (should be securely stored and not exposed in code).
  - `resave`: Forces the session to be saved back to the session store, even if the session was never modified.
  - `saveUninitialized`: Forces a session that is "uninitialized" to be saved to the store.
- **Routes**:
  - `/`: Sends "Home page" as a response.
  - `/create`: Sets `req.session.polo` to `true` when accessed, indicating session data is being set.
  - `/checks`: Logs the value of `req.session.polo` to the console.
- **Session Usage**: `req.session` allows you to store session data across requests for a particular user.

### Example 6: Using Flash Messages with Express
Certainly! Let's break down the provided Express.js code that integrates sessions and flash messages using `express-session` and `connect-flash` modules:

### Code Explanation

```javascript
const express = require('express');
const app = express();

const session = require('express-session');
const flash = require('connect-flash');

// Session middleware setup
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "Random Key"
}));

// Flash middleware setup
app.use(flash());

// Route: Set flash message and redirect
app.get('/', function(req, res, next) {
    req.flash("error", "Credentials");
    res.redirect('/error');
});

// Route: Display flash message
app.get('/error', function(req, res, next) {
    let message = req.flash("error");
    res.send(message);
});

// Server listening on port 3000
app.listen(3000);
```

#### Detailed Explanation

1. **Require and Initialize Express and Middleware**:
   - `const express = require('express');`: Imports the Express.js module.
   - `const app = express();`: Creates an Express application instance `app`.

   - `const session = require('express-session');`: Imports `express-session` middleware for managing sessions.
   - `const flash = require('connect-flash');`: Imports `connect-flash` middleware for flash messages.

2. **Session Middleware Setup**:
   - `app.use(session({ ... }));`: Configures the session middleware using `app.use()`.
     - `resave: false`: Prevents the session from being saved back to the session store on every request.
     - `saveUninitialized: false`: Prevents uninitialized sessions from being saved to the session store.
     - `secret: "Random Key"`: A secret key used to sign the session ID cookie. This should be a securely generated random string.

3. **Flash Middleware Setup**:
   - `app.use(flash());`: Initializes `connect-flash` middleware to enable flash messages in the application.

4. **Route: Set Flash Message and Redirect**:
   - `app.get('/', function(req, res, next) { ... });`: Defines a route handler for GET requests to the root URL (`/`).
   - Inside the handler:
     - `req.flash("error", "Credentials");`: Sets a flash message with key `"error"` and message `"Credentials"`.
     - `res.redirect('/error');`: Redirects the request to the `/error` route immediately after setting the flash message.

5. **Route: Display Flash Message**:
   - `app.get('/error', function(req, res, next) { ... });`: Defines a route handler for GET requests to `/error`.
   - Inside the handler:
     - `let message = req.flash("error");`: Retrieves the flash message stored in the session under the key `"error"`.
     - `res.send(message);`: Sends the retrieved flash message as the response.

6. **Server Listening**:
   - `app.listen(3000);`: Starts the Express server on port 3000.

### Explanation of Flash Messages and Session Interaction:

- **Flash Messages**:
  - Flash messages are temporary messages stored in the session.
  - They are typically used to display notifications or messages to the user after a redirect.
  - Flash messages are stored in the session and cleared once they are accessed.

- **Session**:
  - `express-session` middleware manages session data for each visitor.
  - It stores session data on the server and provides a unique session ID to the client using a cookie.
  - Flash messages utilize sessions to store temporary messages between requests.

### Connect Flash Middleware

The `connect-flash` module provides flash messages for Express applications. Flash messages are temporary messages that are stored in the session and only available on the next request.

#### Code Explanation

```javascript
const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');

app.use(session({
    secret: "value",
    resave: false,
    saveUninitialized: false
}));

app.use(flash());

app.get('/', (req, res, next) => {
    req.flash('error', "invalid credentials");
    res.redirect('/error');
});

app.get('/error', (req, res, next) => {
    let message = req.flash('error');
    res.send(message);
});

app.listen(3000);
```

#### Breakdown

1. **Import Modules**

```javascript
const express = require('express');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
```

- `express`: Importing the Express module.
- `session`: Importing the express-session module to handle session management.
- `flash`: Importing the connect-flash module to manage flash messages.

2. **Configure Session Middleware**

```javascript
app.use(session({
    secret: "value",
    resave: false,
    saveUninitialized: false
}));
```

- `secret`: A secret string used to sign the session ID cookie.
- `resave`: Forces the session to be saved back to the session store, even if it was never modified during the request.
- `saveUninitialized`: Forces an uninitialized session to be saved to the store.

3. **Configure Flash Middleware**

```javascript
app.use(flash());
```

- Adds flash message support to the app.

4. **Define Routes**

```javascript
app.get('/', (req, res, next) => {
    req.flash('error', "invalid credentials");
    res.redirect('/error');
});
```

- When a GET request is made to the root URL `/`, an error message is flashed and the user is redirected to `/error`.

```javascript
app.get('/error', (req, res, next) => {
    let message = req.flash('error');
    res.send(message);
});
```

- When a GET request is made to `/error`, the flashed message is retrieved and sent as the response.

5. **Start the Server**

```javascript
app.listen(3000);
```

- Starts the server on port 3000.

### Cookie Parser Middleware

The `cookie-parser` module parses cookies attached to the client request object.

#### Code Explanation

```javascript
const express = require('express');
const app = express();
const cookie = require('cookie-parser');

app.use(cookie());

app.get('/', (req, res, next) => {
    res.send('hey');
});

app.get('/check', (req, res, next) => {
    console.log(req.cookies.banned);
    res.send("Checking");
});

app.get('/banned', (req, res, next) => {
    res.cookie("banned", "true");
    res.send("Banned");
});

app.listen(3000);
```

#### Breakdown

1. **Import Modules**

```javascript
const express = require('express');
const app = express();
const cookie = require('cookie-parser');
```

- `cookie-parser`: Importing the cookie-parser module to handle cookies.

2. **Configure Middleware**

```javascript
app.use(cookie());
```

- Adds cookie parsing middleware to the app.

3. **Define Routes**

```javascript
app.get('/', (req, res, next) => {
    res.send('hey');
});
```

- When a GET request is made to the root URL `/`, a simple 'hey' message is sent.

```javascript
app.get('/check', (req, res, next) => {
    console.log(req.cookies.banned);
    res.send("Checking");
});
```

- When a GET request is made to `/check`, it logs the value of the `banned` cookie and sends "Checking" as the response.

```javascript
app.get('/banned', (req, res, next) => {
    res.cookie("banned", "true");
    res.send("Banned");
});
```

- When a GET request is made to `/banned`, it sets a `banned` cookie with the value `true` and sends "Banned" as the response.

4. **Start the Server**

```javascript
app.listen(3000);
```

- Starts the server on port 3000.

### Dynamic Routing

Dynamic routing allows you to capture values from the URL and use them in your route handlers.

#### Code Explanation

```javascript
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome page');
});

app.get('/profile/:username/:age', (req, res, next) => {
    res.send(`Hello this is ${req.params.username}, a ${req.params.age} year old software developer`);
});

app.listen(3000);
```

#### Breakdown

1. **Import Modules**

```javascript
const express = require('express');
const app = express();
```

- `express`: Importing the Express module.

2. **Define Routes**

```javascript
app.get('/', (req, res) => {
    res.send('Welcome page');
});
```

- When a GET request is made to the root URL `/`, a "Welcome page" message is sent.

```javascript
app.get('/profile/:username/:age', (req, res, next) => {
    res.send(`Hello this is ${req.params.username}, a ${req.params.age} year old software developer`);
});
```

- When a GET request is made to `/profile/:username/:age`, the values of `username` and `age` are captured from the URL and used in the response message.

3. **Start the Server**

```javascript
app.listen(3000);
```

- Starts the server on port 3000.




### HTML Form Explanation

This HTML document defines a simple form that users can fill out and submit. The form collects a user's name, email, and password.

#### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="/create" method="post">
        <input type="text" name="name" placeholder="name" required>
        <input type="email" name="email" placeholder="email" required>
        <input type="password" name="password" placeholder="password" required>
        <input type="submit">
    </form>
</body>
</html>
```

#### Breakdown

1. **DOCTYPE Declaration**

```html
<!DOCTYPE html>
```

- This line declares the document type and version of HTML being used. `<!DOCTYPE html>` indicates that the document is an HTML5 document.

2. **HTML Tag and Language Attribute**

```html
<html lang="en">
```

- The `<html>` tag encloses all HTML content. The `lang="en"` attribute specifies the language of the document as English.

3. **Head Section**

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
```

- The `<head>` section contains metadata and information about the document.

    - `<meta charset="UTF-8">`: This meta tag specifies the character encoding for the document as UTF-8.
    - `<meta name="viewport" content="width=device-width, initial-scale=1.0">`: This meta tag sets the viewport to make the website responsive on all devices. `width=device-width` sets the width of the page to follow the screen width of the device. `initial-scale=1.0` sets the initial zoom level when the page is first loaded.
    - `<title>Document</title>`: This sets the title of the document, which appears in the browser tab.

4. **Body Section**

```html
<body>
```

- The `<body>` section contains the content of the document that will be displayed to the user.

5. **Form Element**

```html
<form action="/create" method="post">
```

- `<form>`: The form element is used to create an HTML form for user input.
    - `action="/create"`: This specifies the URL to which the form data will be sent when the form is submitted. In this case, it points to the `/create` route of the Express server.
    - `method="post"`: This specifies the HTTP method to be used when submitting the form. Here, it uses the POST method, which is typically used for sending form data securely.

6. **Input Fields**

```html
<input type="text" name="name" placeholder="name" required>
<input type="email" name="email" placeholder="email" required>
<input type="password" name="password" placeholder="password" required>
<input type="submit">
```

- `<input type="text" name="name" placeholder="name" required>`: This creates a text input field for the user's name.
    - `type="text"`: Specifies that the input is a text field.
    - `name="name"`: Specifies the name of the input field, which will be sent as the key in the form data.
    - `placeholder="name"`: Provides a placeholder text that appears in the input field when it's empty.
    - `required`: Makes the input field mandatory, meaning the form cannot be submitted without filling out this field.

- `<input type="email" name="email" placeholder="email" required>`: This creates an email input field.
    - `type="email"`: Specifies that the input is an email field, which ensures that the entered value is a valid email address.
    - The `name`, `placeholder`, and `required` attributes function the same as in the text input field.

- `<input type="password" name="password" placeholder="password" required>`: This creates a password input field.
    - `type="password"`: Specifies that the input is a password field, which hides the entered characters.
    - The `name`, `placeholder`, and `required` attributes function the same as in the text input field.

- `<input type="submit">`: This creates a submit button for the form.
    - `type="submit"`: Specifies that this input is a submit button, which sends the form data to the server when clicked.

### Introduction to EJS

EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript. It is commonly used with Node.js and Express to create dynamic web pages.

### Code Explanation

#### 1. Setting up Express and EJS

```javascript
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
```

- `const express = require('express');`: This line imports the Express module, which is a web application framework for Node.js.
- `const app = express();`: This line creates an instance of an Express application.
- `app.set('view engine', 'ejs');`: This line sets EJS as the template engine for the application, allowing you to use EJS files to generate HTML.

#### 2. Middleware for Parsing JSON and URL-Encoded Data

```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

- `app.use(express.json());`: This middleware parses incoming requests with JSON payloads. It is useful for APIs that receive JSON data.
- `app.use(express.urlencoded({ extended: true }));`: This middleware parses incoming requests with URL-encoded payloads. The `extended: true` option allows for rich objects and arrays to be encoded into the URL-encoded format.

#### 3. Defining Routes

##### Root Route (GET /)

```javascript
app.get('/', (req, res) => {
    res.render('form');
});
```

- `app.get('/', (req, res) => { ... });`: This defines a route for the root URL (`/`). When a GET request is made to the root URL, the callback function is executed.
- `res.render('form');`: This renders the `form.ejs` template. The `form.ejs` file should be placed in the `views` directory of your project.

##### Profile Route (GET /profile)

```javascript
app.get('/profile', (req, res) => {
    res.send('profile');
});
```

- `app.get('/profile', (req, res) => { ... });`: This defines a route for the `/profile` URL. When a GET request is made to `/profile`, the callback function is executed.
- `res.send('profile');`: This sends a plain text response "profile" to the client.

##### Create Route (POST /create)

```javascript
app.post('/create', (req, res) => {
    console.log(req.body);
    res.send('Form data received!');
});
```

- `app.post('/create', (req, res) => { ... });`: This defines a route for the `/create` URL. When a POST request is made to `/create`, the callback function is executed.
- `console.log(req.body);`: This logs the body of the request to the console. The body contains the form data submitted by the client.
- `res.send('Form data received!');`: This sends a plain text response "Form data received!" to the client.

#### 4. Starting the Server

```javascript
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
```

- `app.listen(3000, () => { ... });`: This starts the server on port 3000. The callback function is executed once the server starts successfully.
- `console.log('Server is running on http://localhost:3000');`: This logs a message to the console indicating that the server is running and listening for requests on `http://localhost:3000`.
be expanded to build more complex applications by adding more routes, views, and middleware.
