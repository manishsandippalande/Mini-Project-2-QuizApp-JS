var questions = [
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

var score = 0
var question = document.getElementById('question')
var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')
var opt4 = document.getElementById('opt4')
var scorecard = document.getElementById('score')
scorecard.textContent = score


function quizequestion(count){
    question.textContent = questions[count].question
    opt1.textContent = questions[count].optionA
    opt2.textContent = questions[count].optionB
    opt3.textContent = questions[count].optionC
    opt4.textContent = questions[count].optionD
}
var questionnum = 1
quizequestion(questionnum-1)

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
    let answer = questions[questionnum - 1].answer; // Use questionnum - 1 to get the correct question
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

