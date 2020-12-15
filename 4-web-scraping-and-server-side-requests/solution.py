# { Web Scraping Exercises. }
# Part 1 - Web Scraping
# Write a Python program that uses BeautifulSoup to go to https://news.google.com and prints out all of the headlines on the page. Then, write a function called find_headline_by_keyword which lets you search through those headlines for keywords, and returns to you a list of all of the headlines that match all the keywords you provide.

import requests
import csv
import urllib.request
from bs4 import BeautifulSoup

url = 'https://news.google.com/'
data = urllib.request.urlopen(url).read()
soup = BeautifulSoup(data, 'html.parser')

titles = soup.select(".titletext")

headlines = [title.text for title in titles]


def find_headline_by_keyword(headers, keywords):
    return [header for header in headers if keywords.lower() in header.lower()]


print(find_headline_by_keyword(headlines, "california"))

# Part 2 - Web Scraping + File IO
# This Wikipedia page has a table with data on all of the US Presidential elections. Our goal is to use Beautiful Soup to scrape some of this data into a CSV file. The columns of the CSV should be: order, year, winner, winner electoral votes, runner-up, and runner-up electoral votes. Use commas as the delimiter. For instance, after the header row, the first row of data should look like this:

# 1st,1788–1789,George Washington,69,John Adams,34
# (Hint: use the pdb debugger! Setting break points is a great way to experiment with your code to make sure that you're selecting the right elements and correctly targeting the text that you're interested in.)

# https://en.wikipedia.org/wiki/United_States_presidential_election
# This Wikipedia page has a table with data on all of the US Presidential elections.
# Our goal is to use Beautiful Soup to scrape some of this data into a CSV file.
# The columns of the CSV should be:
# 	order,
#	year,
#	winner,
#	winner electoral votes,
#	runner-up, and
#	runner-up electoral votes.
# Use commas as the delimiter.


# url = 'https://en.wikipedia.org/wiki/United_States_presidential_election'
# data = urllib.request.urlopen(url).read()
# soup = BeautifulSoup(data, "html.parser")

# table_rows = soup.select(".wikitable")[0].select("tr")

# csv_data = [['order', 'year', 'winner', 'winner electoral votes',
#              'runner-up', 'runner-up electoral votes']]

# for row in table_rows[1:]:
#     tdata = row.select('td')
#     order = tdata[0].text
#     year = tdata[1].select("a")[0].text
#     winner = tdata[2].select("a")[0].text
#     votes = tdata[2].text.split("–")[1].strip().split(" ")[0]
#     loser = tdata[3].select('a')[0].text.split("(")[0].strip()
#     loser_votes = tdata[3].text.split(
#         '\n')[0].split("-")[1].strip().split(" ")[0]
#     csv_data.append([order, year, winner, votes, loser, loser_votes])

# with open('elections.csv', 'w') as csvfile:
#     writer = csv.writer(csvfile)
#     writer.writerows(csv_data)


# Part 3 - Server Side Requests
# Using the requests module and the OMDB API, build an application that prompts the user for two pieces of information, the name of an actor/actress and a movie. Your program should tell the user if that actor or actress was in that movie (this will only work for leading actors and actresses). As a bonus, add functionality to tell users who the director and writer of a movie were.


# if you are using python 2 make sure you use raw_input and not input

actor = input('What actor/actress would you like to search for? ')
movie = input('What movie would you like to search? ')

r = requests.get(f"https://omdbapi.com?t={movie}")

if actor.lower() in r.json()['Actors'].lower():
    print(f"Yes! {actor} was in {movie}")
else:
    print("Nope!")
