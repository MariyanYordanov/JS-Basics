# Lab: Attachment of conditional constructions

#### Day of the week
	Write a function that receives an integer and prints the day of the week (in English), 
	within [1...7] or prints "Error" in case the entered number is invalid. 
	
*Sample input and output*
	
| Input	   | Output    |
| :------- | :----     |
| (["1"])  | Monday    |
| (["2"])  | Tuesday   |
| (["3"])  | Wednesday |
| (["4"])  | Thursday  |
| (["5"])  | Friday    |
| (["6"])  | Saturday  |
| (["7"])  | Sunday    |
| (["-1"]) | Error     |


*Guidelines*

	⦁ Create a new JavaScript file in the existing folder and name it appropriately.
	  It is recommended to name each script file as the name of the task whose solution it contains.  
  	⦁ The contents of the new file will open in the window on the right.  
	⦁ Convert input data from string to number.
	⦁ Print the day of the week according to the entered number. If it is invalid, print "Error".
	
	
#### Holiday or working day

	Write a function that reads the day of the week (text) in English - entered by the user.
	If the day is a working day prints on the console - "Working day", if it is a day off - "Weekend". 
	If text other than day of the week is entered it prints - "Error".
	
*Sample input and output*
	
| Input        | Output      |
| :---------   | :--------   |
| (["Monday"]) | Working day |
| (["Sunday"]) | Weekend     |
| (["April"])  | Error       |

*Guidelines*

	⦁ Print working day or day off according to the entered day, if the day is invalid print "Error".
	
#### Class of animal
	
	Write a function that prints the class of the animal according to its name entered by the user.
	⦁ dog -> mammal
	⦁ crocodile, tortoise, snake -> reptile
	⦁ others -> unknown
	
*Sample input and output*
	
| Input	      |  Output |
| :---------- | :------ |
| (["dog"])   | mammal  |
| (["snake"]) | reptile |
| (["cat"])   | unknown |

Guidelines

⦁	Check what species the animal is. If it is invalid, print "unknown".
  
#### Address by age and gender

	Write a function that takes an age (a real number) and a gender ('m' or 'f') 
	entered by the user and prints an address from among the following:
	⦁ "Mr." - male ( gender 'm' ) aged 16 or older
	⦁ "Master" - a boy ( gender 'm' ) under 16 years of age
	⦁ "Ms." - female ( gender 'f' ) 16 years or older
	⦁ "Miss" - girl ( gender 'f' ) under 16
	
*Sample input and output*
	
| Input	         | Output |
| :-----------   | :----- |
| (["12","f"])   | Miss   |
| (["17","m"])	 | Mr.	  |
| (["25","f"])	 | Ms.	  |
| (["13.5","m"]) | Master |

*Guidelines*

	⦁ Convert a number from a string to a number type.
	⦁ Do a check for gender, and if it returns true, do a check for years.
	  In the body of the age checks, print the desired address.
	⦁ Run the program with [Ctrl+F5] and test it by calling the function at the bottom and giving 
	  it different input values.
 
# Neighbourhood shop

	An enterprising Bulgarian opens neighborhood shops in several cities and sells at different 
	prices depending on the city:
	
| town / product |coffee | water | beer | sweets | peanuts |
| :------------- | :---- | :---- | :--- | :----- | :------ |
| Sofia		 | 0.50	 | 0.80	 | 1.20	| 1.45	 | 1.60    |
| Plovdiv	 | 0.40	 | 0.70	 | 1.15	| 1.30	 | 1.50    |
| Varna		 | 0.45	 | 0.70	 | 1.10	| 1.35	 | 1.55    |

	Write a function that receives arguments: product (string), city (string) and quantity (number),
	and calculates and prints how much the corresponding quantity of the selected product costs in 
	the specified city.
	
*Sample input and output*
	
| Input	                      | Output |		
| :-----------------------    | :----- |	
| (["coffee","Varna","2"])    | 0.9    | 
| (["peanuts","Plovdiv","1"]) |	1.5    |
| (["beer","Sofia","6"])      | 7.2    |
| (["water","Plovdiv","3"])   | 2.1    | 	
| (["sweets","Sofia","2.23"]) |	3.2335 |


# Number in range

	Write a function that checks if the number entered by the user is in the range 
	[-100, 100] and is other than 0 and outputs "Yes" if it meets the conditions, 
	or "No" if it is outside them.
	
*Sample input and output*

| Input	    | Output |
| :-------- | :----- |
| (["-25"]) | Yes    |
| (["0"])   | No     |
| (["25"])  | Yes    | 

# Opening hours

	Write a function that gets the time of day(integer) and day of the week(text) 
	and checks if a company's office is open, with office hours from 10 am to 6 pm,
	Monday to Saturday inclusive.
	
