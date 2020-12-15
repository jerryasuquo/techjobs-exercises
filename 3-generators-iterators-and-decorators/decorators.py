# def shout():
#     return "WHOA!"


# def whisper():
#     return "Shhhh"


# def perform_action(func):
#     print("something is happening")
#     return func()


# print(perform_action(shout))
# # something is happening
# # 'WHOA!'

# print(perform_action(whisper))
# # something is happening
# # 'Shhhh'

# def new_decorator(func):
#     def wrap_func():
#         print("code before func!")
#         func()
#         print("code after func!")
#     return wrap_func


# @new_decorator
# def decorate_me():
#     print("decorate me!")


# decorate_me = new_decorator(decorate_me)

# decorate_me()

# def perform_action(func):
#     def wrap_func():
#         print("something is happening")
#         return func()
#     return wrap_func


# @perform_action
# def whisper():
#     return "Shhhh"


# @perform_action
# def shout():
#     return "WHOA!"


# print(whisper())
# # something is happening
# # 'Shhhh'

# print(shout())
# # something is happening
# # 'WHOA!'

# shout.__name__  # 'wrap_func' - oops!


from functools import wraps


def perform_action(func):
    @wraps(func)
    def wrap_func():
        print("something is happening")
        return func()
    return wrap_func


@perform_action
def whisper():
    return "Shhhh"


@perform_action
def shout():
    return "WHOA!"


print(whisper())

print(shout())

print(shout.__name__)  # 'shout' - much better
