var PYTHON = [
    {"question": "What is Python?", "optionA": "Programming language", "optionB": "Operating system", "optionC": "Database", "optionD": "Web browser", "answer": "Programming language"},
    {"question": "Which of the following is a valid variable name in Python?", "optionA": "2variable", "optionB": "my_variable", "optionC": "break", "optionD": "for", "answer": "my_variable"},
    {"question": "What is the result of 3 + 4 * 2?", "optionA": "10", "optionB": "14", "optionC": "11", "optionD": "None of the above", "answer": "11"},
    {"question": "How do you comment out a single line in Python?", "optionA": "// Comment", "optionB": "# Comment", "optionC": "/ Comment /", "optionD": "/* Comment */", "answer": "# Comment"},
    {"question": "What is the purpose of the 'pass' statement in Python?", "optionA": "To create a loop", "optionB": "To define an empty code block", "optionC": "To exit a function", "optionD": "To print a message", "answer": "To define an empty code block"},
    {"question": "Which of the following data types is mutable?", "optionA": "Tuple", "optionB": "List", "optionC": "String", "optionD": "Set", "answer": "List"},
    {"question": "What is the output of 'Hello ' + 'World' in Python?", "optionA": "Hello World", "optionB": "Hello + World", "optionC": "Error", "optionD": "None of the above", "answer": "Hello World"},
    {"question": "How do you open a file named 'example.txt' for writing in Python?", "optionA": "open('example.txt', 'r')", "optionB": "open('example.txt', 'w')", "optionC": "open('example.txt', 'a')", "optionD": "open('example.txt', 'x')", "answer": "open('example.txt', 'w')"},
    {"question": "What does the 'len()' function do?", "optionA": "Returns the length of a list or string", "optionB": "Returns the maximum value in a list", "optionC": "Returns the square root of a number", "optionD": "None of the above", "answer": "Returns the length of a list or string"},
    {"question": "Which of the following is a correct way to define a function in Python?", "optionA": "def myFunction:", "optionB": "function myFunction():", "optionC": "define myFunction():", "optionD": "function = myFunction():", "answer": "def myFunction:"},
    {"question": "What is the purpose of the 'break' statement in a loop?", "optionA": "To skip the current iteration and move to the next one", "optionB": "To exit the loop and move to the next statement", "optionC": "To repeat the current iteration", "optionD": "To print a message", "answer": "To exit the loop and move to the next statement"},
    {"question": "How do you check if a key is present in a dictionary?", "optionA": "'key' in my_dict", "optionB": "my_dict.contains('key')", "optionC": "'key' not in my_dict", "optionD": "my_dict.has_key('key')", "answer": "'key' in my_dict"},
    {"question": "What is the purpose of the 'continue' statement in a loop?", "optionA": "To exit the loop", "optionB": "To skip the rest of the code inside the loop for the current iteration and move to the next one", "optionC": "To repeat the current iteration", "optionD": "To print a message", "answer": "To skip the rest of the code inside the loop for the current iteration and move to the next one"},
    {"question": "What is the output of 'print(list(range(5)))'?", "optionA": "[0, 1, 2, 3, 4]", "optionB": "[1, 2, 3, 4, 5]", "optionC": "[0, 2, 4, 6, 8]", "optionD": "[5, 4, 3, 2, 1]", "answer": "[0, 1, 2, 3, 4]"},
    {"question": "Which of the following is a correct way to import a module in Python?", "optionA": "import my_module", "optionB": "using my_module", "optionC": "importing my_module", "optionD": "from my_module import", "answer": "import my_module"},
    {"question": "What is the purpose of the 'else' clause in a try-except block?", "optionA": "To handle exceptions", "optionB": "To execute code when no exception occurs", "optionC": "To exit the program", "optionD": "To print a message", "answer": "To execute code when no exception occurs"},
    {"question": "How do you remove an element from a list in Python?", "optionA": "remove(element)", "optionB": "delete(element)", "optionC": "pop(element)", "optionD": "discard(element)", "answer": "remove(element)"},
    {"question": "What is the purpose of the 'finally' clause in a try-except block?", "optionA": "To handle exceptions", "optionB": "To execute code when an exception occurs", "optionC": "To execute code when no exception occurs", "optionD": "To exit the program", "answer": "To execute code when an exception occurs"},
    {"question": "How do you convert a string to uppercase in Python?", "optionA": "str.upper()", "optionB": "str.toUpper()", "optionC": "str.uppercase()", "optionD": "str.caseupper()", "answer": "str.upper()"},
    {"question": "Which of the following is not a valid comparison operator in Python?", "optionA": "==", "optionB": "!=", "optionC": "><", "optionD": "<=", "answer": "><"},
    {"question": "What does the 'repr()' function do?", "optionA": "Returns a string representation of an object", "optionB": "Converts a string to uppercase", "optionC": "Returns the square root of a number", "optionD": "None of the above", "answer": "Returns a string representation of an object"},
    {"question": "What is the purpose of the 'map()' function in Python?", "optionA": "Applies a function to each item in an iterable", "optionB": "Creates a new map object", "optionC": "Finds the maximum value in a list", "optionD": "None of the above", "answer": "Applies a function to each item in an iterable"},
    {"question": "How do you define a default value for a function parameter in Python?", "optionA": "def myFunction(param=10):", "optionB": "def myFunction(param=):", "optionC": "def myFunction(param, default=10):", "optionD": "def myFunction(param=default):", "answer": "def myFunction(param=10):"},
    {"question": "What is the purpose of the '__init__' method in a Python class?", "optionA": "To initialize class attributes", "optionB": "To create a new instance of the class", "optionC": "To define a class method", "optionD": "To exit the program", "answer": "To initialize class attributes"},
    {"question": "Which of the following is a correct way to iterate over a dictionary in Python?", "optionA": "for key in my_dict.keys():", "optionB": "for key, value in my_dict.items():", "optionC": "for item in my_dict:", "optionD": "for value in my_dict.values():", "answer": "for key, value in my_dict.items():"},
    {"question": "What is the purpose of the 'super()' function in Python?", "optionA": "To call a superclass method", "optionB": "To create a new instance of a class", "optionC": "To exit the program", "optionD": "To find the maximum value in a list", "answer": "To call a superclass method"},
    {"question": "How do you round a floating-point number to a specified number of decimal places in Python?", "optionA": "round(number, places)", "optionB": "floor(number, places)", "optionC": "ceil(number, places)", "optionD": "truncate(number, places)", "answer": "round(number, places)"},
    {"question": "What is the purpose of the 'zip()' function in Python?", "optionA": "Combines two lists into a dictionary", "optionB": "Creates a compressed zip file", "optionC": "Merges multiple iterables into tuples", "optionD": "None of the above", "answer": "Merges multiple iterables into tuples"},
    {"question": "How do you raise a custom exception in Python?", "optionA": "raise Exception('Custom message')", "optionB": "throw('Custom message')", "optionC": "exception('Custom message')", "optionD": "raise CustomException('Custom message')", "answer": "raise Exception('Custom message')"},
    {"question": "What is the purpose of the 'strip()' method for strings in Python?", "optionA": "Removes leading and trailing whitespaces", "optionB": "Concatenates two strings", "optionC": "Splits a string into a list", "optionD": "Converts the string to uppercase", "answer": "Removes leading and trailing whitespaces"}
]

