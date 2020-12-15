# {Generators, Iterators and Decorators Exercises.}
# Implement the following functions:

# get_next_multiple
# This function should accept a number and return the next number that is divisible by it.

from functools import wraps


def get_next_multiple(num, count=2):
    # prevent StopIteration
    while True:
        new_count = count
        new_num = 0
        while new_count > 0:
            new_num = new_num + num
            new_count = new_count-1
        count = count+1
        yield (new_num, count)


gen_multiple_of_two = get_next_multiple(2)
print(next(gen_multiple_of_two))
print(next(gen_multiple_of_two))
print(next(gen_multiple_of_two))
print(next(gen_multiple_of_two))

gen_multiple_of_thirteen = get_next_multiple(13)
print(next(gen_multiple_of_thirteen))
print(next(gen_multiple_of_thirteen))
print(next(gen_multiple_of_thirteen))
print(next(gen_multiple_of_thirteen))

# is_prime
# This function should accept a number and return True or False if the number is a prime number.

print("\n*******************************\n")


def is_prime(num):
    if num == 2:
        return True
    if num % 2 == 0 or num <= 1:
        return False

    sqr = int(num**0.5) + 1

    for divisor in range(3, sqr, 2):
        if num % divisor == 0:
            return False
    return True


print(is_prime(11))  # True
print(is_prime(122))  # False
print("\n*******************************\n")
# get_next_prime
# This function should return a generator that yields in the next prime number. The highest it should go should be 1000.


def get_next_prime(num):
    for val in range(num+1, 1000):
        if(is_prime(val)):
            yield val


gen = get_next_prime(8)

print(next(gen))
print("\n*******************************\n")
# double_result
# This decorator function should return the result of another function multiplied by two


# def add(a, b):
#     return a+b


# add(5, 5)  # 10

def double_result(func):
    @wraps(func)
    def inner(*args, **kwargs):
        return func(*args, **kwargs) * 2
    return inner


@double_result
def add(a, b):
    return a+b


print(add(5, 5))  # 20
print("\n*******************************\n")
# only_even_parameters
# This decorator function should only allow a function to have even parameters or else return the string "Please only use even numbers!"


def only_even_parameters(func):
    @wraps(func)
    def inner(*args, **kwargs):
        if any([arg for arg in args if arg % 2 != 0]):
            return "Please add even numbers"
        return func(*args, **kwargs)
    return inner


@only_even_parameters
def add(a, b):
    return a+b


print(add(5, 5))  # "Please add even numbers!"
print(add(4, 4))  # 8
print("\n*******************************\n")


@only_even_parameters
def multiply(a, b, c, d, e):
    return a*b*c*d*e


print(multiply(2, 2, 2, 2, 2))
print("\n*******************************\n")

# sum_index
# This function should accept a list or tuple and return the sum of each index. As a bonus, make this function able to accept a variable number of arguments.


def sum_index(collection):
    total = 0
    for idx, val in enumerate(collection):
        total = total + idx

    return total


print(sum_index([1, 2, 3, 4]))  # 6
