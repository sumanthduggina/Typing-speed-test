// Questions for java

const javaQuestions = [
    {
      correctAnswer: 'To define an anonymous function',
      options: ['To represent an instance of a class', 'To create a new object ', 'To define an anonymous function', 'To declare a constant value'],
      question:
        "What is the purpose of a lambda expression in Java?",
    },
    {
      correctAnswer: 'Multiple inheritance',
      options: [
        'Multiple inheritance',
        'Multithreading',
        'Polymorphism',
        'Encapsulation',
      ],
      question:
        "Which Java feature allows you to implement multiple interfaces in a single class?",
    },
    {
      correctAnswer: 'It indicates that the variables value may change asynchronously.',
      options: [
        'It ensures that the variable is immutable.',
        'It prevents the variable from being accessed by multiple threads simultaneously.',
        'It indicates that the variables value may change asynchronously.',
        'It enforces strict type checking for the variable.',
      ],
      question:
        "In Java, what is the purpose of the volatile keyword when applied to a variable?",
    },
    {
      correctAnswer: 'StringBuilder provides better performance for string concatenation.',
      options: [
        'StringBuilder is more memory-efficient.',
        'StringBuilder is immutable.',
        'StringBuilder allows for in-place modification of strings.',
        'StringBuilder provides better performance for string concatenation.',
      ],
      question: 'What is the primary advantage of using the "StringBuilder" class over the "String" class for manipulating strings?',
    },
    {
      correctAnswer: 'A way to create generic types for use with collections and classes',
      options: [
        'A way to create generic types for use with collections and classes',
        'A programming language feature for creating new data types',
        'A method for dynamically allocating memory at runtime',
        'A feature for defining abstract classes',
      ],
      question:
        "What does the term generics refer to in Java?",
    },
    {
        correctAnswer: 'TreeMap',
        options: ['HashSet', 'TreeMap', 'ArrayList', 'LinkedHashMap'],
        question:
          "Which of the following Java collections ensures that elements are stored in ascending order?",
      },
      {
        correctAnswer: 'It indicates that the field should be excluded from serialization.',
        options: ['It indicates that the field should be excluded from serialization.', 'It specifies that the fields value cannot be changed after initialization.', 'It enforces that the field is thread-safe.', 'It marks the field as a constant.'],
        question:
          "What is the purpose of the transient keyword when applied to a class field in Java?",
      },
      {
        correctAnswer: 'An exception that must be explicitly caught or declared',
        options: ['An exception that occurs at runtime', 'An exception that must be explicitly caught or declared', 'An exception caused by memory allocation errors', 'An exception that is never thrown in practice'],
        question:
          "In Java, what is a checked exception?",
      },
      {
        correctAnswer: 'Singleton',
        options: ['Singleton', 'Factory ', 'Observer', 'Decorator'],
        question:
          "Which design pattern is used to ensure a class has only one instance and provides a global point of access to that instance?",
      },
      {
        correctAnswer: 'It indicates that the class cannot be subclassed.',
        options: ['It indicates that the class cannot be subclassed.', 'It makes all methods in the class final.', 'It prevents the class from being instantiated.', 'It specifies that the class is abstract.'],
        question:
          "What does the final keyword do when applied to a class in Java?",
      },
  ];