var HTML = [
    {"question": "What does HTML stand for?", "optionA": "Hyper Text Markup Language", "optionB": "Highly Typed Machine Learning", "optionC": "Hyper Transfer Markup Language", "optionD": "High-level Text Management Language", "answer": "Hyper Text Markup Language"},
    {"question": "Which HTML tag is used to define the structure of an HTML document?", "optionA": "<body>", "optionB": "<head>", "optionC": "<html>", "optionD": "<title>", "answer": "<html>"},
    {"question": "What is the correct HTML element for the largest heading?", "optionA": "<heading>", "optionB": "<h1>", "optionC": "<head>", "optionD": "<h6>", "answer": "<h1>"},
    {"question": "Which HTML attribute is used to provide additional information about an element?", "optionA": "id", "optionB": "class", "optionC": "style", "optionD": "alt", "answer": "class"},
    {"question": "In HTML, which tag is used for creating an unordered list?", "optionA": "<ul>", "optionB": "<ol>", "optionC": "<li>", "optionD": "<list>", "answer": "<ul>"},
    {"question": "What is the purpose of the HTML 'alt' attribute?", "optionA": "Defines alternative text for an image", "optionB": "Sets the alignment of an element", "optionC": "Specifies a hyperlink", "optionD": "Defines alternative language for the document", "answer": "Defines alternative text for an image"},
    {"question": "Which HTML tag is used to create a hyperlink?", "optionA": "<url>", "optionB": "<link>", "optionC": "<a>", "optionD": "<href>", "answer": "<a>"},
    {"question": "What is the correct HTML for creating a line break?", "optionA": "<break>", "optionB": "<br>", "optionC": "<lb>", "optionD": "<line>", "answer": "<br>"},
    {"question": "Which HTML tag is used for creating a table?", "optionA": "<table>", "optionB": "<tab>", "optionC": "<tr>", "optionD": "<td>", "answer": "<table>"},
    {"question": "In HTML, what does the acronym 'CSS' stand for?", "optionA": "Counter Style Sheets", "optionB": "Computer Style Sheets", "optionC": "Creative Style Sheets", "optionD": "Cascading Style Sheets", "answer": "Cascading Style Sheets"},
    {"question": "What is the purpose of the HTML 'target' attribute in a hyperlink?", "optionA": "Specifies the language of the target document", "optionB": "Sets the size of the target element", "optionC": "Defines the location of the target document", "optionD": "Specifies where to open the target document", "answer": "Specifies where to open the target document"},
    {"question": "Which HTML tag is used for creating an ordered list?", "optionA": "<ol>", "optionB": "<ul>", "optionC": "<li>", "optionD": "<list>", "answer": "<ol>"},
    {"question": "What is the purpose of the HTML 'src' attribute in an image tag?", "optionA": "Defines the source code of the image", "optionB": "Specifies the size of the image", "optionC": "Sets the style of the image", "optionD": "Specifies the source URL of the image", "answer": "Specifies the source URL of the image"},
    {"question": "Which HTML tag is used for creating a horizontal rule?", "optionA": "<hr>", "optionB": "<rule>", "optionC": "<line>", "optionD": "<hline>", "answer": "<hr>"},
    {"question": "What does the HTML 'form' element define?", "optionA": "Defines a section of a document", "optionB": "Defines a form for user input", "optionC": "Specifies a hyperlink", "optionD": "Defines a table", "answer": "Defines a form for user input"},
    {"question": "Which HTML tag is used for creating an input field?", "optionA": "<textfield>", "optionB": "<input>", "optionC": "<box>", "optionD": "<forminput>", "answer": "<input>"},
    {"question": "What is the purpose of the HTML 'placeholder' attribute in an input field?", "optionA": "Specifies the default value of the input field", "optionB": "Defines a placeholder for user input", "optionC": "Sets the maximum length of the input field", "optionD": "Specifies the type of input", "answer": "Defines a placeholder for user input"},
    {"question": "Which HTML tag is used for creating a dropdown list?", "optionA": "<list>", "optionB": "<select>", "optionC": "<dropdown>", "optionD": "<options>", "answer": "<select>"},
    {"question": "In HTML, what does the acronym 'URL' stand for?", "optionA": "Uniform Resource Locator", "optionB": "Universal Resource Language", "optionC": "User Record Locator", "optionD": "Underlined Resource Link", "answer": "Uniform Resource Locator"},
    {"question": "What is the correct HTML for inserting an image?", "optionA": "<img src='image.jpg' alt='Description'>", "optionB": "<image src='image.jpg' alt='Description'>", "optionC": "<picture src='image.jpg' alt='Description'>", "optionD": "<img alt='Description' src='image.jpg'>", "answer": "<img src='image.jpg' alt='Description'>"},
    {"question": "Which HTML tag is used for creating a hyperlink with an email address?", "optionA": "<link>", "optionB": "<email>", "optionC": "<a>", "optionD": "<mailto>", "answer": "<a>"},
    {"question": "What is the purpose of the HTML 'colspan' attribute in a table?", "optionA": "Specifies the color of a column", "optionB": "Defines the number of columns a cell should span", "optionC": "Sets the alignment of a column", "optionD": "Specifies the type of content in a column", "answer": "Defines the number of columns a cell should span"},
    {"question": "Which HTML tag is used for creating a division or a section in a webpage?", "optionA": "<section>", "optionB": "<div>", "optionC": "<article>", "optionD": "<part>", "answer": "<div>"},
    {"question": "What is the purpose of the HTML 'iframe' element?", "optionA": "To define an inline frame", "optionB": "To create an internal frame", "optionC": "To include an external script", "optionD": "To define an inline form", "answer": "To define an inline frame"},
    {"question": "Which HTML tag is used for defining a navigation menu?", "optionA": "<nav>", "optionB": "<menu>", "optionC": "<navigation>", "optionD": "<navbar>", "answer": "<nav>"},
    {"question": "What is the purpose of the HTML 'target' attribute in a form tag?", "optionA": "Defines the target language of the form", "optionB": "Sets the form action", "optionC": "Specifies the location to open the form result", "optionD": "Specifies the type of form", "answer": "Specifies the location to open the form result"},
    {"question": "Which HTML tag is used for creating a subscript text?", "optionA": "<sub>", "optionB": "<sup>", "optionC": "<subscript>", "optionD": "<down>", "answer": "<sub>"},
    {"question": "What is the purpose of the HTML 'autofocus' attribute in an input field?", "optionA": "Enables automatic submission of the form", "optionB": "Sets the default value of the input field", "optionC": "Automatically focuses on the input field when the page loads", "optionD": "Specifies the maximum length of the input field", "answer": "Automatically focuses on the input field when the page loads"},
    {"question": "Which HTML tag is used for creating a checkbox in a form?", "optionA": "<check>", "optionB": "<input type='checkbox'>", "optionC": "<box>", "optionD": "<checkbox>", "answer": "<input type='checkbox'>"},
    {"question": "What is the purpose of the HTML 'colgroup' element in a table?", "optionA": "Defines a group of columns in a table", "optionB": "Sets the color of the columns", "optionC": "Groups multiple tables together", "optionD": "Specifies the column alignment", "answer": "Defines a group of columns in a table"}
]

