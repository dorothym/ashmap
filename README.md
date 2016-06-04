# Ash Map NYC

## Application purpose
An interactive map of ash trees in New York City based on 2015 Tree Census Data.

## What qualifies as an ash tree for the purposes of this application?

* Any tree whose Latin name (`spc_latin`) contains "Fraxinus".

## Data source

I visited https://data.cityofnewyork.us/Environment/2015-Street-Tree-Census-Tree-Data/pi5s-9p35 on June 3, 2016 and selected Download > Download without geospatial data > Download as CSV.

I sorted that file by Latin name (`spc_latin`). I chopped off all rows that did not contain Fraxinus. This left 12,789 rows.

### Notes on data set

* This data set may contain incomplete data for Brooklyn and Queens as of 6/3, according to the data owners.

## Libraries and frameworks used
I used Node, Express, Bootstrap, Leaflet, Angular, and jQuery.

### CSV key
the_geom,tree_id,created_at,block_id,tree_dbh,stump_diam,curb_loc,status,health,spc_latin,spc_common,steward,guards,sidewalk,user_type,root_stone,root_grate,root_other,trunk_wire,trnk_light,trnk_other,brch_light,brch_shoe,brch_other,address,zipcode,zip_city,cb_num,borocode,boroname,cncldist,st_assem,st_senate,nta,nta_name,boro_ct,state,latitude,longitude,x_sp,y_sp