//   C Questions
const cQuestions= [
    {
      correctAnswer: 'It indicates that the variables value may change asynchronously.',
      options: ['It specifies that the variable cannot be modified.', 'It ensures that the variable is initialized to zero.', 'It indicates that the variables value may change asynchronously.', 'It enforces strict type checking for the variable.'],
      question:
        "In C, what is the purpose of the volatile keyword when applied to a variable?",
    },
    {
      correctAnswer: 'dynamic',
      options: [
        'auto',
        'register',
        'static',
        'dynamic',
      ],
      question:
        "Which of the following is not a valid storage class specifier in C?",
    },
    {
      correctAnswer: '"calloc" initializes the memory to zero, while "malloc" does not.',
      options: [
        '"malloc" initializes the memory to zero, while "calloc" does not.',
        '"calloc" initializes the memory to zero, while "malloc" does not.',
        'There is no difference between "malloc" and "calloc."',
        '"malloc" and "calloc" cannot be used for memory allocation in C.',
      ],
      question:
        'In C, what is the difference between "malloc" and "calloc" when allocating memory?',
    },
    {
      correctAnswer: 'It specifies that the variable is constant and cannot be modified.',
      options: [
        'It specifies that the variable is constant and cannot be modified.',
        'It enforces that the variable must be initialized when declared.',
        'It allows the variable to have a varying value.',
        'It prevents the variable from being used in arithmetic operations.',
      ],
      question: 'What does the "const" keyword indicate in C when applied to a variable?',
    },
    {
      correctAnswer: 'It specifies that the variable is automatic and will be initialized to zero.',
      options: [
        'It specifies that the variable is automatic and will be initialized to zero.',
        'It indicates that the variable should be stored in the CPU register.',
        'It enforces strict type checking for the variable.',
        'It specifies that the variable is a constant and cannot be modified.',
      ],
      question:
        "In C, what is the purpose of the 'auto' keyword when declaring a variable within a function?",
    },
    {
        correctAnswer: 'To calculate the size of a variable or data type in bytes',
        options: [
          'To calculate the size of an array',
          'To determine the number of elements in an array',
          'To calculate the size of a variable or data type in bytes',
          'To find the largest element in an array',
        ],
        question: 'In C, what is the purpose of the "sizeof" operator?',
      },
      {
        correctAnswer: '"fwrite" is used for binary data, while "fputs" is used for text data.',
        options: [
          '"fwrite" is used for binary data, while "fputs" is used for text data.',
          '"fwrite" is used for text data, while "fputs" is used for binary data.',
          'There is no difference between "fwrite" and "fputs."',
          '"fwrite" and "fputs" cannot be used for file output in C.',
        ],
        question: 'What is the difference between "fwrite" and "fputs" in C when writing to a file?',
      },
      {
        correctAnswer: 'malloc',
        options: [
          'malloc',
          'calloc',
          'realloc',
          'free',
        ],
        question: 'In C, which function is used to dynamically allocate memory for an array of elements?',
      },
      {
        correctAnswer: 'It terminates the loop and continues with the next iteration.',
        options: [
          'It terminates the loop and continues with the next iteration.',
          'It exits the program.',
          'It generates a runtime error.',
          'It skips the current iteration and continues with the next one.',
        ],
        question: 'What does the "break" statement do when used within a loop in C?',
      },
      {
        correctAnswer: 'decimal',
        options: [
          'float',
          'double',
          'long long',
          'decimal',
        ],
        question: 'Which of the following is not a valid data type in C?',
      },
  ];

