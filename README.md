# Neighborhood Map Project
This is the final project (#7) in Udacity's FEND Nanodegree.  Below you will find instructions on getting this app to run on your machine.

## Description
This is an interactive map displaying parks around the city of San Antonio.  The markers drop in upon page load and bounce when clicked or when the corresponding venue is clicked in the venue list.  The venue list may be hidden/shown at anytime simply by clicking the "Menu" button.

## Getting Started
If you want to get your own copy of the neighborhood map just follow these simple steps.

### Get Your API Keys
* You'll need to get your own API key for the Google Maps service and it can be found [here](https://developers.google.com/maps/documentation/javascript/get-api-key)

* Once you've done that you'll want to head over to [Foursquare](https://developer.foursquare.com/), register for an account, and then create your own API keys.  You'll need a `client key` and a `secret key`.

* Save these keys for the steps below.

### Get the Files
Either fork this repo or download the files to your local machine.  Once that's done, cd into the directory and in your command line run `npm install` to get all the packages you'll need listed in the `package.json` file.

Once that rather lengthy install is finished, run `npm start` to get up and running.  Typically this will open your default browser on `port 3000`.  If that doesn't happen and you don't receive any errors in your terminal, open your browser and tyoe `localhost:3000` in the address bar.