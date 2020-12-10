# Debugging and Modules Exercises.}
# 1. What is a module?
# Ans ->
# A module is simply a Python file in which, we typically define functions, classes, or variables that we then want imported in other files.

# 2. List three ways to import a module in Python.
# Ans ->
# import math
# import math as m
# from math import *

# 3. What is the purpose of importing?
# Ans ->
# Importing helps us keep our code more organized and easier to reason about, by separating chunks of code into separate files. We can then import just what we need from one file into another file.

# 4. List three examples when you would use the random module.
# Ans ->
# I. Model shuffling a deck of cards.
# II. Model rolling a pair of dice.
# III. Model a coin toss.

# 5. What is an ImportError?
# Ans ->
# An `ImportError` is an error Python gives you when you try to import an unknown module, or when you try to import something that cannot be found within a module.

# 6. When would using an OrderedDict be useful?
# Ans ->
# It is useful when dealing with the ordering of the key-value pairs. For example, if you want to be sure that the keys are alphabetized, then an OrderedDict might be helpful.

# 7. When would using a defaultdict be useful?
# Ans ->
# defaultdict could be helpful if you want to create a dictionary but want multiple values for one key.

# 8. What is the purpose of the following code:

#     if __name__ == '__main__':
#     pass

# Ans ->
# The code inside of the if statement will only execute if the file is executed directly. If it's imported, the code inside of the if statement won't run.