//sql qusetions
const sqlQuestions= [
  {
    correctAnswer: 'The process of organizing data in a database efficiently',
    options: ['The process of organizing data in a database efficiently', 'The process of sorting data in ascending order', 'The process of creating primary keys for all tables', 'The process of adding indexes to all columns in a table'],
    question:
      'In SQL, what does the term "Normalization" refer to?',
  },
  {
    correctAnswer: 'A function that operates on each row individually in a result set',
    options: [
      'A function that operates on each row individually in a result set',
      'A function used for sorting rows in a table',
      'A function that groups rows based on a specified column',
      ' A function used to update data in a table',
    ],
    question:
      'In SQL, what does the term "window function" refer to?',
  },
  {
    correctAnswer: 'CREATE TABLE',
    options: [
      'CREATE INDEX',
      'CREATE TABLE',
      'CREATE CONSTRAINT',
      'CREATE RELATIONSHIP',
    ],
    question:
      'Which SQL statement is used to define constraints that enforce referential integrity between two tables?',
  },
  {
    correctAnswer: 'To check if any rows exist in the result of a subquery',
    options: [
      'To check if a table exists in the database',
      'To determine if a column exists in a table',
      'To check if any rows exist in the result of a subquery',
      'To check if a database exists on the server',
    ],
    question: 'In SQL, what is the purpose of the "EXISTS" keyword in a subquery?',
  },
  {
    correctAnswer: 'GRANT',
    options: [
      'GRANT',
      'ALLOW',
      'PERMIT',
      'AUTHORIZE',
    ],
    question:
      'Which SQL statement is used to grant specific privileges on a database object to a user or role?',
  },
  {
    correctAnswer: 'To insert, update, or delete data in a target table based on the results of a source query',
    options: [
      'To merge two or more tables into a single table',
      'To insert, update, or delete data in a target table based on the results of a source query',
      'To combine rows from multiple tables into a single result set',
      'To create a new table by joining two existing tables',
    ],
    question: 'What is the purpose of the SQL "MERGE" statement?',
  },
  {
    correctAnswer: 'DROP TABLE',
    options: [
      'DROP TABLE',
      'DELETE TABLE',
      'REMOVE TABLE',
      'TRUNCATE TABLE',
    ],
    question: 'Which SQL statement is used to remove a table and all of its data from the database permanently?',
  },
  {
    correctAnswer: 'To roll up summary values in a result set, producing subtotals and a grand total',
    options: [
      'To roll back changes made to the database',
      'To roll up summary values in a result set, producing subtotals and a grand total',
      'To roll over to the next page of query results',
      'To roll up the scroll bar in a database query tool',
    ],
    question: 'What is the purpose of the SQL "ROLLUP" operator in a GROUP BY clause?',
  },
  {
    correctAnswer: 'To conditionally transform data in a query',
    options: [
      'To create a new table',
      'To define a foreign key constraint',
      'To conditionally transform data in a query',
      'To define a primary key constraint',
    ],
    question: 'In SQL, what is the purpose of the "CASE" statement?',
  },
  {
    correctAnswer: 'To retrieve sensitive information from a database',
    options: [
      'To retrieve sensitive information from a database',
      'To delete all data from a database',
      'To create new database tables',
      'To increase the performance of a database',
    ],
    question: 'What is the primary purpose of SQL injection attacks?',
  },
];
//JavaScript  questions
const JavaScriptQuestions= [
    {
      correctAnswer: 'To create a new array by applying a function to each item in an existing array',
      options: ['To iterate over the properties of an object', 'To create a new array by applying a function to each item in an existing array', 'To filter elements from an array based on a condition', 'To remove duplicate items from an array'],
      question:
        "What is the purpose of the JavaScript map function?",
    },
    {
      correctAnswer: 'null represents the absence of a value assigned intentionally, while undefined represents the absence of a value that has not been assigned.',
      options: ['They are the same and can be used interchangeably.', 'null represents the absence of a value assigned intentionally, while undefined represents the absence of a value that has not been assigned.', 'null is a number, while undefined is a string.', 'null is a reference error, while undefined is a syntax error.'],
      question:
        "What is the difference between null and undefined in JavaScript?",
    },
    {
      correctAnswer: '===',
      options: ['==', '===', '=', '!='],
      question:
        "Which JavaScript operator is used for strict equality (both value and type must match)?",
    },
    {
      correctAnswer: 'To execute a function after a specified delay',
      options: ['To create a recursive function', 'To execute a function after a specified delay', 'To pause the execution of a function', 'To set the interval for a loop'],
      question:
        "What is the purpose of the JavaScript setTimeout function?",
    },
    {
      correctAnswer: 'class MyClass {}',
      options: ['class MyClass = {}', 'function MyClass() {}', 'class MyClass {}', 'prototype MyClass {}'],
      question:
        "How do you define a JavaScript class using ES6 syntax?",
    },
    {
      correctAnswer: 'To handle exceptions and errors',
      options: ['To define a function', 'To declare a variable', 'To handle exceptions and errors', 'To create a loop'],
      question:
        "What is the purpose of the JavaScript try...catch statement?",
    },
    {
      correctAnswer: 'pop()',
      options: ['push()', 'pop()', 'shift()', 'unshift()'],
      question:
        "Which JavaScript method is used to remove an item from the end of an array?",
    },
    {
      correctAnswer: 'document.getElementById("myElement").textContent = "New Text";',
      options: ['document.getElementById("myElement").innerHTML = "New Text";', 'document.getElementById("myElement").textContent = "New Text";', 'document.getElementById("myElement").text = "New Text";', 'document.getElementById("myElement").value = "New Text";'],
      question:
        "How can you change the text content of an HTML element with the ID 'myElement' using JavaScript?",
    },
    {
      correctAnswer: 'Create a new HTML element',
      options: ['Create a new JavaScript function', 'Create a new HTML element', 'Create a new CSS class', 'Create a new JSON object'],
      question:
        "What does the document.createElement method in JavaScript allow you to do?",
    },
    {
      correctAnswer: 'appendChild',
      options: ['appendChild', 'createChild', 'addNode', 'insertChild'],
      question:
        "To append a child element to another element in the DOM using JavaScript, which method should you use?",
    },
    
    
  ];
     
      let score=0;
      let currentQuestion = 0;
       //Accessing all the elements:
       const questionEl = document.getElementById("question");
       const optionEl = document.getElementById("options");
       const scoreEl = document.getElementById("score");
       const nextEl=document.getElementById("next");
       const disclaimerEl=document.getElementById("disclaimer");
