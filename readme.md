
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

app.use(function(req, res, next) {
    console.log("Hello world");
    next();
});

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

app.get("*", function(req, res) {
    res.send("Page not Found");
});

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

```javascript
const express = require('express');
const app = express();

const session = require('express-session');
const flash = require('connect-flash');

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "Random Key"
}));

app.use(flash());

app.get('/', function(req, res, next) {
    req.flash("error", "Credentials");
    res.direct('/error');
});

app.get('/error', function(req, res, next) {
    let message = req.flash("error");
    res.send(message);
});

app.listen(3000);
```

#### Explanation:
- **Flash Messages Middleware**: 
  - `app.use(flash())` enables flash messages in the Express application.
- **Session Middleware**: `app.use(session({ ... }))` is used to initialize session management with a secret key.
- **Routes**:
  - `/`: Sets a flash message with `req.flash("error", "Credentials")`. Flash messages are stored in the session and are typically used to display messages to users.
  - `/error`: Retrieves the flash message set in `/` and sends it as a response.
- **Flash Messages Usage**: 
  - `req.flash("error", "Credentials")`: Sets a flash message with the key `"error"` and the message `"Credentials"`.
  - `req.flash("error")`: Retrieves the flash message with the key `"error"`.

