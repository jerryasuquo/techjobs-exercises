# def gensquares(n):
#     for num in range(n):
#         yield num ** 2


# for x in gensquares(10):
#     print(x)

# def fib_with_generator(n):
#     a = 1
#     b = 1
#     for val in range(n):
#         yield a
#         # a,b = b, a+b -> tuple unpacking instead of the three lines below!
#         temp = a
#         a = b
#         b = temp + b


# for num in fib_with_generator(10):
#     print(num)


# def use_next():
#     for x in range(10):
#         yield x


# # gen = use_next()
# # print(next(gen))  # 0
# # print(next(gen))  # 1
# # print(next(gen))  # 2

# for val in use_next():
#     print(val)

# def use_next():
#     return (x for x in range(10))


# for val in use_next():
#     print(val)

# str = "hello"
# str_iter = iter(str)
# # print(next(str_iter))  # h
# # print(next(str_iter))  # e
# # print(next(str_iter))  # l
# # print(next(str_iter))  # l
# # print(next(str_iter))  # o
# # next(str_iter)  # StopIteration Error!

# for char in str_iter:
#     print(char)

# list = ["first", "second", "third"]

# # How do we get the indices at each iteration? Enumerate!

# for idx, value in enumerate(list):
#     print(f"index is {idx} and value is {value}")

# # index is 0 and value is first
# # index is 1 and value is second
# # index is 2 and value is third

# all - returns true if all elements are truthy

# print(all([0]))  # False
# print(all([0, 1]))  # False
# print(all([0, "", [1]]))  # False
# print(all([1, "a", [1]]))  # True

# any - returns true if any elements are truthy

print(any([0]))  # False
print(any([0, 1]))  # True
print(any([0, "", [1]]))  # True