*Sample input and output*
	
| Input	             | Output	|
| :------- 	     | :------- |
| (["11","Monday"])  | open	|	
| (["19","Friday"])  | closed	|
| (["11","Sunday"])  | closed   |

# Movie ticket

	Write a function that gets the day of the week (text) and prints on the console the 
	price of a movie ticket according to the day of the week:

| Monday | Tuesday | Wednesday | Thursday | Friday | Saturday |	Sunday |
| :----  | :-----  | :-------  | :------- | :----- | :------  | :------|
| 12	 | 12	   | 14	       | 14	  | 12	   | 16	      | 16

*Sample input and output*

| Input	       |  Output |
| :-------     | :-----  |
| (["Monday"]) | 12	 |	
| (["Friday"]) | 12	 |	
| (["Sunday"]) | 16      |

# Fruit or vegetable

	Write a function that receives a produce name argument and checks whether it is a fruit or a vegetable.
	⦁ "fruit" has the following possible values: banana, apple, kiwi, cherry, lemon and grapes
	⦁ Vegetables 'vegetable' has the following possible values: tomato, cucumber, pepper and carrot
	⦁ All others are "unknown"
	Display "fruit", "vegetable" or "unknown" according to the entered product.
	
*Sample input and output*

| Input	       |  Output   |
| :------      | :-------- |
| (["banana"]) | fruit	   |
| (["apple"])  | fruit	   |
| (["tomato"]) | vegetable |	 	
| (["water"])  | unknown   |

# Invalid number

	A number is valid if it is in the range [100...200] or is 0.
	Write a function that accepts an integer argument, and prints
	"invalid" if the entered number is not valid. 
	
*Sample input and output*

| Input	    |  Output	     |
| :------   | :----------    |
| (["75"])  | invalid	     |
| (["150"]) | (empty output) |	 	
| (["220"]) | invalid	     |
| (["199"]) | (empty output) |
| (["-1"])  | invalid	     |
| (["100"]) | (empty output) |
| (["200"]) | (empty output) |
| (["0"])   | (empty output) |

# Fruit shop

	The fruit shop is open on weekdays at the following prices:
	
| fruit	 | banana | apple | orange | grapefruit	| kiwi | pineapple | grapes |
| :----- | :----- | :---- | :----- | :--------- | :--- | :-------- | :----- |
| price	 | 2.50	  | 1.20  | 0.85   | 1.45       | 2.70 | 5.50	   | 3.85   |

	On Saturdays and Sundays the shop is open at higher prices:
	
| fruit	 | banana | apple | orange | grapefruit	| kiwi | pineapple | grapes |
| :----- | :----- | :---- | :----- | :--------- | :--- | :-------- | :----- |
| price	 | 2.70	  | 1.25  | 0.90   | 1.60       | 3.00 | 5.60	   | 4.20   |


	Write a function that takes arguments:fruit (banana/apple/orange/grapefruit/grapefruit/pineapple/grapes),
	day of the week (Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday) and quantity (number) 
	and calculates the price according to the prices from the tables above. Print the result rounded to 2 digits
	after the decimal point. In case of invalid day of the week or invalid fruit name print "error". 
	
*Sample input and output*

| Input	                        |  Output |
| :--------  		        | :------ |
| (["apple","Tuesday","2"])     | 2.40	  |
| (["orange","Sunday","3"])     | 2.70	  |
| (["kiwi","Monday","2.5"])     | 6.75	  |
| (["grapes","Saturday","0.5"]) | 2.10	  |
| (["tomato","Monday","0.5"])	| error   |

# Trade commissions

	A company gives the following commissions to its salespeople according to the city in which
	they work and the volume of sales:
	
| Town	  | 0 ≤ s ≤ 500 | 500 < s ≤ 1 000 | 1 000 < s ≤ 10 000 | s > 10 000 |
| :------ |:------      | :------         | :------            | :------    |
| Sofia	  | 5%	        | 7%	          | 8%	               | 12%        |
| Varna	  | 4.5%	| 7.5%	          | 10%	               | 13%        |
| Plovdiv | 5.5%	| 8%	          | 12%	               | 14.5%      |

	Write a function that gets a city name (string) and a sales volume (number)
	and calculates and outputs the sales commission according to the above table. 
	Output the result formatted to 2 digits after the decimal point. 
	In case of invalid city or sales volume (negative number) print "error". 
	
*Sample input and output*

| Input                  | Output |
| :--------------------- | :----- |
| (["Sofia","1500"])     | 120.00 |	 	
| (["Plovdiv","499.99"]) | 27.50  |	 	
| (["Varna","3874.50"])  | 387.45 |	 	
| (["Kaspichan","-50"])  | error  |


