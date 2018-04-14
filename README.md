# **Bitcoin Wallet**


[![ForTheBadge built-by-developers](http://ForTheBadge.com/images/badges/built-by-developers.svg)](https://github.com/DonalMcGahon)

[![ForTheBadge built-by-developers](http://ForTheBadge.com/images/badges/built-by-developers.svg)](https://github.com/ConorTighe1995)

[![ForTheBadge built-by-developers](http://ForTheBadge.com/images/badges/built-by-developers.svg)](https://github.com/Smurfgalway)
[![GitHub contributors](https://img.shields.io/github/contributors/Naereen/StrapDown.js.svg)](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/graphs/contributors)
[![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/issues)
[![Documentation Status](https://readthedocs.org/projects/ansicolortags/badge/?version=latest)](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/blob/master/Disseration.pdf)
[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)
[![made-with-latex](https://img.shields.io/badge/Made%20with-LaTeX-1f425f.svg)](https://www.latex-project.org/)
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)


---

# Application Code Structure
1. [Architecture](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss#architecture)
2. [Main components](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/tree/master/client/app)
3. [Login](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/tree/master/client/app/LoginComponents)
4. [App Navigation](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/tree/master/client/app/NavbarComponents)
5. [User Profiles](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/tree/master/client/app/ProfileComponents)
6. [Bitcoin Wallet](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/tree/master/client/app/WalletComponents)
7. [Social Media Posts](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/tree/master/client/app/StatusComponents)
8. [MLABS & Online Interaction](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/tree/master/client/app/MlabsComponents)
9. [Google Maps Integration](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/tree/master/client/app)
10. [Cryptocurrency Trading](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/tree/master/client/app/TradingComponents)
11. [Cryptocurrency News](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/tree/master/client/app/NewsComponents)
12. [Data Modals](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/tree/master/client/app/DataModals)
13. [Auth Gaurds](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/tree/master/client/app/guards)
14. [Data Services](https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss/tree/master/client/app/services)

---

# Overview
This a application is a fully functional bitcoin wallet but with extended social media features and elements. Users can multiple wallets and have them stored on the profile for recieving and sending bitcoin. Users can add people from around the world to their friends list so they can easily send them bitcoin at any time. Users can share customized social media posts that can include the lasted statics and news on the blockchain along with bitcoin prices, miner performance and more up to date information cryptocurrency users regulars refrence or discuss. Users can customize thir pofiles to use diffenet avatars for appearing online. This application also gives users the ability to convert all major FIAT currencies to bitcoin. The maps integration allows users to see their friends latest location and bitcoin activity. There are 6 different types of stautus post,one for general posts with no data attached, one for blockchain performance, one for wallet balance, one for miner performance, one for bitcoin places of intrest and one for donation requests. The application also has charts to display the  latest bitcoin prices and how it compares to other cryptocurrencys.

# User Guide
## Signing up and my first wallet
Before a user can start using the application they must register with our system. The user must give a valid username and suitable password before they can gain access to the platform. Once logged in the user can now create a wallet by navigating to the wallet section in the naviagation bar. User must enter a wallet label/name and give a pin. The user must enter this pin everytime they attempt to interact with the wallet, simplar to the finacial apps created by banks to maximize security.

## Interacting with other users
Once they have a wallet is set up they view all the users currenly online with the global button or search for users. Once they find the user they are looking for they can click the '+ friend button' to add that person to there friends list. Now the user can send bitcoin to their friends address by clicking the send bitcoin button, inpect that users address with the 'inpect address button' or go view that users location on the map.

## Making status posts
First navigate to the map menu, from here you can view you own stautus on the map or other statuses made by friends. You can choose one of the 6 types of stauts post on the left, depending on the action if it involves a wallet then you must enter the wallet pin to share that information. The application may also ask you for your devices location or to mark a location on the map, to do this simply click the map to set your latitude and longitude.

### What is [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin)?
Here is a brief video to explain some questions you make have about bitcoin.

[![IMAGE ALT TEXT HERE](https://user-images.githubusercontent.com/14197773/35869303-a3ee46ea-0b56-11e8-8350-b5c2013def79.png)](https://www.youtube.com/watch?v=Um63OQz3bjo&t=3s_blank)

## Blockchain.info Business API
Blockchain.info are the largest site for blockchain statisics in the world, we already where planning to use there public API for blockchain statistics and live updates, but then we decided to email them about there private API with soecial permissions and explained what we wanted it for. They replied granting access to the blockchain client, a processor for blockchain requests along with an api code that access the client. This allowed us to devlope ways to create wallets, send bitcoin, check balances and more by using ExpressJs to send and recieve requests from the client running on port 4000 of the machine.

---

## **Installation**

* Clone the repository onto your machine.

``` git clone https://github.com/Smurfgalway/Final-Year-Project-Applied-Diss.git ```

* Install MongoDB on your machine by downloading MongoDB from this link [MongoDB](https://docs.mongodb.com/getting-started/shell/installation/) and follow the websites instructions.

* Once installed run the following command on your command line from directory monogo is installed in.

``` mongod ```

* Install all dependencies in package.json file. This can be done by navigating to the root directory in the command line interface and running the following command:

``` npm install ```

* Next, install all of the Angular 2 development dependencies in package.json file:

``` cd client ```

```npm install ```

* Installation is complete. Stay in the client directory and then:

``` npm start  ```

* Run the blockchain client in a seperate command line window on port 4000:

``` blockchain-wallet-service start --port 4000  ```

* Navigate to the root directory and then:

``` node server.js ```

Access server at: http://localhost:3000


---

## **Technologies**

![image](https://user-images.githubusercontent.com/14197773/35832746-49148e18-0ac6-11e8-98ca-b2b42598a921.png)

The term MEAN stack refers to a collection of JavaScript based technologies used to develop web applications. [1] The MEAN stack is MongoDB, Express.js, Angular 2, and Node.js. Because all components of the MEAN stack support programs are written in JavaScript, MEAN applications can be written in one language for both server-side and client-side execution environments. [2]

### MongoDB

![mongo](https://user-images.githubusercontent.com/14197773/35832055-b86372f0-0ac3-11e8-8c43-7f13981df5db.png)

MongoDB stores data in flexible, JSON-like documents, meaning fields can vary from document to document and data structure can be changed over time. MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use. MongoDB is free and open-source. [3]

### ExpressJS

![express](https://user-images.githubusercontent.com/14197773/35832222-5f04053e-0ac4-11e8-8421-d26ea4a71b7b.png)

Express.js, or simply Express, is a web application framework for Node.js, released as free and open-source software. It is designed for building web applications and APIs. It is in fact the standard server framework for Node.js. Express is the backend part of the MEAN stack, together with MongoDB database and AngularJS frontend framework. [4]

### Angular 2

![angular2](https://user-images.githubusercontent.com/14197773/35832323-cb1dfa9a-0ac4-11e8-8109-595ba0163507.png)

Angular is a TypeScript-based open-source front-end web application platform led by the Angular Team at Google and by a community of individuals and corporations. [5]

Angular is a platform that makes it easy to build applications with the web. Angular combines declarative templates, dependency injection, end to end tooling, and integrated best practices to solve development challenges. [6]

### NodeJS

![NodeJS](https://user-images.githubusercontent.com/14197773/35832471-54815160-0ac5-11e8-9a32-50dbd0771d92.jpg)


Node.js is an open source server framework and it is free. Node.js runs on various platforms (Windows, Linux, Unix, Mac OS X,etc.) It uses JavaScript on the server. [7] Node.js enables JavaScript to be used for server-side scripting, and runs scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. [8]

---

## Architecture

Below is a screenshot from a presentation our team gave to our software development year. This is a basic overview of how the technologies mentioned will connect and interact from back-end to front-end, we are still investigating extra features and technologies that could be used to create these features so this design is subject to change. The full presentation slides are included in this repository. The QR code on the presentation slide is fully functional and will bring you to a link if scanned, the idea was to bring some audiance interaction to our presentation.

![Design](technologies.png)

---

## **References**
[1] - https://www.sitepoint.com/introduction-mean-stack

[2] - https://en.wikipedia.org/wiki/MEAN_(software_bundle)

[3] - https://www.mongodb.com/what-is-mongodb

[4] - https://en.wikipedia.org/wiki/Express.js

[5] - https://en.wikipedia.org/wiki/Angular_(application_platform)

[6] - https://angular.io/docs

[7] - https://www.w3schools.com/nodejs/nodejs_intro.asp

[8] - https://en.wikipedia.org/wiki/Node.js

[Bitcoin](https://en.wikipedia.org/wiki/Bitcoin).