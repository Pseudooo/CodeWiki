# Python vs Java

***

## Contents:

 - [Printing](#Printing)
 - [Inputs](#Inputs)
 - [Casting](#Casting)
 - [Conditions](#Conditions)
 - [If Statements](#If-Statements)
 - [While Loops](#While-Loops)
 - [For Loops](#For-Loops)
 - [Arrays](#Arrays)
 - [String Formatting](#String-Formatting)

***

## Printing:

_Printing "Hello World!" to the console_

#### Python:
```python
print("Hello World!")
```

#### Java:
```java
System.out.println("Hello World!");
```

## Inputs:

#### Python:
```python
<UserInput> = input(<Prompt>)
```

#### Java:
```java
Scanner sc = new Scanner(System.in);
System.out.print(<Prompt>);
<Variable> = sc.next();
```

## Casting:

_Casting is the process of taking a variable or value that is one data type and converting it to another data type_

#### Python:
```python
<Variable> = <DataType>(<Value>)
```

#### Java:
```java
<DataType> <Variable> = (<DataType>) <Value>
```

_In java only some data types will allow casting from one type to another, so alternatively parsing is using_
_I'll give an example of parsing an int and a double from a string_

#### Casting int from String
```java
int value = Integer.parseInt(<StringValue>);
```

#### Casting double from String
```java
double value = Double.parseDouble(<StringValue>);
```

## Conditions

_In a programmmatic context a conditional expression is an expression that can be evaluated to a boolean value (True or False), we most commonly use these in if statements_

### Numeric Types:

#### Python:
```python
<NumericValue> == <NumericValue>
```

#### Java:
```java
<NumericValue> == <NumericValue>
```

### Strings:

#### Case Sensitive:

#### Python:
```python
<StringValue> == <StringValue>
```

#### Java:
```java
<StringValue>.equals(<StringValue>)
```

#### Ignoring Case:

#### Python:
```python
<StringValue>.lower() == <StringValue>.lower()
```

#### Java:
```java
<StringValue>.equalsIgnoreCase(<StringValue>)
```

## If Statements:

### Single If Statements:

#### Python:
```python
if <condition>:
	# Do something
```

#### Java:
```java
if(<condition>) {
	// Do something
}
```

### If Else Statements:

#### Python:
```python
if <condition>:
	# Do something
else:
	# Do something else
```

#### Java:
```java
if(<condition>) {
	// Do something
}else {
	// Do something
}
```

### Else If Statements:

#### Python:
```python
if <condition>:
	# Do something
elif <condition>:
	# Do something
else:
	# Do something else
```

#### Java:
```java
if(<condition>) {
	// Do something
}else if(<condition>) {
	// Do something
}else {
	// Do something else
}
```

## While Loops:

#### Python:
```python
while <condition>:
	# Do something
```

#### Java:
```java
while(<condition>) {
	// Do something
}
```

## For Loops:

### Counting Loops:

_Each of the following loops will run n times_

#### Python:
```python
for i in range(n):
	# Do something
```

#### Java:
```java
for(int i = 0; i < n; i++) {
	// Do something
}
```

### Modifying ranges:

_Altering loops can be useful depending on your situation_

#### Python:
```python
for i in range(<start_inclusive>, <end_exclusive>, <increment>):
	# Do something
```

#### Java:
```java
for(int i = <start_inclusive>; i < <end_exclusive>; i = i + <increment>) {
	// Do something
}
```

### For each loops:

#### Python:
```python
for i in <iterable>:
	# Do something
```

#### Java:
```java
for(<ElementDataType> i : <iterable>) {
	// Do something
}
```

### General Case:

_The following are generalized cases and less readable but useful for those who find it accessible_

#### Python:
```python
for <LoopVariable> in range(<start_inclusive>, <end_exclusive>, <increment>):
	# Do something
```

#### Java:
```java
for(<LoopVariableDeclaration>; <LoopCondition>; <LoopVariableOperation>) {
	// Do something
}
```

### A Note About Scope:

_In python the following is a perfectly functional piece of code_

```python
for i in range(10):
	x = i

print(x)
```

_However, its literal equivalent in Java:_

```java
for(int i = 0; i < 10; i++) {
	int x = i;
}

System.out.println(i);
```

_Is not functional, this is a result of something called scope, you can read more about it:_
 - [Python Scope](https://matthew-brett.github.io/teaching/global_scope.html)
 - [Java Scope](https://www.geeksforgeeks.org/variable-scope-in-java/)

## Arrays:

### Defining an empty array:

#### Python:
```python
<Array> = []
```

#### Java:
```java
ArrayList<<DataType>> <Array> = new ArrayList<<DataType>>();
```

### Appending:

#### Python:
```python
<Array>.append(<Value>)
```

#### Java:
```java
<Array>.add(<value>);
```

### Referencing Index:

#### Python:
```python
<Variable> = <Array>[<Index>]
```

#### Java:
```java
<DataType> <Variable> = <Array>.get(<Index>);
```

### Removing Items:

#### Python:
```python
<Array>.remove(<Item>)
```

#### Java:
```java
<Array>.remove(<Item>);
```

## String Formatting:

_Python has an extremely simple approach to string formatting so there will be a much greater quantity of java examples here_

_It's also very hard to give arbitrary examples so I'll instead of provide functional examples_

### Formatting Variables into Strings:

_The following examples will return a string formatted as:_

`I am John and I am 50 years old.`

#### Python:
```python
"I am {} and I am {} years old.".format("John", 50)
```

#### Java:
```java
String.format("I am %s and I am %s years old.", "John", 50)
```

_In both java and python the variables will be placed in the order of occurence in the string_

### Justification and Width:

_Setting the minimum width of a variable to be formatted:_

#### Python:
```python
"This has a width of 10: {:10}".format(<Variable>)
```

#### Java:
```java
String.format("This has a width of 10: %10s", <Variable>)
```

_All above examples will be right justified by default but we can use left justification if we so require:_

#### Python:
```python
"This is left justified with a width of 10: {:<10}".format(<Variable>)
```

#### Java:
```java
String.format("This is left justified with a width of 10: %-10s", <Variable>)
```

_Python allows for formatted strings to be center justified but java does not_

#### Centre Justified Text Python:
```python
"{:^25}".format("Centered!")
```

### Formatting Decimals:

_Reducing decimal numbers that are shown:_

#### Python:
```python
"Showing 4 decimal places: {:.4f}".format(3.14159265358979)
```

#### Java:
```java
String.format("Showing 4 decimal places: %.4f", 3.14159265358979)
```

_Writing numbers in scientific notation_

_The following numbers will be 314159265358979 formatted to 3 decimal places with one leading number, like so:_

`3.142e+14`

#### Python:
```python
"Scientific notation: {:.3e}".format(314159265358979)
```

#### Java:
```java
String.format("Scientific Notation: %.3e", 314159265358979)
```

_A full list of string formatting options for java can be found [here](https://dzone.com/articles/java-string-format-examples)_
