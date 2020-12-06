# Part I
# Write the following Python code to do the following(complete ALL of these using list comprehension).

# Given a list[1, 2, 3, 4], print out all the values in the list.
# Given a list[1, 2, 3, 4], print out all the values in the list multiplied by 20.
# Given a list["Elie", "Tim", "Matt"], return a new list with only the first letter(["E", "T", "M"]).
# Given a list[1, 2, 3, 4, 5, 6] return a new list of all the even values([2, 4, 6]).
# Given two lists[1, 2, 3, 4] and [3, 4, 5, 6], return a new list that is the intersection of the two([3, 4]).
# Given a list of words["Elie", "Tim", "Matt"] return a new list with each word reversed and in lower case(['eile', 'mit', 'ttam']).
# Given two strings "first" and "third", return a new string with all the letters present in both words(["i", "r", "t"]).
# For all the numbers between 1 and 100, return a list with all the numbers that are divisible by 12 ([12, 24, 36, 48, 60, 72, 84, 96]).
# Given the string "amazing", return a list with all the vowels removed(['m', 'z', 'n', 'g']).
# Generate a list with the value[[0, 1, 2], [0, 1, 2], [0, 1, 2]].
# Generate a list with the value:

# [
#     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
#     [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
# ]

my_first_list = [1, 2, 3, 4]
print(my_first_list)

print("********************************")
for num in my_first_list:
    print(num * 20)

print("********************************")
list_arr = ["Elie", "Tim", "Matt"]
new_list_arr = []
for index, val in enumerate(list_arr):
    new_list_arr.append(val[0])
print(new_list_arr)

print("********************************")
even = [1, 2, 3, 4, 5, 6]
new_even = []
for num in even:
    if num % 2 != 0:
        continue
    elif num > 6:
        break
    new_even.append(num)
print(new_even)

print("********************************")
my_second_list = [1, 2, 3, 4]
my_third_list = [3, 4, 5, 6]
my_second_new_list = my_second_list.copy()
my_second_new_list.extend(my_third_list)
my_second_new_list.remove(3)
my_second_new_list.remove(4)
my_third_new_list = []
my_third_new_list.extend(my_second_new_list[2:4])
print(my_third_new_list)

print("********************************")
list_arr = ["Elie", "Tim", "Matt"]
list_arr_result = []

for idx, elem in enumerate(list_arr):
    list_arr_result.append(elem.lower()[::-1])

print(list_arr_result)

print("********************************")
string1 = "first"
string2 = "third"
string3 = []

for char in string1:
    if char in string2:
        string3.append(char)

print(string3)

print("********************************")
for num in range(1, 100):
    if num % 12 == 0:
        print(num)

print("********************************")
string4 = "amazing"
string5 = []
for char in string4:
    if char not in ["a", "e", "i", "o", "u"]:
        string5.append(char)
print(string5)

print("********************************")
my_first_list_collection = [0, 1, 2]
my_first_new_list_collection = []
i = 0
while i < len(my_first_list_collection):
    my_first_new_list_collection.append(my_first_list_collection)
    i += 1
print(my_first_new_list_collection)

print("********************************")
my_second_list_collection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
my_second_new_list_collection = []
i = 0
while i < len(my_second_list_collection):
    my_second_new_list_collection.append(my_second_list_collection)
    i += 1
print(my_second_new_list_collection)
