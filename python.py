#! /usr/bin/python3.8
from urllib.request import urlopen
get_url = 'https://gist.githubusercontent.com/jvlad/4152daaf2a9c5c0d74cee6fe23bbc4b1/raw/8f901e58d8a1ea658f8405e94b94cc81b0bb9821/csv_exercise.csv'
f = open(get_url, 'r')
print(f.read())
