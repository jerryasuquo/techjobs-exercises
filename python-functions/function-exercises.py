# {Functions Exercises.}
# Part I
# Write the following functions

# difference
# this function takes in two parameters and returns the difference between the two
# difference(2, 2)  # 0
# difference(0, 2)  # -2

def difference(a, b):
    return a - b


print(difference(2, 2))

# product
# this function takes in two parameters and returns the product of the two
# product(2, 2)  # 4
# product(0, 2)  # 0

print("********************************************")


def product(c, d):
    return c * d


print(product(2, 2))

# print_day
# this function takes in one parameter(a number from 1-7) and returns the day of the week(1 is Sunday, 2 is Monday, 3 is Tuesday etc.). If the number is less than 1 or greater than 7, the function should return None
# print_day(4)  # "Wednesday"
# print_day(41)  # None

print("********************************************")


def print_day(day):
    if (day == 1):
        return "Sunday"
    elif (day == 2):
        return "Monday"
    elif (day == 3):
        return "Tuesday"
    elif (day == 4):
        return "Wednesday"
    elif (day == 5):
        return "Thursday"
    elif (day == 6):
        return "Friday"
    elif (day == 7):
        return "Saturday"
    return "None"


print(print_day(41))

# last_element
# this function takes in one parameter(a list) and returns the last value in the list. It should return None if the list is empty.
# last_element([1, 2, 3, 4])  # 4
# last_element([])  # None

print("********************************************")


def last_element(num_list):
    return num_list[-1]


print(last_element([1, 2, 3, 4]))

# number_compare
# this function takes in two parameters(both numbers). If the first is greater than the second, this function returns "First is greater." If the second number is greater than the first, the function returns "Second is greater." Otherwise the function returns "Numbers are equal."
# number_compare(1, 1)  # "Numbers are equal"
# number_compare(1, 2)  # "Second is greater"
# number_compare(2, 1)  # "First is greater"

print("********************************************")


def number_compare(m, n):
    if (m > n):
        return "First is greater"
    elif (m < n):
        return "Second is greater"
    return "Numbers are equal"


# print(number_compare(1, 1)) # "Numbers are equal"
# print(number_compare(1, 2)) # "Second is greater"
print(number_compare(2, 1))  # "First is greater"

# single_letter_count
# this function takes in two parameters(two strings). The first parameter should be a word and the second should be a letter. The function returns the number of times that letter appears in the word. The function should be case insensitive(does not matter if the input is lowercase or uppercase). If the letter is not found in the word, the function should return 0.
# single_letter_count('amazing', 'A')  # 2

print("********************************************")


def single_letter_count(str1, str2):
    count = 0
    for char in str1.lower():
        if char in str2.lower():
            count += 1
    return count


print(single_letter_count("amazing", "A"))

# or

# def single_letter_count(str1, str2):
#     return str1.lower().count(str2.lower())


# print(single_letter_count("amazing", "A"))


# multiple_letter_count
# this function takes in one parameter(a string) and returns a dictionary with the keys being the letters and the values being the count of the letter.
# multiple_letter_count("hello")  # {h:1, e: 1, l: 2, o:1}
# multiple_letter_count("person")  # {p:1, e: 1, r: 1, s:1, o:1, n:1}

print("********************************************")


def multiple_letter_count(s):
    my_dict = {}
    for char in s.lower():
        if char in my_dict:
            my_dict[char] += 1
        else:
            my_dict[char] = 1
    return my_dict


print(multiple_letter_count("hello"))

# or

# def multiple_letter_count(string):
#     return {char: string.count(char) for char in string}


# list_manipulation
# this function should take in three parameters(a list, command, location and value).
# If the command is "remove" and the location is "end", the function should remove the last value in the list and return the value removed
# If the command is "remove" and the location is "beginning", the function should remove the first value in the list and return the value removed
# If the command is "add" and the location is "beginning", the function should add the value(fourth parameter) to the beginning of the list and return the list
# If the command is "add" and the location is "end", the function should add the value(fourth parameter) to the end of the list and return the list
# list_manipulation([1, 2, 3], "remove", "end")  # 3
# list_manipulation([1, 2, 3], "remove", "beginning")  # 1
# list_manipulation([1, 2, 3], "add", "beginning", 20)  # [20,1,2,3]
# list_manipulation([1, 2, 3], "add", "end", 30)  # [1,2,3,30]

print("********************************************")


def list_manipulation(my_list, my_cmd, my_loc, my_val=None):
    if (my_cmd == "remove" and my_loc == "end"):
        return my_list.pop()
    elif (my_cmd == "remove" and my_loc == "beginning"):
        return my_list.pop(0)
    elif (my_cmd == "add" and my_loc == "beginning"):
        my_list.insert(0, my_val)
        return my_list
    elif (my_cmd == "add" and my_loc == "end"):
        my_list.append(my_val)
        return my_list


print(list_manipulation([1, 2, 3], "remove", "end"))  # 3
print(list_manipulation([1, 2, 3], "remove", "beginning"))  # 1
print(list_manipulation([1, 2, 3], "add", "beginning", 20))  # [20,1,2,3]
print(list_manipulation([1, 2, 3], "add", "end", 30))  # [1,2,3,30]


