# id = 0


# def increment_id():
#     id += 1


# increment_id()  # UnboundLocalError: local variable 'id' referenced before assignment


# def increment_id():
#     global id
#     id += 1


# increment_id()  # The global id is now 1

# def print_locals():
#     x = 2
#     name = "Elie"
#     print(locals())


# name = "person"
# print(globals())
# print(locals())

# def outer(a):
#     def inner(b):
#         return a + b
#     return inner


# print(outer(3)(4))
# x = outer(2)
# print(x(10))

# def outer_count():
#     def inner_count():
#         inner_count.x += 1
#         print(inner_count.x)
#     inner_count.x = 0
#     return inner_count


# outer_count()()

# def say_hello():
#     """This function returns the string hello when called"""
#     return "hello"


# print(say_hello())  # "hello"

# print(say_hello.__doc__)  # "This function returns the string hello when called"
# help(say_hello)  # gives us even more detail with the docstring!

# def add(a: int = 5, b: int = 5) -> int:
#     """This function returns the sum of two numbers with default values of 5 for a and 5 for b"""
#     return a + b


# print(add())
