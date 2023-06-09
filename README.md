# DestinationBucketListWeb

This is a personal private vacation destinations bucket list web app. 
Firstly, the user must authenticate (register/log in); then, he gains access to its private list, as well as a public list.
When the user is on the private list page, he can push a button to add a new entry. Each destination has a geolocation(country and zone), title, image, description and stay dates(start date and end date). Via the entries in the table, the user can remove, update and favourite a certain destination.
When the user marks a destination as favourite, the destination gets to the public list, where anyone can see it.
The user has one of two roles: "USER" or "ADMIN". The admin can manage the public list of destinations(modify or delete).
Any user can delete its account and there goes its destinations too.

For this project two technologies were used, namely Angular and Spring, to implement the following features:

![image](UseCaseDiagram.png)


Backend Class Diagram:

![image](https://github.com/sarbudragos/DestinationBucketListWeb/assets/32175050/117d5afa-5e21-4b31-a8b1-7486b9d98488)


The backend is deployed on an Google Cloud VM instance, using the following technologies:
-Tomcat is the application server
-Nginx is the reverse proxy
-certbot, used to acquire a certificate for the proxy server, for https connection

The frontend is deployed on Netlify:
https://6482dd64cc1eac375eb9206d--hilarious-lollipop-832f7b.netlify.app/

The frontend is written with Angular using Typescript. Styling was done with Tailwind and CSS. Features route protected pages, login using JWT tokens.
![image](https://github.com/sarbudragos/DestinationBucketListWeb/assets/91518647/62b7d6b6-8baa-4a03-9d21-fc40f2eb8599)
![mock](https://github.com/sarbudragos/DestinationBucketListWeb/assets/91518647/4d47c682-0629-43bb-98f4-74e7e361d8d9)