# is_palindrome
# A Palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This function should take in one parameter and returns True or False depending on whether it is a palindrome. As a bonus, allow your function to ignore whitespace and capitalization so that is_palindrome('a man a plan a canal Panama') returns True.
# is_palindrome('testing')  # False
# is_palindrome('tacocat')  # True
# is_palindrome('hannah')  # True
# is_palindrome('robert')  # False

print("********************************************")


def is_palindrome(string):
    return string == string[::-1]


print(is_palindrome('testing'))  # False
print(is_palindrome('tacocat'))  # True
print(is_palindrome('hannah'))  # True
print(is_palindrome('robert'))  # False

# frequency
# This function accepts a list and a search_term(this will always be a primitive value) and returns the number of times the search_term appears in the list.

print("********************************************")


def frequency(my_second_list, search_term):
    count = 0
    for val in my_second_list:
        if val == search_term:
            count += 1
    return count


print(frequency([1, 2, 3, 4, 4, 4], 4))
print(frequency([True, False, True, True], False))

# or

# def frequency(my_second_list, search_term):
#     return my_second_list.count(search_term)

# frequency([1, 2, 3, 4, 4, 4], 4)  # 3
# frequency([True, False, True, True], False)  # 1

# flip_case
# This function accepts a string and a letter and reverses the case of all occurances of the letter in the string.

# flip_case("Hardy har har", "h")  # "hardy Har Har"


print("********************************************")


def flip_case(s, l):
    return "".join([char.swapcase() if char.lower() == l.lower() else char for char in s])


print(flip_case("Hardy har har", "h"))

# multiply_even_numbers
# This function accepts a list of numbers and returns the product of all even numbers in the list.

# multiply_even_numbers([2, 3, 4, 5, 6])  # 48


print("********************************************")


def multiply_even_numbers(num_list):
    total = 1
    for num in num_list:
        if num % 2 == 0:
            total = total * num
    return total


print(multiply_even_numbers([2, 3, 4, 5, 6]))

# mode
# This function accepts a list of numbers and returns the most frequent number in the list of numbers. You can assume that the mode will be unique.

# mode([2, 4, 1, 2, 3, 3, 4, 4, 5, 4, 4, 6, 4, 6, 7, 4])  # 4

print("********************************************")


def mode(mode_list):
    # count = {val: mode_list.count(val) for val in mode_list}

    # or

    count = {}
    for num in mode_list:
        count[num] = mode_list.count(num)

    largest_num = max(count.values())

    largest_num_idx = list(count.values()).index(largest_num)

    return list(count.keys())[largest_num_idx]


print(mode([2, 4, 1, 2, 3, 3, 4, 4, 5, 4, 4, 6, 4, 6, 7, 4]))


# capitalize
# This function accepts a string and returns the same string with the first letter capitalized.

# capitalize("tim")  # "Tim"
# capitalize("matt")  # "Matt"

print("********************************************")


def capitalize(cap_str):
    return f"{cap_str[:1].upper()}{cap_str[1:]}"


print(capitalize("tim"))
print(capitalize("matt"))

# compact
# This function accepts a list and returns a list of values that are truthy values.
# compact([0, 1, 2, "", [], False, {}, None, "All done"])  # [1,2, "All done"]

print("********************************************")


def compact(l):
    return [val for val in l if val]


print(compact([0, 1, 2, "", [], False, {}, None, "All done"]))

# partition
# This function accepts a list and a callback function(which you can assume returns True or False). The function should iterate over each element in the list and invoke the callback function at each iteration. If the result of the callback function is True, the element should go into one list if it's False, the element should go into another list. When it's finished, partition should return both lists inside of one larger list.

print("********************************************")


def is_even(num):
    return num % 2 == 0


def partition(part_list, fn):
    return [[val for val in part_list if fn(val)], [val for val in part_list if not fn(val)]]


print(partition([1, 2, 3, 4], is_even))

# intersection
# This function should accept a two dimensional list and return a list with the values that are the same in each list.

# intersection([1, 2, 3], [2, 3, 4])  # [2,3]

print("********************************************")


def intersection(l1, l2):
    return [val for val in l1 if val in l2]


print(intersection([1, 2, 3], [2, 3, 4]))  # [2,3]

# once
# This function accepts a function and returns a new function that can only be invoked once. If the function is invoked more than once, it should return None. Hint you will need to define a new function inside of your once function and return that function. You can add properties to your inner function to see if it has run already.


# def add(a, b):
#     return a + b


# one_addition = once(add)

# one_addition(2, 2)  # 4
# one_addition(2, 2)  # undefined
# one_addition(12, 200)  # undefined

print("********************************************")


def add(a, b):
    return a + b


def once(fn):
    fn.is_called = False

    def inner(*args):
        if not(fn.is_called):
            fn.is_called = True
            return fn(*args)
    return inner


one_addition = once(add)

print(one_addition(2, 2))  # 4
print(one_addition(2, 2))  # undefined
print(one_addition(12, 200))  # undefined
