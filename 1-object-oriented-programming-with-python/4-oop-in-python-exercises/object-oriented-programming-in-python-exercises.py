# {Object Oriented Programming in Python Exercises.}
# Part 1
# Answer the following questions.

# 1. What is a class?
# A class is a factory (or blueprint) for creating objects, or instances of the class. Classes contain information on how to instantiate objects, and define methods that instances (or the class itself) have access to.

# 2. What is an instance?
# An instance is an object of a class, simply put.

# 3. What is encapsulation?
# Encapsulation is an idea whereby data and processes on that data are owned by a class. Other functions or classes outside of that class should not be able to directly access the data.

# 4. What is abstraction?
# Abstraction involves exposing only relevant, higher level functionality in your class, and hiding unnecessary implementation details from the user. For example, you can copy a list using list.copy without having to know what specific sorting algorithm is being used.

# 5. What is inheritance?
# Inheritance is when one class (usually a subclass) inherits properties and methods from another (called a parent or base) class.

# 6. What is multiple inheritance?
# Multiple inheritance is when a class can inherit from not just one, but many other classes.

# 7. What is polymorphism?
# Polymorphism (means taking many forms) is what allows us to use the same interface (or method) for instances of different classes.

# 8. What is method resolution order or MRO?
# The method resolution order specifies the order in which Python searches classes when looking for a particular method.

# Part 2
# Create a deck of cards class. Internally, the deck of cards should use another class, a card class. Your requirements are:

# The Deck class should have a deal method to deal a single card from the deck
# After a card is dealt, it is removed from the deck.
# There should be a shuffle method which makes sure the deck of cards has all 52 cards and then rearranges them randomly.
# The Card class should have a suit(Hearts, Diamonds, Clubs, Spades) and a value(A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K)

from random import shuffle as s


class Card:
    def __init__(self, value, suit):
        self.value = value
        self.suit = suit

    def __repr__(self):
        return "{} of {}".format(self.value, self.suit)


class Deck:
    def __init__(self):
        values = ['A', '2', '3', '4', '5', '6',
                  '7', '8', '9', '10', 'J', 'Q', 'K']
        suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def __repr__(self):
        return "Cards remaining in deck: {}".format(len(self.cards))

    def s(self):
        if len(self.cards) < 52:
            raise ValueError("Only full decks can be shuffled")
        s(self.cards)
        return self

    def deal(self):
        if len(self.cards) == 0:
            raise ValueError("All cards have been dealt")
        return self.cards.pop()


print(Deck().s().deal())