var JAVASCRIPT = [
    {"question": "What does JavaScript stand for?", "optionA": "Just Script", "optionB": "Java Source", "optionC": "JavaScript", "optionD": "Joint Session", "answer": "JavaScript"},
    {"question": "What is the correct way to declare a variable in JavaScript?", "optionA": "var myVar;", "optionB": "variable myVar;", "optionC": "v myVar;", "optionD": "let myVar;", "answer": "let myVar;"},
    {"question": "Which built-in method adds one or more elements to the end of an array and returns the new length?", "optionA": "append()", "optionB": "push()", "optionC": "addToEnd()", "optionD": "attach()", "answer": "push()"},
    {"question": "How do you comment out a single line in JavaScript?", "optionA": "// Comment", "optionB": "# Comment", "optionC": "/* Comment */", "optionD": "REM Comment", "answer": "// Comment"},
    {"question": "What is the purpose of the 'typeof' operator in JavaScript?", "optionA": "To check the type of a variable or expression", "optionB": "To define a new variable type", "optionC": "To perform mathematical operations", "optionD": "To concatenate strings", "answer": "To check the type of a variable or expression"},
    {"question": "Which keyword is used to declare a constant in JavaScript?", "optionA": "let", "optionB": "const", "optionC": "var", "optionD": "constant", "answer": "const"},
    {"question": "What is the correct syntax for an if statement in JavaScript?", "optionA": "if (x = 5) { }", "optionB": "if x = 5 { }", "optionC": "if (x == 5) { }", "optionD": "if x == 5 { }", "answer": "if (x == 5) { }"},
    {"question": "How do you write a function in JavaScript?", "optionA": "function = myFunction() { }", "optionB": "def myFunction() { }", "optionC": "function myFunction() { }", "optionD": "myFunction(): function { }", "answer": "function myFunction() { }"},
    {"question": "What is the purpose of the 'innerHTML' property in JavaScript?", "optionA": "To define the internal style of an element", "optionB": "To access the content of an HTML element", "optionC": "To set the background color of a webpage", "optionD": "To create a new HTML element", "answer": "To access the content of an HTML element"},
    {"question": "Which method is used to remove the last element from an array in JavaScript?", "optionA": "removeLast()", "optionB": "deleteLast()", "optionC": "pop()", "optionD": "slice(-1)", "answer": "pop()"},
    {"question": "What is the purpose of the 'addEventListener()' method in JavaScript?", "optionA": "To add a new HTML element to the document", "optionB": "To attach an event handler to an element", "optionC": "To set the CSS style of an element", "optionD": "To remove an event listener", "answer": "To attach an event handler to an element"},
    {"question": "How do you check if a variable is an array in JavaScript?", "optionA": "isArray(myVar)", "optionB": "typeof(myVar) == 'array'", "optionC": "myVar.isArray()", "optionD": "Array.isArray(myVar)", "answer": "Array.isArray(myVar)"},
    {"question": "What is the purpose of the 'NaN' value in JavaScript?", "optionA": "To represent 'Not a Number'", "optionB": "To indicate the end of a list", "optionC": "To represent 'Negative and Negative'", "optionD": "To check if a variable is undefined", "answer": "To represent 'Not a Number'"},
    {"question": "How do you declare a JavaScript array?", "optionA": "var myArray = {}", "optionB": "myArray = []", "optionC": "array myArray = []", "optionD": "var myArray = []", "answer": "var myArray = []"},
    {"question": "What is the purpose of the 'slice()' method in JavaScript?", "optionA": "To split a string into an array of substrings", "optionB": "To remove elements from an array", "optionC": "To copy a portion of an array to a new array", "optionD": "To concatenate two strings", "answer": "To copy a portion of an array to a new array"},
    {"question": "Which keyword is used to exit a loop in JavaScript?", "optionA": "exit", "optionB": "break", "optionC": "end", "optionD": "return", "answer": "break"},
    {"question": "How do you declare a variable that will not be reassigned in JavaScript?", "optionA": "const", "optionB": "var", "optionC": "let", "optionD": "unassign", "answer": "const"},
    {"question": "What is the purpose of the 'setTimeout()' function in JavaScript?", "optionA": "To delay the execution of a function", "optionB": "To set a timer for an interval", "optionC": "To add a timeout to a network request", "optionD": "To terminate the script", "answer": "To delay the execution of a function"},
    {"question": "How do you convert a string to a number in JavaScript?", "optionA": "int(myString)", "optionB": "convertToNumber(myString)", "optionC": "Number(myString)", "optionD": "parseNumber(myString)", "answer": "Number(myString)"},
    {"question": "What is the purpose of the 'localStorage' object in JavaScript?", "optionA": "To store cookies", "optionB": "To store data with no expiration time", "optionC": "To store data with session expiration", "optionD": "To store server-side data", "answer": "To store data with no expiration time"},
    {"question": "Which operator is used for strict equality in JavaScript?", "optionA": "==", "optionB": "===", "optionC": "!=", "optionD": "!==", "answer": "==="},
    {"question": "What does the 'this' keyword refer to in JavaScript?", "optionA": "The current function", "optionB": "The global object", "optionC": "The calling object", "optionD": "The parent object", "answer": "The calling object"},
    {"question": "What is the purpose of the 'JSON.stringify()' method in JavaScript?", "optionA": "To parse a JSON string", "optionB": "To convert a JavaScript object to a JSON string", "optionC": "To extract data from a JSON object", "optionD": "To validate a JSON string", "answer": "To convert a JavaScript object to a JSON string"},
    {"question": "Which event is triggered when a user clicks the mouse button?", "optionA": "onmouseover", "optionB": "onmousedown", "optionC": "onclick", "optionD": "onmouseup", "answer": "onclick"},
    {"question": "How do you declare a JavaScript object?", "optionA": "var myObject = {}", "optionB": "object myObject = {}", "optionC": "let myObject = {}", "optionD": "myObject = []", "answer": "var myObject = {}"},
    {"question": "What is the purpose of the 'filter()' method in JavaScript?", "optionA": "To create a new array with all elements that pass a test", "optionB": "To remove elements from an array", "optionC": "To sort the elements of an array", "optionD": "To map elements of an array to a new array", "answer": "To create a new array with all elements that pass a test"},
    {"question": "Which statement is used to jump out of a loop in JavaScript?", "optionA": "end", "optionB": "exit", "optionC": "break", "optionD": "terminate", "answer": "break"},
    {"question": "What is the purpose of the 'toUpperCase()' method in JavaScript?", "optionA": "To convert a string to lowercase", "optionB": "To convert a string to uppercase", "optionC": "To capitalize the first letter of a string", "optionD": "To reverse the characters of a string", "answer": "To convert a string to uppercase"}
]

