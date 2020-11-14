Petful-server
Live at: https://chaddrake-petful.herokuapp.com/

Summary
This is a server for the petful-client. It allows you to visit an eccentric adoption agency that operates on a first in first out basis, where you can wait in line and adopt a pet.

API DOCUMENTATION:
/api/people GET returns an array of people currently in the queue
/api/people POST takes in a string and adds that string to the queue
/api/pets GET returns an object with the next cat and dog up for adoption
/api/pets DELETE takes in a string of either cat or dog, dequeues either the cat or dog based on string, and dequeues the people queue as well

![petful-landing](/images/petful-landing.PNG)
![petful-line](/images/petful-line.PNG
![petful-adopt](/images/petful-adopt.PNG

TECHNOLOGY
Express, node.js,
