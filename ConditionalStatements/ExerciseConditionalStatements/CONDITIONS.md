# Exercise: Conditional constructions
								
								
#### Summation of seconds 
									
	Three sports athletes finish in some number of seconds (between 1 and 50). 
	Write a function that takes three arguments, seconds, and calculates their summed times in the format "minutes:seconds". 
	The seconds are to be output with leading zero (2 "02", 7 "07", 35 "35"). 
	
		Input                Output 
	
		(["35","45","44"])   2:04
		(["22", "7","34"])   1:03
		(["50","50","49"])   2:29
		
*Guidelines*
	
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
			    
*Guidelines*
	
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

		Input                                  Output
		
		(["40.8","20","25","30","50","10"])    Yes! 418.20 lv left.
		(["320","8","2","5","5","1"])          Not enough money! 238.73 lv needed.
	
*Explanations*
	
	First input
	Sum: 20 * 2.60 + 25 * 3 + 30 * 4.10 + 50 * 8.20 + 10 * 2 = 680 lv.
	Number of toys: 20 + 25 + 30 + 50 + 10 = 135
	135 > 50 => 25% discount; 25% of 680 = 170 BGN discount
	Final price.
	Rent: 10% of 510 BGN. = 51 BGN.
	Profit: 510 - 51 = 459 lv. 
	459 > 40.8 => 459 - 40.8 = 418.20 lv. left
	
	Second input
	Sum: 8 * 2.60 + 2 * 3 + 5 * 4.10 + 5 * 8.20 + 1 * 2 = 90.3 lv.
	Number of toys: 8 + 2 + 5 + 5 + 1 = 21
	21 < 50 => no discount 
	Rent: 10% of 90.3 = 9.03 lv.
	Profit: 90.3 - 9.03 = 81.27 lv.
	81.27 < 320 => 320 - 81.27 = 238.73 BGN not enough


#### Godzilla vs Kong

	Filming for the highly anticipated Godzilla vs Kong movie has begun. 
	Screenwriter Adam Wingard asks you to write a feature that calculates whether the projected 
	funds are enough to make the film. The filming will require a certain number of extras, 
	clothing for each extra and a set.
	It is known that:
	⦁ The decor for the film is worth 10% of the budget. 
	⦁ For more than 150 extras, there is a 10% discount on the clothing.
	Login
	The function receives 3 arguments:
	⦁ Budget for the movie - a real number in the range [1.00 ... 1000000.00]
	⦁ Number of extras - an integer in the range [1 ... 500]
	⦁ Cost per outfit per extra - real number in the range [1.00 ... 1000.00]
	Output
	Two lines should be printed on the console:
	⦁ If the money for the decor and clothes is more than the budget:
	⦁ "Not enough money!"
	⦁ "Wingard needs {money not enough for the film} leva more."
	⦁ If the money for the set and clothes is less than or equal to the budget:
	⦁ "Action!" 
	⦁ "Wingard starts filming with { money left} leva left."
	The result must be formatted to the second decimal place.
		
		Input                           Output
		
		(["20000","120","55.5"])        Action!                                           
					        Wingard starts filming with 11340.00 leva left.
	
		(["15437.62","186","57.99"])    Action!
						Wingard starts filming with 4186.33 leva left.	
	
		(["9587.88","222","55.68"])     Not enough money!
						Wingard needs 2495.77 leva more.
	
*Explanations*
	
	First input
	Amount for decor: 10% of 20000 = 2000 BGN.
	Amount for clothing.
	Total amount for the film.
	20000 - 8660 = 11340 BGN left.
	
	Second input
	Amount for decor: 10% of 15437.62 = 1543.762 lv.
	Amount for clothing.
	There are more than 150 extras therefore there is a 10% discount on clothing.
	10% of 10786.14 is 1078.614
	10786.14 - 1078.614 = 9707.526 lv. for clothing
	Total for the film: 1543.762 + 9707.526 = 11251.288
	15437.62 - 11251.288 = 4186.331 BGN remaining
	
	Third input
	Amount for decor: 10% of 9587.88 = 958.788 lv.
	Amount for clothing.
	Total amount for the film.
	9587.88 - 12083.652 = 2495.77 BGN not enough
	
	
#### World record in swimming

	Ivan decides to improve the World Record in long distance swimming.
	The function gets: the record in seconds that Ivan has to improve, 
	the distance in meters that he has to swim and the time in seconds 
	for which he swims a distance of 1 m. Write a function that calculates
	whether he has done the task, given that: the drag of the water slows 
	him down every 15 m by 12.5 seconds. When calculating how many times 
	Ivancho will slow down as a result of the water resistance, 
	the result should be rounded down to the nearest whole number.
	Calculate the time in seconds it will take Ivancho to swim the 
	distance and the difference to the World Record. 
	Login
	The function receives 3 arguments:
	⦁ The record in seconds - a real number in the interval [0.00 ... 100000.00]
	⦁ The distance in meters - a real number in the range [0.00 ... 100000.00]
	⦁ Time in seconds to swim a distance of 1 m. - real number in the range [0.00 ... 1000.00]
	Output
	The console printout depends on the result:
	⦁ If Ivan has improved the World Record (his time is less than the record) we print:
	⦁ " Yes, he succeeded! The new world record is { Ivan's time} seconds."
	⦁ If he has NOT improved the record (his time is greater than or equal to the record) print:
	⦁ "No, he failed! He was {under-achieving seconds} seconds slower."
	The result should be formatted to the second decimal place.

		Input                         Output
		
		(["10464","1500","20"])       No, he failed! He was 20786.00 seconds slower.
		(["55555.67","3017","5.03"])  Yes, he succeeded! The new world record is 17688.01 seconds.

