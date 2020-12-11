# class Vehicle:
#     def __init__(self, brand, model, year):
#         self.brand = brand
#         self.model = model
#         self.year = year

#     def honk(self):
#         return "Beep!"


# class Car(Vehicle):
#     def __init__(self, brand, model, year):
#         super().__init__(brand, model, year)  # this is python3 specific!
#         self.wheels = 4


# mack_truck = Vehicle('Mack', 'Titan', 2015)
# car = Car('Honda', 'Civic', 2004)

# print(mack_truck.honk(), "\n\n"+car.honk())

class Aquatic:
    def __init__(self, name):
        self.name = name

    def swim(self):
        return f"{self.name} is swimming"

    def greet(self):
        return f"I am {self.name} of the sea!"


class Ambulatory:
    def __init__(self, name):
        self.name = name

    def walk(self):
        return f"{self.name} is walking"

    def greet(self):
        return f"I am {self.name} of the land!"


class Penguin(Aquatic, Ambulatory):
    def __init__(self, name):
        super().__init__(name=name)


jaws = Aquatic("Jaws")
lassie = Ambulatory("Lassie")
captain_cook = Penguin("Captain Cook")

# jaws.walk()  # AttributeError: 'Aquatic' object has no attribute 'walk'
# lassie.swim()  # AttributeError: 'Ambulatory' object has no attribute 'swim'
print(f"{jaws.swim()}\n{jaws.greet()}")
print(f"{lassie.walk()}\n{lassie.greet()}")
print(f"{captain_cook.swim()}\n{captain_cook.walk()}\n{captain_cook.greet()}")

# (<class 'multiple.Penguin'>, <class 'multiple.Aquatic'>, <class 'multiple.Ambulatory'>, <class 'object'>)
# print(Penguin.__mro__)

# # OR

# print(Penguin.mro())  # returns a list to us

# EVEN BETTER!

# print(help(Penguin))  # gives us a detailed chain