var C = [
    {"question": "What does 'C' stand for in C programming?", "optionA": "Computing", "optionB": "Complex", "optionC": "Computer", "optionD": "Central", "answer": "Computer"},
    {"question": "Which function is used to print a message to the standard output in C?", "optionA": "print()", "optionB": "display()", "optionC": "printf()", "optionD": "output()", "answer": "printf()"},
    {"question": "How do you declare an integer variable named 'num' in C?", "optionA": "int num;", "optionB": "integer num;", "optionC": "num = int;", "optionD": "var num;", "answer": "int num;"},
    {"question": "What is the correct syntax for a 'for' loop in C?", "optionA": "for (int i = 0; i < 10; i++) { }", "optionB": "for (i = 0; i < 10; i++) { }", "optionC": "loop (i = 0; i < 10; i++) { }", "optionD": "for i in range(10):", "answer": "for (int i = 0; i < 10; i++) { }"},
    {"question": "Which escape sequence is used for a newline character in C?", "optionA": "\\n", "optionB": "\\t", "optionC": "\\r", "optionD": "\\b", "answer": "\\n"},
    {"question": "How do you declare a constant in C?", "optionA": "const int x = 5;", "optionB": "constant x = 5;", "optionC": "int constant x = 5;", "optionD": "const x = 5;", "answer": "const int x = 5;"},
    {"question": "What is the purpose of the 'scanf()' function in C?", "optionA": "To print formatted output", "optionB": "To read formatted input", "optionC": "To allocate memory", "optionD": "To perform mathematical operations", "answer": "To read formatted input"},
    {"question": "Which operator is used for the remainder of a division operation in C?", "optionA": "%", "optionB": "/", "optionC": "*", "optionD": "&", "answer": "%"},
    {"question": "What is the purpose of the 'break' statement in a 'switch' statement?", "optionA": "To exit the program", "optionB": "To exit the loop", "optionC": "To exit the switch statement", "optionD": "To print a message", "answer": "To exit the switch statement"},
    {"question": "In C, how do you allocate dynamic memory?", "optionA": "malloc()", "optionB": "allocate()", "optionC": "memory_alloc()", "optionD": "new()", "answer": "malloc()"},
    {"question": "What is the correct way to include the standard input/output library in C?", "optionA": "#include <stdio.h>", "optionB": "#include <iostream>", "optionC": "#import <stdio.h>", "optionD": "#import <iostream>", "answer": "#include <stdio.h>"},
    {"question": "How do you declare a character array in C?", "optionA": "array char[10];", "optionB": "char array[10];", "optionC": "char[10] array;", "optionD": "array = char[10];", "answer": "char array[10];"},
    {"question": "What is the purpose of the 'strcmp()' function in C?", "optionA": "To concatenate two strings", "optionB": "To compare two strings", "optionC": "To find the length of a string", "optionD": "To convert a string to uppercase", "answer": "To compare two strings"},
    {"question": "How do you define a structure in C?", "optionA": "define struct { };", "optionB": "struct = { };", "optionC": "struct { };", "optionD": "structure = { };", "answer": "struct { };"},
    {"question": "What is the purpose of the 'typedef' keyword in C?", "optionA": "To declare a new variable", "optionB": "To define a new type", "optionC": "To allocate memory", "optionD": "To create a function", "answer": "To define a new type"},
    {"question": "Which header file is needed for file input/output operations in C?", "optionA": "#include <stdlib.h>", "optionB": "#include <fileio.h>", "optionC": "#include <stdio.h>", "optionD": "#include <file.h>", "answer": "#include <stdio.h>"},
    {"question": "What is the purpose of the 'fopen()' function in C?", "optionA": "To format text output", "optionB": "To open a file for reading or writing", "optionC": "To close a file", "optionD": "To create a new file", "answer": "To open a file for reading or writing"},
    {"question": "How do you declare a pointer in C?", "optionA": "pointer *ptr;", "optionB": "ptr *pointer;", "optionC": "int *ptr;", "optionD": "int ptr;", "answer": "int *ptr;"},
    {"question": "What is the purpose of the 'free()' function in C?", "optionA": "To release allocated memory", "optionB": "To print a message", "optionC": "To exit the program", "optionD": "To open a file", "answer": "To release allocated memory"},
    {"question": "What is the correct syntax for a 'do-while' loop in C?", "optionA": "do { } while (condition);", "optionB": "while (condition) { } do;", "optionC": "for (int i = 0; i < 10; i++) { }", "optionD": "do while (condition) { }", "answer": "do { } while (condition);"},
    {"question": "Which operator is used to access the value pointed to by a pointer in C?", "optionA": ".", "optionB": "->", "optionC": "*", "optionD": "&", "answer": "*"},
    {"question": "What is the purpose of the 'getchar()' function in C?", "optionA": "To get a character from the standard input", "optionB": "To print a character to the standard output", "optionC": "To concatenate two strings", "optionD": "To compare two characters", "answer": "To get a character from the standard input"},
    {"question": "How do you define a constant pointer in C?", "optionA": "const *int ptr;", "optionB": "int const *ptr;", "optionC": "const int *ptr;", "optionD": "const ptr *int;", "answer": "const int *ptr;"},
    {"question": "What is the purpose of the 'putc()' function in C?", "optionA": "To print a character to the standard output", "optionB": "To concatenate two characters", "optionC": "To put a character to the standard output", "optionD": "To release allocated memory", "answer": "To put a character to the standard output"},
    {"question": "Which library function is used to find the square root of a number in C?", "optionA": "sqrt()", "optionB": "root()", "optionC": "sqr()", "optionD": "squareRoot()", "answer": "sqrt()"},
    {"question": "What is the purpose of the 'rand()' function in C?", "optionA": "To generate a random number", "optionB": "To round a floating-point number", "optionC": "To concatenate two strings", "optionD": "To allocate memory", "answer": "To generate a random number"},
    {"question": "Which operator is used to access the address of a variable in C?", "optionA": "&", "optionB": "*", "optionC": ".", "optionD": "->", "answer": "&"},
    {"question": "What is the purpose of the 'strcat()' function in C?", "optionA": "To compare two strings", "optionB": "To copy one string to another", "optionC": "To concatenate two strings", "optionD": "To find the length of a string", "answer": "To concatenate two strings"},
    {"question": "How do you define a multi-dimensional array in C?", "optionA": "int array[3,3];", "optionB": "int array[3][3];", "optionC": "array[3][3] = {};", "optionD": "array = int[3][3];", "answer": "int array[3][3];"}
]



