# SafetyApp - Project 4
 
The last project of my software engineering course at General Assembly was a solo-project where I built a full-stack application to help and advise
victims of spiking.
 
![SafetyApp - preview](https://i.imgur.com/znkLyI1.png)
 
![SafetyApp - preview 2](https://i.imgur.com/DN5p4h1.png)
 
## Deployment
 
The app is deployed on Heroku, [click here](https://your-safety-app.herokuapp.com/) to try it out.
 
 
## Tech Stack
 
**Client:** React, SASS, React MapBox GL, Evergreen-UI
 
**Server:** Python, Django, PostgreSQL, TablePlus, Insomnia
 
 
## Features
 
- Symptom Checker that matches symptoms of spiking with potential substances
- Login/register to report spikings
- Global heat map of anonymous spiking reports
- Information and guidance for victims and witnesses
- Responsive design
 
 
## Brief
 
The requirements for this project were to build a full-stack application with **PostgreSQL** database using **Python** and **Django**.
For the front end, we were assigned to use **React** and implement responsive design.
 
I took the opportunity to build something I have had my mind on for a long time which was to build something that could be not only useful but also have a helpful impact.
 
## Process and key dates
 
#### Key dates:
- Day 1 - Planning
- Day 2-3 - Building back end
- Day 4-7 - Front-end and MVP
- Day 8-9 - Styling
 
#### Day 1 - Planning
 
As the idea for the app was covering topics that might be uncomfortable or worrying, I wanted to make sure the app would be easy to use and mobile-forward so you could look things up in your own time and feel safe.\
This idea had to show in styling as well, calming colours and clear UI.
 
![SafetyApp - wireframe](https://i.imgur.com/GsDNgTM.png)
 
 
 
#### Day 2-3 - Back end
 
As most of the data that I wanted to store in my database was simple, I decided to spend more time thinking about views to handle the data on the back end, opposite to what I have done in previous projects.
 
 
![SafetyApp - Relationships](https://i.imgur.com/BzUA4o0.png)
 
One of my favourite things that I loved using **Django** for this project was its methods.\
As one of the main features for the app was to find matches from the symptoms linked to substances to user's inputs, the *overlap* method was the perfect way to do the job.
 
![SafetyApp - Matches view](https://i.imgur.com/nRh0Ovw.png)
 
One of the biggest blockers whilst doing the backend was understanding when and where to put *blank=true* or *null=true* when you wanted certain fields to not be required but after becoming a master at remigrating the database I quickly learned the difference.
 
 
 
#### Day 4-7 - Front end
 
Going to this project, I knew the front end had to deal with a lot of content heavy pages so my goal was to keep my components simple and effective.\
Especially on the main feature, symptom checker, was where I separated each step of the form to a different component and added an additional loading page to create a sense of loading.
 
![SafetyApp - code snippet - symptoms](https://i.imgur.com/WsdKkRQ.png)
 
![SafetyApp - code snippet - loading](https://i.imgur.com/7GV7cm5.png)
 
By the end of day 6, I was finished with my MVP which was to have a login/register, symptom checker, ability to report and information pages for different subjects surrounding spiking. \
According to the original schedule that I had set for myself, I was meant to move on to styling but I felt the application needed more content linked to the reports and one of the extra features I had in mind was to create a cluster map of the incidents adding to it each time a report is made.
 
![SafetyApp - code snippet - cluster map](https://i.imgur.com/XTFdF59.png)
 
I am glad I took the time to implement **React MapBox GL** to my application as it really gave the user a visual of the hot spots around the world where people have reported their experiences but also gave me a chance to try adding layers to the map for the first time and converting my data to **GeoJSON**.
 
![SafetyApp - code snippet - geoJSON](https://i.imgur.com/8HqKoGF.png)
 
 
 
#### Day 8-9 - Styling
 
It finally was time to style and I had set myself to try things I haven't done before in previous projects like : animations, better flow for forms and designing more components from scratch.
 
Big thing for me was to create a calming and relaxing colour palette since the theme for the app was spiking, something very stressful and scary to most. \
I drew a lot of my inspiration from an Australian interior design company's website,
[Loftgarten](https://www.loftgarten.co/). Like the bold text across the main page and irregular or zigzag-like placement of content.
 
 
![SafetyApp - styling mockup](https://i.imgur.com/PPBZcAe.png)
 
## Bugs and Challenges


I wanted to challenge myself and use animations for this project as I have not done so in the past projects so therefore I delved deep into different libraries and documentations. Fairly quickly I learned that animations by default rerender again if a state on the page is updated. This caused various bugs in my symptom checker where I had multiple states updating according to the user's inputs.\ 
To fix this I ended up dialling the amount of animations back due to time constraints but also to refocus on the task of clear form inputs and quick usability. 


## Wins
 
I was hesitant to use a map in this project because by the time I was in a position to add nice-to-haves I had only one day left scheduled for the front end and started to get the anxiety of everything breaking at the last minute.\
But I felt that the app could really benefit from a visual interface for the spikings so I set myself a time frame to accomplish the basic version of a map which would determine if I should scrap the idea and move on. See here I think I had the spirits of programming gods with me because I was able to build the map feature with no errors and with the cluster layers in the time I was meant to just test if I could even do it. 
 
## Future Add-ons
- More imagery, perhaps a logo
- Utilise more of the report data to display statistics
- Recreate the app in React Native
- Cover more topics regarding of safety, like stalking and following, safer in-person dating
 
## Key Learnings
 
It was great to finish with a solo project and implement all the topics covered in the past 12 weeks on the course.\
I learned the importance of reading documentation more than you think you need to as it might end up saving you a lot of time when you meet with a common blocker.\
More on the technical side of things, the most important take away I had from this project was the idea to handle and manipulate your data on the back end and use the front end mostly for presentation only.
