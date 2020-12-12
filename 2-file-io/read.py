# file = open('first.txt', 'r')

# print(file.read())
# print(file.read())

# print(file.seek(0))  # move the cursor back to the beginning
# print(file.read())  # there it is!

# print(file.closed)
# file.close()
# print(file.closed)

# print(file.read())  # ValueError: I/O operation on closed file

# with open('first.txt', 'r') as file:
#     data = file.read()
#     print(data)

# print(file.closed)

# with open("first.txt", 'w') as file:
#     file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos molestias ea sit veniam, rerum, totam quis eaque excepturi aut, nostrum reiciendis. At, harum quos adipisci magni nesciunt aliquid beatae sit!')

# with open("first.txt", 'r') as file:
#     data = file.read()
#     print(data)

# with open("first.txt", 'r+') as file:
#     file.write("\nI'm at the beginning\n")
#     file.seek(100)
#     file.write("\nI'm in the middle\n")
#     file.seek(0)
#     print(file.read())

# with open("first.txt", 'a+') as file:
#     file.write("\nI'm at the end\n")
#     file.seek(0)
#     print(file.read())

# with open('first.txt', 'w+') as file:
#     file.write("Now everything is overwritten :(")
#     file.seek(0)
#     print(file.read())

import csv

with open('file.csv') as csvfile:
    reader = csv.reader(csvfile, delimiter='|')
    rows = list(reader)
    for row in rows:
        print(','.join(row))

with open('file.csv') as csvfile:
    reader = csv.DictReader(csvfile, delimiter='|')
    rows = list(reader)
    for row in rows:
        print(row)

with open('file.csv', 'a') as csvfile:
    data_writer = csv.writer(csvfile, delimiter='|')
    data_writer.writerow(['Bojack', 'Horse', '50'])

with open('pets.csv', 'a') as csvfile:
    data = ['name', 'fav_topic']
    writer = csv.DictWriter(csvfile, fieldnames=data)
    writer.writeheader()  # this writes the first row with the column headings
    writer.writerow({
        'name': 'Elie',
        'fav_topic': 'Writing to CSVs!'
    })
