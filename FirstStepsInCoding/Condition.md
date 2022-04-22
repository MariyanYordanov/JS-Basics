                                                            Getting started in programming
                                                            
                                    Problems for in-class and homework exercises for the course 
				    "Fundamentals of Programming" @ SoftUni.
                                    
                                    Test your solutions in the online judge system: 
				    https://judge.softuni.org/Contests/Compete/Index/2399 
				    
							Blank Visual Studio Code project

		Create an empty project in Visual Studio Code. We will merge the solutions of all tasks as separate files in this project.
	This feature is extremely handy when we want to work on multiple projects and quickly switch between them,
	or we want to logically merge several interrelated projects. This helps us to keep the task solutions separate and keep them 
	to use for other tasks or renegotiation.
	
		Run Visual Studio Code
		Create a new folder that will hold the individual solutions. 
	A dialog will open where you will need to select its directory. 
	It is recommended that you name the folder according to the task topic, example "First-Steps-in-Calculations"
	Then select the folder as your working environment to add the JavaScript solution files of your assignments to it. 
	The panel on the left will look like this:
 
							Console program "Hello SoftUni"
						
		Write a function that prints the text "Hello SoftUni".
	Guidelines
	Create a new JavaScript file in the existing folder and name it appropriately.
	It is recommended to name each script file as the name 
	of the task whose solution it contains.
	The contents of the new file will open in the window on the right.
	Go to the hello.js file and create the hello() function. You can help yourself with the image below: 
	Run the program with: Ctrl + F5. To get the result we need to "call" the function:
	We can see the result in the console below:
	Test the solution of this problem in the online Judge system
 
 
							Numbers from 1 to 10
							
	Write a function that prints the numbers 1 to 10 on separate lines on the console.
	Guidelines
	Create a new JavaScript file in the existing folder and name it "Nums-1-To-10". Use the body of the "nums1To10()" function:
	function nums1To10() {
    	// Your code goes here
	}

	// Call the function to execute the code inside
	nums1To10();
	
	Write 10 console.log() commands, one after the other, to print the numbers 1 through 10.
	Run the program with Ctrl + F5. To get the result you need to "call" the function.	


						Calculate the face of a square

	Write a function that gets an integer and computes the face of the square given the side. 
	Sample input and output
	input output
	(["5"]) 25
	Guidelines
	Take an input (a number in string form) and store it in the variable a, converting it to a numeric type. 
	Initialize a variable that holds the computed face value obtained by the formula
 	a * a and print the result, remembering that to get the result locally you must call the function and pass it input.

 
							Converter: inches to centimetres
							
	Write a function that reads a real number from the console and converts it from inches to centimeters. To do this, multiply
	the inches
	by 2.54 (1 inch = 2.54 centimeters).
	Sample input and output
	input output
	["5"] 12.7
	input output
	["7"] 17.78

	Caution: depending on the regional settings of the operating system, a decimal point (US settings) may be used instead of the
	decimal point (BG settings) may be used. If the program expects a decimal point and a decimal number is entered or vice versa
	(a decimal point is entered when a decimal point is expected), it will not be able to execute.
	It is recommended that you change the settings on your computer so that a decimal point is used:
 
 
								Greeting by name
								
	Write a function that receives a person's name and prints "Hello, <name>!", where <name> is the name entered from the console.
	Guidelines
	First, create a new JavaScript file in the existing folder and name it appropriately. It is recommended to name each script file,
	as the name of the task whose solution it contains.
	The contents of the new file will open in the window on the right
 	Create the variable name and store in it the name passed by (input).
	Display the output on the console using the following template
 
	How does the example work? The console.log() method allows us to write a sequence of characters that hold the value in round brackets
	of a variable - ${name} and prints it to the console.
	Note that for this to work, the text must be surrounded by the ` character, which recognizes plain text and a variable. In order to
	be recognized
	a variable as such, it must begin with the $ symbol and be enclosed in curly braces : { } .
	Run the program with Ctrl + F5 and test with different input examples. 
	To get the result we need to "call" the function and pass it input:
	Test your solution in judge without including the function call.

							Concatenating text and numbers
							
 	Write a function that gets: first name, last name, age, and city and prints a message of the following form: 
	"You are <firstName> <lastName>, a <age>-year-old person from <town>."
	Guidelines
	Add another JavaScript file named "Concatenate-Data" to the current Visual Studio Code solution.
	Accept the input data from the console:
 
	Display the formatted output on the console.
	Run the program with Ctrl+F5 and test with different input examples. To locally output the result to the console,
	you need to call the function and pass input data in the order you expect to receive it

 
								Preparation of projects
								
	Write a program that calculates how many hours it will take an architect to prepare the designs of several construction sites.
	One project takes three hours to complete.
	Login
	2 lines are read from the console:
	Architect's name - text
	Number of projects to prepare - integer in the range [0 ... 100]
	Output
	On the console is printed:
	"The architect {name of architect} will need {needed hours} hours to complete {number of projects} project/s."
	Sample input and output
	Input Output Input Output
	["George",
	"4 "] The architect George will need 12 hours to complete 4 project/s. ["Sanya ",
	"9 "]
	The architect Sanya will need 27 hours to complete 9 project/s.
	
									Pet Shop
									
	Write a program that calculates the costs needed to buy food for dogs and cats.  The food is purchased from a pet shop,
	where a packet of dog food costs £2.50 and a packet of cat food costs £4.
	Login
	2 lines are read from the console:
	The number of packs of dog food - an integer in the range [0... 100]
	The number of cat food packs - integer in the range [0... 100]
	Output
	The console prints: 
	"{final sum} en."
	Sample input and output
	Input Output Input Output
	["5 ",
	"4 "] 28.5 lv. ["13",
	"9"]
	68.5 lv.
	
								Landscaping of yards
								
	Bojidara has several houses on the Black Sea coast and wants to green the yards of some of them, thus creating a 
	cozy atmosphere and comfort of her guests. Write a program that calculates the necessary amount that Bozidara will
	have to pay to the contractor. The cost per square meter is 7.61 BGN including VAT. Because her yard is quite large,
	the contractor company offers 18% discount on the final price.
	
	Login
	Only one line is read from the console:
	Square meters to be landscaped - real number in the range [0.00 ... 10000.00]
	Output
	Two lines are printed on the console:
	"The final price is: {final service price} lv."
	"The discount is: {discount} lv."
	Sample input and output
	Input Output Explanations
	["550"]
	The final price is: 3432.11 lv.
	The discount is:
	550 * 7.61 = 4185.50 lv.
	We deduct the discount (18% = 0.18) from the total amount:
	0.18 * 4185.5 = 753.39 lv.
	We calculate the final price of the service:
	4185.50 - 753.39 3432.11 lv.
	Input Output	
	["150"]
	The final price is: 936.03 lv.
	The discount is:
	150 * 7.61 = 1141.50 lv.
	We deduct the discount (18% = 0.18) from the total amount:
	0.18 * 1141.50 = 205.47 lv.
	We calculate the final price of the service:
	1141.50 - 205.47 936.03 lv.
