# from functools import reduce
# a = [1, 2, 3, 4, 5]

# print(reduce(lambda x, y: x+y, a))  # 15

# print(list(map(lambda x: x*2, a)))  # [2,4,6,8,10]
# print(list(filter(lambda x: x*2 > 5, a)))  # [3,4]

import datetime

t = datetime.time(1, 25, 10)
print(t.hour)
print(t.microsecond)

print(datetime.time.min)  # 00:00:00

today = datetime.date.today()
print(today.timetuple())  # namedtuple with data about date
print(today.day)
