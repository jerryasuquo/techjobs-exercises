# Part 1 - Text Files
# For the first part of this exercise assume you have a file called students.txt which simply contains a bunch of student names, one name per line. Your goal is to write two functions:

# add_student - accepts a parameter of first_name and writes to a file called students.txt.
# find_student - accepts a parameter of first_name and returns the first student found
# Bonuses
# Write the following additional functions:
# update_student - accepts a parameter of first_name and new_name and updates first student found
# remove_student - accepts a parameter of first_name and removes the student from the text file
# Add a unique id for each student so that you can find a student by their id instead of first name(which breaks if you have the same first name for multiple students)

import re


def add_student(first_name):
    with open('students.txt', 'a') as file:
        file.write(first_name)


def find_student(first_name):
    with open('students.txt', 'r') as file:
        for first_student in file:
            if first_student == first_name:
                print(f"{first_name} was found!")


def update_student(first_name, new_name):
    with open('students.txt', 'r+') as file:
        data = file.read()
        data = re.sub(first_name, new_name, data)
        file.seek(0)
        file.write(data)
        file.truncate()


def remove_student(first_name):
    with open('students.txt', 'r+') as file:
        data = file.read()
        data = re.sub(first_name, '', data)
        file.seek(0)
        file.write(data)
        file.truncate()
