# drone-game
Games Global assessment 

1.	How would you select which automation tool is best suited for a project?

For this project I decided to use a Selenium alongside Mocha as my automation tools.
I chose Selenium mainly because my game will be a web application that will support many browsers and since Selenium is browser and platform independent, I'll have one script-base that I can run when testing my application.
It being platform dependent means team members won’t be restricted to one operating system which will make collaboration easier as team members will work on a platform they are comfortable with.
Mocha goes well with team collaboration as it is great for describing the testing process. Making the script more readable and understable. This will also prove beneficial in the future when maintaining the scripts.

2. 	How will you go about automating the Movement of the drone?

With Selenium I have options to find an element by id and click them. With this, I'll get the move, rotate-left and rotate-right element and then I'll write a sequence of moves that will be translated to relevant element clicks( similar to what a real user would be doing on the application)

3.	How will your automation confirm that the drone has moved successfully to the correct Location?

I opted to use the Grid layout(10 columns and 10 rows) for the drone platform ( the world). The movement will be the drone moving from one grid block to another.
When it comes to testing, it will be as simple as checking which column and row the drone is in.

4.	How will you automate and confirm that no other sequence of commands can be used   before the Place command has been executed?

There are two ways I went about this.
When the Place command hasn’t been executed, the section where movement commands are located will have its event-pointer revoked which will only be reinstated once the place command has been used. For automation, I'll issue a sequence of clicks and then check if the movement section's event-pointes were reinstated.
Secondly the Drone object has a unique id which i can retrieve it with. I’ve written the game in such a way that that element won’t be added to the Dom (the world) until it has been given an initial position.
So if an initial position hasn’t been given Selenium won’t find the element and thus I can confirm that the sequence of commands wasn't executed on the drone.
This is incase the event-point wasn’t reinstated but the functions were called,

5.	How will you go about automating and verifying that the drone does not go out of the
boundary?
After a sequence of moves I'll check the drone position relative to the world.
If the x / y is greater than the width/height of the world or x/y is negative then the drone is out of the boundary,
Based on your Assessment requirements and your solution, what other automatable test
scenarios can you identify?
 Output
I’ll issue a sequence of moves and then check if the text on the on the Report element matches the expected output 
Projectile movement/and explosion
I’ll check projectiles postion in the grid and then check if it at a position i expect it to be in. for the explosion, i’ll use an image. I can then check the projectle image src and see if it;s the same as the explosion image src  
Rotating left and right
Affter issuing a sequenc of rotations, I can get the drone element by id and the get it’s translation attribute. If it values is the same as the expected value then everything should be fine.






