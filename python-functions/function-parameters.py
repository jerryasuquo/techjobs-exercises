def pet_names(cat_name, dog_name):
    return f"I have a cat named {cat_name} and a dog named {dog_name}."


# print(pet_names("Moxie", "Snoop"))
# print(pet_names(cat_name="Mittens", dog_name="Fido"))
# print(pet_names(dog_name="Fido", cat_name="Mittens"))

# def add(a=4, b=14):
#     return a + b


# print(add(), add(14, 1), add(7), add(b=26))

# def foo(*args):
#     print(args)


# foo(1, 2, 3)  # (1,2,3)
# foo(1, 2)  # (1,2)
# foo([1, 2, 3])  # ([1,2,3])

# def add(*nums):
#     return sum(nums)


# print(add(1, 2, 3, 4))  # 10

# def add_three_nums(n1, n2, n3):
#     return n1 + n2 + n3


# print(add_three_nums(*[5, 6, 7]))

# def add_and_multiply_numbers(a, b, c):
#     return a + b * c


# numbers = [1, 2, 3]
# more_numbers = [4, 5, 6]

# # add_and_multiply_numbers(numbers)  # TypeError
# print(add_and_multiply_numbers(*numbers))  # 7
# # add_and_multiply_numbers(more_numbers)  # TypeError
# print(add_and_multiply_numbers(*more_numbers))  # 34

# def print_kwargs(a, b, **kwargs):
#     print(a, b, kwargs)


# print_kwargs(1, 2, awesome='sauce', test='yup')

# def add_and_multiply_numbers(a, b, c):
#     return a + b * c


# data = dict(a=1, b=2, c=3)

# # add_and_multiply_numbers(data)  # TypeError
# print(add_and_multiply_numbers(**data))  # 7