//   Showing all the skills
showSKills();
let questions=null;
function showSKills(){
    const skills = ["C", "Java", "Javascript","Sql"];
    questionEl.textContent="Choose the skill you wish to put yourself to the test with.";
   
    skills.forEach((skill)=>{
        document.getElementById("next").style.display = "none";
        const btn=document.createElement('button');
        btn.textContent=skill;
        optionEl.appendChild(btn);
        btn.addEventListener("click", () => {
            optionEl.textContent = '';
            if(skill=='Java'){
                questions=javaQuestions;
                showQuestion();
            }
            else if(skill=='C'){
            questions=cQuestions;
            showQuestion();
            }
            else if(skill=='Sql'){
              questions=sqlQuestions;
              showQuestion();
              }
              else if(skill=='Javascript'){
                questions=JavaScriptQuestions;
                showQuestion();
                }
            });
            
    })
}

    
    // next
    nextEl.addEventListener('click',nextQuestion);

      function showQuestion(){
        disclaimerEl.textContent="The score is increased by 1 for each right response and decreased by 0.25 for each incorrect response. If you are unsure about the precise response, you can skip it by clicking next.";
 
         // Destructuring the object
       const{correctAnswer, options, question} = questions[currentQuestion];
  
        //Setting question text content
      questionEl.textContent = question; 
      
      const shuffledOptions = shuffleOptions(options);
          //Populating the Options div with the buttons.
          shuffledOptions.forEach((opt) => {
            const btn = document.createElement('button');
            btn.textContent = opt;
            optionEl.appendChild(btn);
            document.getElementById("next").style.display = "block";
        // Event handling on the button:
        btn.addEventListener("click", () => {
            if(opt === correctAnswer){
                score++;
            }
            else{
                score=score-0.25;
            }   
           
        scoreEl.textContent = `Score: ${score}/${questions.length}`;
        nextQuestion();
            });
        });
    }
    function nextQuestion(){
      currentQuestion++;
     optionEl.textContent = '';
      if(currentQuestion>=10){
        questionEl.textContent = 'Quiz Completed!!';
        disclaimerEl.textContent='';
        nextEl.remove();
      } 
      else{
           showQuestion();
      }
  
    }
  
  //Shuffling the Options
  function shuffleOptions(options) {
      for (let i = options.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * i + 1);
        [options[i], options[j]] = [
          options[j],
          options[i],
        ];
      }
      return options;
    }
