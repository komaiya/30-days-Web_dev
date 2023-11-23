#!/usr/bin/python3

#Regex - Onboarding Hackathon

#TASK 1: Restaurant names and cuisines follow "Name - Cuisine" where both are arbitrary strings.

import re

def extract_restaurant_data(api_response):
    pattern = r'(.+) - (.+)'
    matches = re.findall(pattern, api_response)
    return matches

api_response = "Restaurant Name - Cuisine Type"
restaurant_data = extract_restaurant_data(api_response)
print(restaurant_data)


#TASK 2: Ingredient lists are comma-separated like "ingredient1, ingredient2, ingredient3".

def extract_ingredients(api_response):
    pattern = r'([^,]+)'
    matches = re.findall(pattern, api_response)
    return matches

api_response = "ingredient1, ingredient2, ingredient3"
ingredients = extract_ingredients(api_response)
print(ingredients)

     #TASK 3: RGB colors are strings like "rgb(255, 255, 255)" with 3 numeric values.

def extract_rgb_colors(api_response):
    pattern = r'rgb\((\d+), (\d+), (\d+)\)'
    matches = re.findall(pattern, api_response)
    return matches

api_response = "rgb(255, 255, 255)"
rgb_colors = extract_rgb_colors(api_response)
print(rgb_colors)



#TASK 4: Social media usernames are in the format "@username" where username can be letters and numbers.

def extract_usernames(api_response):
    pattern = r'@(\w+)'
    matches = re.findall(pattern, api_response)
    return matches

api_response = "@username"
usernames = extract_usernames(api_response)
print(usernames)
    #TASK 5: Product codes are formatted as "ABC123" where A, B and C are letters and 1, 2 and 3 are digits.

def extract_product_codes(api_response):
    pattern = r'([A-Z]{3}\d{3})'
    matches = re.findall(pattern, api_response)
    return matches

api_response = "ABC123"
product_codes = extract_product_codes(api_response)
print(product_codes)



#TASK 6: News headlines follow the pattern "Headline: Subheader" where both parts are arbitrary strings.

def extract_headlines(api_response):
    pattern = r'(.+): (.+)'
    matches = re.findall(pattern, api_response)
    return matches

api_response = "Headline: Subheader"
headlines = extract_headlines(api_response)
print(headlines)
        #TASK 7: Event dates/times follow the pattern "MMM DD, YYYY - hh:mm AM/PM" with standard date and 12-hour time formatting.

def extract_event_datetime(api_response):
    pattern = r'(\w{3} \d{2}, \d{4} - \d{2}:\d{2} [AP]M)'
    matches = re.findall(pattern, api_response)
    return matches

api_response = "Dec 22, 2002 - 10:30 PM"
event_datetime = extract_event_datetime(api_response)
print(event_datetime)



#TASK 8:Email addresses follow the common format "name@domain.com".

def extract_email_addresses(api_response):
    pattern = r'(\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b)'
    matches = re.findall(pattern, api_response)
    return matches

api_response = "name@domain.com"
email_addresses = extract_email_addresses(api_response)
print(email_addresses)                                                               