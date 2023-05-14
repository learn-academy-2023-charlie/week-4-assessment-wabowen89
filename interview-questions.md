# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is object-oriented programming? How is it different than functional programming?

Your answer: 
    Object-oriented programming is a programming paradigm in which the coder works extensively with objects. Functional programming is working within a framework of functions, their creation, and execution. The key difference between the two would be that functional programming does not seek to work with objects, but rather the creation of unique functions that operate indepedently. Whereas, OOP works with objects whose characteristics and functionality have been baked into it and do not typically utilize functions independently of objects.

Researched answer:
    OOP is a model of programming designed around objects rather than logic or functions. There are four main tenents of OOP and those are Abstraction, Polymorphism, Inheritance, and Encapsulation. This model allows programmers to effectively maintain and scale projects while minimizing complications with intergrating multiple parts. This differs from Functional programming in the sense that functional programming relies the use of independent functions, whereas OOP builds those functions into objects themselves.

2. What is the difference between a Float and an Integer in Ruby?

Your answer:
    An Integer in Ruby is it's own unique datatype. It consists of strictly whole numbers. A Float in Ruby is a separate datatype from Integer and it's make up is of numbers with decimals. As such, you cannot receive an output with a decimal if utilizing strictly Integers (ie: 5 / 2 will result in 2, not 2.5). In order to do so, you would need to implement a Float into the equation at some point (ie: 5 / 2 will result in 2.5. Other examples: 5.0 / 2 = 2.5, or 5.0 / 2.0 = 2.5)

Researched answer:
    An integer in Ruby is a unique class that contains strictly whole numbers. Float is a subclass of the Numeric class and it contains real numbers. While both classes can be utilized in standard mathematical equations, Integer cannot return a Float value on it's own. This can only be accomplished either by using all Float values within the equation, or by integrating Float values with Integer values into the equation.

3. Ruby has an implicit return. What does that mean?

Your answer: 
    Traditionally, a Ruby method operates much in the same way as a function in Javascript. Both require that some datatype is returned when it is invoked. However, where Javascript requires the keyword 'return' to end the function, Ruby does not. This is what is known as an implicit return. It is implied that something will be returned from the method, but it is not explicitly required that a 'return' keyword be utilized.

Researched answer:
    Every method written in Ruby is required to return a particular value or datatype. A unique aspect of Ruby, is that this is built into the structure of the language. As such, a 'return' keyword is not required. The return will always be the last expression in a given path of execution. Therefore, it's return is implied, rather than explicitly stated.

4. What is a block in Ruby?

Your answer:
    A block in Ruby is a blank function used in conjuction with a method that will help modify the behavior of your method. For example, to iterate through a line of code, you could assign a variable with a value (say 5). Then, you could append the variable with the block 'times' using dot notation. This would result in the line of code iterating as many times as you wish (with the given example, it would iterate 5 times).

Researched answer:
    Blocks in Ruby are anonymous function that are passed into other methods. They are always enclosed with a beginning 'do' and ending 'end' statement. They can also be passed arguments, which is acheived by stating the argument name between two pipe (||) characters after block call. These blocks can be used in a variety of ways and allow the developer the freedom to conduct complex operations on code with ease.

5. How do you extract a value in a Ruby hash?

Your answer:
    There are several different ways in which you could extract a value in a Ruby Hash. Hash is built off of key value pairs and this allows the coder to extract data as they need. For example, you can extract a singular value by appending the specific key to the end of the hash through the use of the key symbol (:), bracket notation, and the key name (ie: computers[:apple]). If you wish to see all of the values in a given hash, you could append 'values' to the end of the hash through the use of dot notation (ie: computers.values).

Researched answer:
    A hash in Ruby is a collection of key-value pairs. In order to access a specific value within that hash, you must use the proper notation when calling the hash. This is accomplished by using a combination of bracket notation, a key symbol, and the key name. By appending brackets to a hash and typing in the key symbol (:) along with the key name, you can pull out the specific value associated with that key-value pair. You can also append 'values' to the hash through dot notation in order to return all values associated with that hash.  

## Looking Ahead: Terms for Next Week

1. RSpec:
    RSpec is a tool for Ruby that allows the programmer to run effective tests on their code. It was created for 'Behavior-Driven Development', or BDD. It is a library in Ruby used primarily for production applications.

2. Test-driven development:
    Test-driven development is the parent concept of BDD. The idea is to write the smallest possible test case. Then the programmer runs the test to watch it fail. After a successful fail, the programmer will write a code to make the test pass. This can be done as many times as necessary in order for the test to pass. Once passed, the programmer can then go back and refactor the code as much as needed.

3. PostgreSQL:
    PostgreSQL is a relational database that is advanced, open-source, and enterprise-class system. It supports both SQL and JSON querying. It is also the primary database for several web, mobile, and analytical applications. The central idea behind it is to provide database management for developers.

4. CRUD:
    CRUD stands for Create, Read, Update, and Delete. This is an applications that are commonly used in web development and help ensure the creation of dynamic applications. It can be considered a model of which developers can use to create efficient, dynamic, and sustainable code.

5. HTTP:
    HTTP stands for HyperText Transfer Protocol. It is the foundation of the internet as we know it. Using HTTP allows the user to load webpages on their browser through the use of hypertext links. It functions as a request-response protocol where the user (or client) sends a request to a server which in turns provides the webpage to be displayed.
