
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
- In the example, `"Hello.txt"` is deleted. If successful, it logs `"Deleted the File!"`; otherwise, it logs the error.
