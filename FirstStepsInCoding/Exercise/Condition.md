								Getting started in programming
								
				Problems for in-class and homework exercises for the course "Fundamentals of Programming" @ SoftUni.
						Test your solutions in the judge system at the following link:
					https://judge.softuni.org/Contests/2400/First-Steps-In-Coding-Exercise
					
								Converter: USD to BGN
								
	Write a function to convert US dollars (USD) to Bulgarian levs (BGN). Use a fixed rate between USD and BGN: 1 USD = 1.79549 BGN.
	Sample input and output
	
	Input Output Input Output
	(["22"]) 39.50078 (["100"]) 179.549 (["12.5"]) 22.443625

		Guidelines
	Create the variable usd that accepts as input from the console a number in string form and convert it to numeric type.
	Calculate the conversion of US dollars to Bulgarian leva.
	Print the console output.
 
							Converter: from radians to degrees
							
	Write a program that reads an angle in radians (a decimal number) and converts it to degrees. 
	Use the formula: degree = radian * 180 / π. The number π in Java programs is available through Math.PI.
	Sample input and output
	input output input output
	(["3.1416"]) 180.0004209182994 (["6.2832"]) 360.0008418365988

	Guidelines
	Take the input data (radians) and convert it to numeric type
	Create a new variable in which you will do the conversion from radians to degrees,
	knowing the formula for the calculation. Print the resulting degrees
	
 
 								Deposit Calculator
								
	Write a program that calculates how much you will receive at the end of a deposit period at a given interest rate.
	Use the following formula: 
	amount = amount deposited + deposit period * ((amount deposited * annual interest rate ) / 12)
	Login
	3 lines are read from the console:
	Amount deposited - a real number in the range [100.00 ... 10000.00]
	Deposit period (in months) - integer in the range [1...12]
	Annual interest rate - real number in the range [0.00 ...100.00]
	
	Output
	Print the amount at the end of the term on the console.
	
	Sample input and output

	Input      			Output
	["200 ","3 ","5.7 "]    	202.85     
	
	Explanations
	1. Calculate the accumulated interest: 200 * 0.057 (5.7%) = 11.40 BGN.
	2. Calculate the interest for 1 month. 11.40 BGN / 12 months = 0.95 BGN.
	3. The total amount is. + 3 * 0.95 BGN. = 202.85 lv.
	
									Required literature
									
	There are a number of books on Joro's required reading list for summer vacation.
	Since Joro prefers to play outside with friends, your task is to help him calculate
	how many hours a day he should spend reading the required literature.
	Login
	3 lines are read from the console:
	Number of pages in the current book - an integer in the range [1...1000]
	Pages read in 1 hour - integer in the range [1...1000]
	Number of days to read the book - integer in the range [1...1000]
	Output
	Print on the console the number of hours Joro has to spend reading each day.
	
	Input  - ["212","20","2"] 
	Output - 5.3
	
	Explanations
	Total reading time: 212 pages / 20 pages per hour = 10.6 hours total
	Hours required per day: 10.6 hours / 2 days = 5.3 hours per day

								Sample exam problems
								
								Study materials
	The school year has already started and the person in charge of the 10B class,
	Annie, needs to buy a certain number of packets of pens, packets of markers, and board cleaner. 
	She is a regular customer of a bookstore, so there is a discount for her that represents some
	percentage of the total. Write a program that calculates how much money Annie will need to raise 
	to pay the bill, given the following price list: 
	Pack of chemicals - £5.80. 
	Pack of markers - 7.20 lv. 
	Detergent - 1.20 BGN (per liter)
	Login
	4 numbers are read from the console:
	Number of chemical packets - integer in the range [0...100]
	Number of marker packs - integer in the range [0...100]
	Litres of board cleaner - integer in the range [0...50]
	Percentage reduction - integer in the range [0...100]
	Output
	Print on the console how much money Annie will need to pay her bill.
	Sample input and output

	Input  - ["2","3","4","25"]
	Output - 28.5
	
	Comment
	Price of the chemical packages => 2 * 5.80 = 11.60 BGN.
	Price of the marker packs => 3 * 7.20 = 21.60 lv.
	Price of detergent => 4 * 1.20 = 4.80 BGN
	Price for all materials => 11.60 + 21.60 + 4.80 = 38.00 lv.
	25% = 0.25
	Price with discount = 38.00 - (38.00 * 0.25) = 28.50 BGN


								Repainting
								
	Rumen wants to repaint the living room and has hired craftsmen for this purpose.
	Write a program that calculates the cost of the renovation, given the following prices:
	Protective nylon - BGN 1.50 per square meter
	Paint - BGN 14.50 per litre
	Paint thinner - BGN 5.00 per litre
	Just in case, Rumen wants to add another 10% of the amount of paint and 2 sq.m. of nylon,
	of course and 0.40 BGN for bags to the required materials. The amount to be paid to the 
	craftsmen for 1 hour of work is equal to 30% of the sum of all material costs.
	Login
	The input is read from the console and contains exactly 4 lines:
	Required amount of nylon (in sq.m.) - integer in the range [1... 100]
	Required amount of paint (in litres) - integer in the range [1...100]
	Quantity of thinner (in litres) - integer in the range [1...30]
	Hours for which the craftsmen will do the work - integer in the range [1...9]
	Output
	To print one line on the console:
	"{sum of all costs}"
	Sample input and output

	Input  - ["10","11","4","8"]
	Output - 727.09
	
	Comment
	Amount for nylon: (10 + 2) * 1.50 = 18 lv.
	Amount for paint.
	Amount for thinner: 4 * 5.00 = 20.00 lv.
	Amount for bags: 0.40 BGN.
	Total amount for materials: 18 + 175.45 + 20.00 + 0.40 = 213.85 lv.
	Amount for masters: (213.85 * 30%) * 8 = 513.24 BGN.
	Final amount: 213.85 + 513.24 = 727.09 BGN.
	
									Food delivery
									
	The restaurant opens its doors and offers several menus at discounted prices: 
	Chicken menu - BGN 10.35. 
	Fish menu - BGN 12.40. 
	Vegetarian menu - BGN 8.15. 
	Write a program that calculates how much it will cost a group of people to order takeaway food.
	The group will also order a dessert whose cost is equal to 20% of the total bill (excluding delivery). 
	The cost of delivery is £2.50 and is charged at the end.  
	Login
	3 lines are read from the console:
	Number of chicken menus - integer in the range [0 ... 99]
	Number of fish menus - integer in the range [0 ... 99]
	Number of vegetarian menus - integer in the range [0 ... 99]
	Output
	Print one line on the console: "{order price}"
	
	Input  - ["2","4","3"]
	Output - 116.2
	
	Explanations
	Price for the chicken menus: 2 pieces * 10.35 = 20.70
	Price for fish menus: 4 pieces * 12.40 = 49.60
	Price for vegetarian menus: 3 pieces * 8.15 = 24.45
	Total price of the menus: 20.70 + 49.60 + 24.45 = 94.75
	Dessert price: 20% of 94.75 = 18.95
	Delivery price: 2.50 (subject to condition)
	Total order price: 94.75 + 18.95 + 2.50 = 116.20

									Basketball equipment
									
	Jesse decides he wants to play basketball, but he needs equipment to practice. 
	Write a program that calculates what costs Jesse will have if he starts practicing,
	knowing how much the basketball practice fee is for 1 year. Equipment needed: 
	Basketball sneakers - their cost is 40% less than the fee for one year
	Basketball team - the price is 20% cheaper than the sneakers
	Basketball - its price is 1/4 the price of a basketball team
	Basketball accessories - their price is 1 / 5 of the price of the basketball
	Login
	1 line is read from the console:
	Annual basketball training fee - integer in the range [0... 9999]
	Exit
	Print on the console how much Jesse's expenses would be if he started playing basketball.
	
	Input  - ["365"]
	Output - 811.76
	
	Explanations
	Price per year: 365
	Basketball sneakers price: 365 - 40% = 219
	Basketball team price: 219 - 20% = 175.20
	Price per basketball: 1/4 of 175.20 = 43.80
	Price of basketball accessories: 1 / 5 of 43.80 = 8.76
	Total price for the equipment: 365 + 219 + 175.20 + 43.80 + 8.76 = 811.76

									Aquarium
									
	For his birthday, Lubomir received an aquarium in the shape of a parallelepiped. 
	At first we read from the console in separate rows its dimensions - length, width 
	and height in centimeters. We have to calculate how many litres of water the aquarium
	will hold, knowing that a certain percentage of its capacity is taken up by sand, 
	plants, a heater and a pump. 
	One litre of water equals one cubic decimetre / 1l=1dm3/. 
	Write a program that calculates the litres of water needed to fill the aquarium.
	Login
	4 lines are read from the console:
	Length in cm - integer in the range [10 ... 500]
	Width in cm - integer in the range [10 ... 300]
	Height in cm - integer in the range [10 ... 200]
	Percentage - real number in the range [0.000 ... 100.000]
	Output
	Print a number on the console:
	the liters of water the aquarium will collect.
	
	Input  - ["85","75","47","17"]
	Output - 248.68875
	
	Explanations
	Aquarium volume: 85 * 75 * 47 = 299625 cm3
	volume in litres: 299625 * 0.001 or 299625 / 1000 => 299.625 litres
	space occupied: 17% = 0.17
	litres needed: 299.625 * (1 - 0.17) = 248.68875 litres
