import csv

# Part 2 - CSV
# For the next part of this exercise, you will be working with CSVs, so first create a file called users.csv and then work on the following two functions:

# one that prints out all of the first and last names in the users.csv file
# one that prompts us to enter a first and last name and adds it to the users.csv file.


def print_names():
    with open('users.csv') as file:
        reader = csv.DictReader(file)
        for row in reader:
            print("{} {}".format(row['first_name'], row['last_name']))


def add_name():
    with open('users.csv', 'a') as file:
        fieldnames = ['first_name', 'last_name']
        writer = csv.DictWriter(file, fieldnames)
        first = input("First name please: ")
        last = input("Last name please: ")
        writer.writerow(dict(first_name=first, last_name=last))