var quizset = new Array
var score = 0
var question = document.getElementById('question')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')
var scorecard = document.getElementById('score')
var quizbox = document.getElementById('quizbox')
scorecard.textContent = score


function quizequestion(count){
    question.textContent = quizset[count].question
    opt1.textContent = quizset[count].optionA
    opt2.textContent = quizset[count].optionB
    opt3.textContent = quizset[count].optionC
    opt4.textContent = quizset[count].optionD
}
var questionnum = 1
// quizequestion(questionnum-1)

function newquestion(){
    opt1.style.backgroundColor = "";
    opt1.style.color = "";
    opt2.style.backgroundColor = "";
    opt2.style.color = "";
    opt3.style.backgroundColor = "";
    opt3.style.color = "";
    opt4.style.backgroundColor = "";
    opt4.style.color = "";
    questionnum+=1
    quizequestion(questionnum-1)
    if(questionnum==30){
        var quizbox = document.getElementById('quizbox')
        quizbox.style.display = "none"
        var endboard = document.getElementById('endboard')
        endboard.style.display="flex"
        finalscore = document.getElementById("finalscore")
        finalscore.textContent = score
    }
}
function addscore(){
    score += 10
    scorecard.textContent = score
}



function checkanswer(inpans) {
    let answer = quizset[questionnum - 1].answer; // Use questionnum - 1 to get the correct question
    if (answer === inpans.textContent) {
        inpans.style.backgroundColor = "green";
        inpans.style.color = "white";
        addscore()
        setTimeout(newquestion, 800)
    }
    else {
        inpans.style.backgroundColor = "red";
        inpans.style.color = "white";
        setTimeout(newquestion, 1000)
    }
}
var chooser = document.getElementById('chooser')
function choosecat(cat){
    
    if(cat.textContent=="HTML"){
        quizset = HTML
    }
    else if(cat.textContent=="PYTHON"){
        quizset = PYTHON
    }
    else if(cat.textContent=="JAVASCRIPT"){
        quizset = JAVASCRIPT
    }
    else if(cat.textContent=="C"){
        quizset = C
    }
    cat.parentElement.parentElement.style.display = "none"
    quizbox.style.display = "flex"
    quizequestion(questionnum-1)
}
