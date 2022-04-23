                                                            
                                                            Lab: Conditional constructions
                                                            
                                  Problems for in-class and homework exercises for the course 
                                  "Fundamentals of Programming" @ SoftUni.
                                  Test your solutions in the Judge system: 
                                  https://judge.softuni.org/Contests/2401/Conditional-Statements-Lab
                                  
                            					Excellent grade
								
	The first assignment in this chapter is to write a function that reads an estimate taken as an argument
	and prints "Excellent!" if the estimate is 5.50 or higher.
	
	input   output       input   output        input      output       input      output
	(["6"]) Excellent!   (["5"]) (no output)   (["5.50"]) Excellent!   (["5.49"]) (no output)
	
	Guidelines
	Create a new JavaScript file in the existing folder and name it appropriately.
	It is recommended to name each script file as the name of the problem whose solution it contains.
	The contents of the new file will open in the window on the right.
	Go to the file isExcellent.js and create the function isExcellent(input).
	Make a check for the value of the estimate. If it is greater than or equal to 5.50 print the output as provided
	Call the function with different input values and run it with Ctrl+F5
	
								The larger number
								
	Write a function that gets two integers and prints the larger of the two. 
	Sample input and output
	
	input 	      output, input         output,  input          output, input         output
	(["5", "3"]) -> 5    (["3", "5"]) -> 5      (["10", "10"]) -> 10   (["-5", "5"]) -> 5
	
	Guidelines
	Compare whether the first number num1 is greater than the second number num2. Print the larger number.
	
								Even or odd
								
	Write a function that takes an integer as an argument and prints to the console whether it is even or odd. 
	If even print "even", if odd print "odd".
	Sample input and output
	
	input   output   input   output   input    output   input      output
	(["2"]) even     (["3"]) odd      (["25"]) odd      (["1024"]) even
	
	Guidelines
	First add a new JavaScript file to the existing project
	Check if the number is even by dividing it by 2 and checking if there is a remainder from the division.
	Print the output according to the condition - the text "even" or "odd".
	
								Guess the password
								
	Write a function that receives a password (text) and checks if the given password matches the phrase "s3cr3t!P@ssw0rd".
	If matched, display "Welcome". If it does not match, display "Wrong password!". 
	Sample input and output
	
	input        output             input                 output     input             output
	(["qwerty"]) Wrong password!    (["s3cr3t!P@ssw0rd"]) Welcome    (["s3cr3t!p@ss"]) Wrong password!
	
								Number from 100 to 200
								
	Write a function that gets an integer and checks whether it is below 100, between 100 and 200, or above 200. If the number is:
	less than 100 print: "Less than 100"
	between 100 and 200 print: "Between 100 and 200"
	over 200 print: "Greater than 200"
	Sample input and output
	
	input    output          input     output                 input output
	(["95"]) Less than 100   (["120"]) Between 100 and 200    (["210"]) Greater than 200
	
								Speed information
								
	Write a function that gets a velocity (a real number) and prints the velocity information. 
	For speed up to 10 (inclusive) print "slow"
	For speeds above 10 and up to 50 (inclusive) print "average" 
	At speeds above 50 and up to and including 150, print "fast"
	At speeds above 150 and up to and including 1000, print "ultra fast" 
	At higher speed print "extremely fast"
	Sample input and output
	
	input   output     input      output    input     output
	(["8"]) slow       (["49.5"]) average   (["126"]) fast

	input     output        input      output
	(["160"]) ultra fast    (["3500"]) extremely fast
	
	
									Faces of figures
									
	Write a function that obtains the type and dimensions of a geometric figure and computes its face. 
	There are four types of shapes: square, rectangle, circle, and triangle. 
	The first line of the input reads the type of shape (text with the following options: square, rectangle, circle or triangle). 
	If the shape is square: the next line reads a fractional number - the length of its side
	If the figure is a rectangle: the next two lines read two fractional numbers - the lengths of its sides
	If the figure is a circle: the next line reads one fractional number - the radius of the circle
	If the figure is a triangle: the next two lines read two fractional numbers - the length of its side and the length of the height to it
	Round the result to 3 decimal places. 
	Sample input and output
	input             output   input                     output  input            output    input                     output
	(["square", "5"]) 25.000   (["rectangle","7","2.5"]) 17.500  (["circle","6"]) 113.097   (["triangle","4.5","20"]) 45.000
	




"20"]) 45.000
