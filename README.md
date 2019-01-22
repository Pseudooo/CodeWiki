# Python vs Java

***

## Contents:

 - [Printing](#Printing)
 - [Conditions](#Conditions)
 - [If Statements](#If-Statements)

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
