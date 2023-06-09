# DestinationBucketListWeb

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
