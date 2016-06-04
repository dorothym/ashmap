# Ash Map NYC

## Application purpose
An interactive map of ash trees in New York City based on 2015 Tree Census Data.

## Data source

I visited https://data.cityofnewyork.us/Environment/2015-Street-Tree-Census-Tree-Data/pi5s-9p35 on June 3, 2016 and selected Download > Download without geospatial data > Download as JSON.

Within that file, meta.data is an array of arrays. Each internal array represents one tree.

### Notes on data set

* This data set contains 648 occurences of "Fraxinus."
* This data set may contain incomplete data for Brooklyn and Queens.

## What qualifies as an ash tree?

* Any tree whose Latin name (`spc_latin`) contains "Fraxinus".

## Libraries and frameworks used
I used Node, Express, Bootstrap, Leaflet, Angular, and jQuery (along with a bunch of other Node modules).

