# indy_martketplace


# Project Title
Indy mARTketplace is a locally focused website that allows artists and art lovers to connect.  Artists can create profiles to showcase their works and services.  Buyers can browse local art and connect with their favorite artists.  We cut out the middleman and connect you directly.  

#Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

# Prerequisites
This application is a single repository react/express/mongo application deployed on heroku

To run a deployment of this application you will need to install js, node.js, npm, and mongodb. You will also need to make an account with AWS and make a s3 bucket for image storage. https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-bucket.html. 
The application was deployed with heroku and mlab. You can choose to deploy anywhere else but the successful deployment was only test with those 2 services.
Installing

To get this project running, first clone the git repo.

Run 

	npm init
	npm install
  
on the top folder tree to install dependencies.

Since this is a single repository, cd into client/ folder and run npm install also. This will pull in all dependencies for the react application.

Next, copy .env.example into a .env file. You will need a mongo database to connect to the MONGODB_URI. This can be local using the mongo shell or using a service like mlab.

The other .env variables are for the s3 bucket through the AWS services. 
	
  https://docs.aws.amazon.com/AmazonS3/latest/user-guide/create-bucket.html. 

This link takes you through making an account and setting up a bucket. The information needed will be included in the setup.

The last thing is since this is a single repo, there are proxies being used to forward requests from the front end to the back end. This proxy is set up in the package.json of the client folder. The project is setup to run on port 3000 for the frontend and 5000 for the backend. If you wish to change ports this value will also have to be changed to match.

The last part of the local setup is more house keeping from our coding. Lines 23 , 32-34 in the app_booty.js file on the top level for the backend need to be commented out to run locally. Also, Lines 50-58 can be uncommented to handle starting and stopping the local deployments.

To then run both the front end and back end at the same time, in the command line run,
	npm run dev
This will start both processes on their respective ports.

# Running the tests
Currently, there is no testing set up for our project. This is something we need to add.

# Deployment
Since this project is a single repository, it is only deployed to heroku. The `package.json` specifies in the heroku post build to run a build process on the client folder which contains react application. The backend then serves the react application as static files.

To start, run 
	heroku create 
on the master branch. This will make a heroku repository for you. You will need to have a heroku account for this and the heroku cli downloaded.

For deployment, the environment variables will need to be set for heroku to run the application. This is done with 
	heroku config:set VAR=Value 
in the command line. Change VAR and value to what you need. The list of variables needed can be found in the env.example file in the file tree.

One of these variables will be the mongo database that you want to use for deployment. The address for it needs to be set.

The other env variables pertain to the s3 bucket that was used. You will need to look at the link above to set one up and then assign the values to the heroku env variables.

You will also need to run the command 
	heroku ps:scale web=1 
in order to scale the heroku application to allow connections to it.

The homepage value in the package.json in the client folder needs to be changed to the url for your new heroku application.

After all this is set, run 
	git add .
	git commit -m “what you want to say”
	git push heroku master

This will deploy you project to heroku and it is ready to go.

*Note, this project was built with npm. Using yarn can and most likely will break the build. Heroku doesn’t like seeing 2 different package managers.

# Built With
	•	React- The web framework used
	•	MATERIAL-UI - Used to generate RSS Feeds
	•	Express - Backend Routing
	•	Mongoose - Middleware package for using mongoDB
	•	AWS s3 - service for storing and serving images


# Authors
	•	Meaghan Crowell - Product Owner
	•	Aaron Jackson - Lead Developer
	•	TJ Hindman - Quality Assurance
	•	Brian Schuessler - Quality Assurance


# Acknowledgments
	•	Many thanks to Kenzie Academy instructors and coaches for your assistance and wisdom.
	•	Thanks to Chok Ooi and the other Kenzie Academy founders for creating an amazing space for learning.
	•	Thanks to all the artists who contributed their work to debut this project.
