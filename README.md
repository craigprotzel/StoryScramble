"Story Scramble" is my thesis project for my master's degree @ NYU ITP 

The project is a web-based application designed specifically for people with early stage memory loss. specifically people dealing with MCI and early stage Alzheimer's.
I'm working directly with the NY Alzheimer's Association (http://www.alz.org/nyc/) with the goal of creating a "brain exercise game" that will be usable by their clients.

The site uses the ExpressJS framework with NodeJS and EJS as a template language. 

Template files are in the /views folder.
Static files are in the /static folder

Before running locally run the command 
npm install
This will install all dependencies in the package.json file.

I'm accessing the USA Today API to obtain site content and the Diffbot API to show the article text on the page. 

Back-end data is being stored in a MongoLab DB.
I'm also using one local storage variable to track the user's "topic" choice

The files were created with a great deal of help from John Schimmel (https://github.com/johnschimmel) and the Heroku tutorial, "Getting Started with Node.js on Heroku/Cedar" http://devcenter.heroku.com/articles/node-js

I also owe a great deal of gratitude to Jeremy Scott-Diamond (http://www.jeremyscottdiamond.com/) and Martin Bravo (http://www.bravomartin.cl/) for their technical and creative expertise. Could not have done this without their help and support.



