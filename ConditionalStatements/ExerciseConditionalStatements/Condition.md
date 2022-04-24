# Exercise: Conditional constructions
								
						Exercise problems for the course "Fundamentals of Programming" @ SoftUni.
								https://judge.softuni.bg/Contests/Index/2402#0
								
#### Summation of seconds 
									
	Three sports athletes finish in some number of seconds (between 1 and 50). 
	Write a function that takes three arguments, seconds, and calculates their summed times in the format "minutes:seconds". 
	The seconds are to be output with leading zero (2 "02", 7 "07", 35 "35"). 
	
		Input                Output 
	
		(["35","45","44"])   2:04
		(["22", "7","34"])   1:03
		(["50","50","49"])   2:29
		
	Guidelines
	Convert the resulting seconds of strings into numbers.
	Create a new variable to store the sum of the seconds of the three competitors.
 	Once you have found the sum of the seconds you need to convert them into minutes and seconds 
	(for example, if the sum is 85 seconds it is 1 minute and 25 seconds because 1 minute has 60 seconds).
	Create two new variables. In the first, calculate how many minutes the sum of the seconds is,
	by dividing the sum by 60. In the second variable, calculate the seconds by dividing by the remainder (%).
	Use division by remainder (%) to take the remainder when divided by 60, which is the remaining seconds. 
	For example, you have a total of 134 seconds (2 minutes and 14 seconds) after integer division (/) by 60 you would get 2,
	and after dividing by the remainder (%) you get the remaining seconds(14).
	Once you know how many minutes and seconds the total is, you need to print them in the correct format (minutes : seconds),
	if the seconds are less than 10 you need to print 0 before the seconds, otherwise just print the result in the given format.
	To do this, do a check (if). For printing you can use place holder.
	
#### Bonus points
									
	Given an integer, the starting number of points. Bonus points are added to it according to the rules described below. 
	Write a function that calculates the bonus points the number receives and the total number of points (the number + the bonus).
	-If the number is up to and including 100, the bonus points are 5.
	-If the number is greater than 100, the bonus points are 20% of the number.
	-If the number is greater than 1000, the bonus points are 10% of the number.
	
	Additional bonus points (awarded separately from previous bonus points):
	-For an even number + 1 point.
	-For a number ending in 5 + 2 pts.

		Input       Output    
		(["20"])    6         
			    26 
			    
		(["175"])   37
			    212
			    
		(["2703"])  270.3 
			    2973.3
			    
	Guidelines
	
	Convert your string input to a number.
	Create a new variable in which you will calculate your accumulated bonus points, giving it a starting value of 0.0.
	Do an if-else-if statement for the first three checks to check the size of the number and calculate the bonus.
	Make a new if-else-if statement to perform the checks and calculate the additional bonus. 
	If the number is even add 1 to the bonus accumulated so far, and if it ends in 5 add 2 to the bonus.
	To check if a number is even you need to divide it by 2 and if you get a remainder when dividing by 0,
	then the number is even, but if you get a remainder of 1, it means the number is odd. For example, 
	the number 34 is even because 34 / 2 = 17 and the remainder is 0 and the number 35 is odd because 35 / 2 = 17 
	with a remainder of 1. To check if a number ends in 5 you have to divide the number by 10 and if you get a remainder 
	when dividing by 5, then the number ends in 5. For example the number 245 / 10 = 24 with remainder 5.	
	Print the results in two lines. On the first line the accumulated bonus and on the second line the final number 
	you will find by adding the starting number of points and the bonus.
	
#### Time + 15 minutes
									
	Write a function that gets the hour and minutes of a 24-hour day and calculates what the hour will be in 15 minutes.
	Print the result in hours:minutes format. The hours are always between 0 and 23 and the minutes are always between 0 and 59.
	The hours are written in one or two digits. Minutes are always written in two digits, with a leading zero where necessary. 
	
	Input          Output 
	
	(["1", "46"])   2:01               
	(["0", "01"])   0:16
	(["23", "59"])  0:14
	(["11", "08"]) 11:23
	(["12", "49"]) 13:04
	
	
## Sample exam problems
									
#### Toy shop
										
	Petya has a toy shop. She receives a large order that she has to fill. With the money she will earn she wants to go on a trip. 
	Toy prices:
	⦁ Puzzle - BGN 2.60.
	⦁ Talking doll - BGN 3.
	⦁ Teddy bear - BGN 4.10.
	⦁ Minion - BGN 8.20
	⦁ Truck - BGN 2.
	If the ordered toys are 50 or more the shop makes a discount of 25% of the total price. 
	Of the money earned Petya has to give 10% towards the shop rent. 
	Calculate whether the money will be enough for her to go on a trip.
	Login
	6 lines are read from the console:
	⦁ Price of the excursion - a real number in the range [1.00 ... 10000.00]
	⦁ Number of puzzles - integer in the range [0 ... 1000]
	⦁ Number of talking dolls - integer in the range [0 ... 1000]
	⦁ Number of teddy bears - integer in the range [0 ... 1000]
	⦁ Number of minions - integer in the range [0 ... 1000]
	⦁ Number of teddy bears - integer in the range [0 ... 1000]
	Output
	On the console is printed:
	⦁ If the money is enough is printed:
	⦁ "Yes! {remaining money} lv left."
	⦁ If the money is NOT enough is printed:
	⦁ "Not enough money! {not enough money} lv needed."
	
	The result should be formatted to the second decimal place.

	
