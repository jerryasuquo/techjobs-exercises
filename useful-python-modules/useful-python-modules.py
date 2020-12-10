from collections import namedtuple
from collections import OrderedDict
from collections import defaultdict
from collections import Counter
import math
from random import choice as c
import random

print(random.randint(1, 10), random.randrange(4), random.random())

print("********************************************")


print(c([1, 2, 3, 4, 5]))


print("********************************************")

print(math.e)  # 2.718281828459045
print(math.pi)  # 3.141592653589793
print(math.floor(2.2))  # 2
print(math.ceil(2.2))  # 3
print(math.sqrt(16))  # 4
print(math.pow(2, 10))  # 1024.0


print("********************************************")


l = [1, 1, 2, 3, 3, 4, 4, 5, 5]

string = "aweosakjdsaldwjdwq"

s = 'this is such a nice nice nice thing that is nice!'

c = Counter(s.split())

print(Counter(l))  # see what this returns!
print(Counter(string))
print(c)

print("********************************************")

# regular_dict = dict(first=1)
# regular_dict['first']  # 1
# regular_dict['second']  # KeyError!


def default_value():
    return "nothing"


d = defaultdict(default_value)
d['nice'] = "cool"
print(d['nice'])  # "cool"
print(d['whoaaa'])  # "nothing"


print("********************************************")

d = {}
d['one'] = 1
d['two'] = 2
d['three'] = 3
d['four'] = 4

for k, v in d.items():
    print(k, v)  # no order!

od = OrderedDict()
od['one'] = 1
od['two'] = 2
od['three'] = 3
od['four'] = 4

for k, v in od.items():
    print(k, v)  # order!

print("********************************************")


# t = (1, 2, 3)
# t[1] = 2

Person = namedtuple('Person', 'first_name last_name fav_color')
elie = Person('Elie', 'Schoppik', 'purple')

print(elie.fav_color)
