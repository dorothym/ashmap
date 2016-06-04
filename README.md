# Ash Map NYC

## Application purpose
An interactive map of ash trees in New York City based on 2015 Tree Census Data, built for the one-day [TreesCount Data Jam](http://treescountdatajam.devpost.com).

It was designed to help answer the [question](http://treescountdatajam.devpost.com/updates/5447-treescount-data-jam-challenges), "How can we use tree census data to identify areas at risk from threats to the urban forest, such as the Emerald Ash Borer?"

## What qualifies as an ash tree for the purposes of this application?

* Any tree whose Latin name (`spc_latin`) contains "Fraxinus".

## Notes on data

I visited the [2015 Tree Census Data Site](https://data.cityofnewyork.us/Environment/2015-Street-Tree-Census-Tree-Data/pi5s-9p35) on June 3, 2016 and selected Download > Download without geospatial data > Download as CSV.

I sorted that file by Latin name (`spc_latin`). I chopped off all rows that did not contain Fraxinus. This left 12,789 rows, representing 12,789 Fraxius trees.

To build a proof of concept, I decided to focus on trees in the Bronx, since Parks Department staff told us that would probably be one of the first areas in NYC where the emerald ash borer would hit. 

## Libraries and frameworks used
I used Node, Express, Bootstrap, Leaflet, Angular, and jQuery.

## Deployment
This application is not deployed, but feel free to contact me at recruiting@licwebfactory.net if you would like to work with me on deploying it!