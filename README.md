# Ash Map NYC

## Application purpose
An interactive map of ash trees in New York City based on 2015 Tree Census Data.

## What qualifies as an ash tree for the purposes of this application?

* Any tree whose Latin name (`spc_latin`) contains "Fraxinus".

## Notes on data

I visited https://data.cityofnewyork.us/Environment/2015-Street-Tree-Census-Tree-Data/pi5s-9p35 on June 3, 2016 and selected Download > Download without geospatial data > Download as CSV.

I sorted that file by Latin name (`spc_latin`). I chopped off all rows that did not contain Fraxinus. This left 12,789 rows. 

For a proof of concept, I limited the 12,000 to trees in the Bronx (again by sorting the CSV file).

For the final display, I took 1,000 of the 2,000+ ash trees in the Bronx, just to have something to show at the end of hack day.

### Notes on data set

* This data set may contain incomplete data for Brooklyn and Queens as of 6/3, according to the data owners.

## Libraries and frameworks used
I used Node, Express, Bootstrap, Leaflet, Angular, and jQuery.

## Deployment
This application is not deployed, but feel free to contact me at recruiting@licwebfactory.net if you would like to work with me on deploying it!