*Explanations*

	First input
	Ivan has to swim 1500 m: 1500 * 20 = 30000 sec.
	Every 15 m add 12.5 sec. to his time: 
	1500 / 15 = 100 * 12.5 = 1250 sec.
	Total time: 30000 + 1250 = 31250 sec.
	10464 < 31250
	The time he did not have enough to improve the record: 
	31250 - 10464 = 20786 sec.

	Second input
	Ivan has to swim 3017 m: 3017 * 5.03 = 15175.51 sec.
	Every 15 m. 12.5 sec. are added to his time: 
	3017/ 15 = 201 * 12.5 = 2512.50 sec.
	Total time: 15175.51 + 2512.50 = 17688.01 sec.
	Record improved: 55555.67 > 17688.01

#### Shopping 

	Peter wants to buy N video cards, M processors and P number of ram memories.
	If the number of video cards is greater than the number of processors he gets 
	a 15% discount on the final bill. The following prices apply:
	⦁ Video card - 250 BGN/pc.
	⦁ Processor - 35% of the price of purchased video cards/pc.
	⦁ RAM - 10% of the price of the purchased video cards/pc.
	Calculate the amount needed to purchase the materials and calculate if the budget will be enough.
	Login
	The entrance consists of four rows:
	⦁ Peter's budget - a real number in the range [0.0...100000.0]
	⦁ The number of video cards - an integer in the range [0...100]
	⦁ Number of processors - integer in the range [0...100]
	⦁ Number of memory frames - integer in the range [0...100]
	Output
	On the console, 1 line is printed, which should look like this:
	⦁ If the budget is sufficient:
	"You have {sufficient budget} left!"
	⦁ If the amount exceeds the budget:
	"Not enough money! You need {amount needed} leva more!"
	Format the result to the second decimal place.

	Imput                     Output
	(["900","2","1","3"])     You have 198.75 leva left!
	(["920.45","3","1","1"])  Not enough money! You need 3.92 leva more!

*Explanations*

		Budget: 900 BGN
	Amount for video cards: 2 * 250 = 500 BGN
	Cost for processor: 35% of 500 = 175 BGN. 
	Amount for processors: 1 * 175 = 175 lv.
	Price for ram memory: 10% of 500 = 50 BGN.
	Amount for ram memory: 3 * 50 = 150 lv. 
	Total: 500 + 175 + 150 = 825 BGN.
	The number of video cards is greater than the number of processors, 
	so he gets a 15% discount on the final price: 825 - 15% = 701.25 lv.
	701.25 <= 900 
	=> he has enough money 
	=> 900 - 701.25 = 198.75 BGN is left.
	
		Budget: 920.45 BGN
	Amount for video cards: 3 * 250 = 750 lv.
	
	Cost for CPU: 35% of 750 = 262.50 BGN. 
	Amount for processors: 1 * 262.50 = 262.50 lv.
	
	Price for ram memory: 10% of 750 = 75 BGN.
	Amount for ram memory: 1 * 75 = 75 lv. 
	
	Total: 750 + 262.50 + 75 = 1087.50 BGN.
	The number of video cards is greater than the number of processors, 
	so he gets a 15% discount on the final price: 1087.50 - 15% = 924.37 lv.
	924.37 > 920.45
	=> he doesn't have enough money 
	=> 924.375 - 920.45 = 3.92 BGN is needed.
	
#### Lunch break

	During your lunch break you want to watch an episode of your favourite TV show.
	Your task is to write a program that will tell you if you have enough time to watch the episode. 
	During the break you take time for lunch and time for relaxation. 
	The lunch time will be 1/8 of the break time and the recreation time will be 1/4 of the break time. 
	Login
	3 lines are read from the console:
	⦁ Series name - text
	⦁ Episode duration - integer in the range [10... 90]
	⦁ Break duration - integer in the range [10... 120]
	Output
	On the console, type one line:
	⦁ If time is sufficient to view the episode: 
	"You have enough time to watch {series name} and left with {time remaining} minutes free time."
	⦁ If you don't have enough time:
	"You don't have enough time to watch {series name}, you need {time left} more minutes."
	Round the time up to the nearest whole number.
	
	Input                             Output 
	
	(["Game of Thrones","60","96"])   You have enough time to watch Game of Thrones and left with 0 minutes free time.
	(["Teen Wolf","48","60"])         You don't have enough time to watch Teen Wolf, you need 11 more minutes.

*Explanations*

	First input
	Lunch time : 96 * 1/8 = 12.0
	Recreation time : 96 * 1/4 = 24.0
	Time remaining : 96 - 12 - 24 = 60
	The remaining time is greater than or equal to the duration of the episode, hence we print the appropriate output.

	Second input
	Lunch time : 60 * 1/8 = 7.5
	Recreation time : 60 * 1/4 = 15.0
	Time remaining : 60 - 7.5 - 15 = 37.5 
	The remaining time is less than the duration of the episode, hence we print the appropriate output.
