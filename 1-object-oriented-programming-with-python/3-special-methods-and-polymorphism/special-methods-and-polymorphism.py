import builtins
sample_list = [1, 2, 3]
sample_tuple = (1, 2, 3)
sample_string = "awesome"

print(len(sample_list), len(sample_tuple), len(sample_string))


class Pet():
    def talk():
        raise NotImplementedError("Subclass needs to implement this method")


class Dog(Pet):
    def talk(self):
        return "WOOF!"


class Cat(Pet):
    def talk(self):
        return "MEOW!"


# Extended subclass
class extend_str(str):
    def first_last_character(self):
        return self[0] + self[-1]


# Overwrite the str class on builtins with the custom class defined above
builtins.str = extend_str

print(str('0123').first_last_character())  # '03'

print(str("awesome").first_last_character())  # 'ae'

# 'str' object has no attribute 'first_last_character'
# print("awesome".first_last_character())
