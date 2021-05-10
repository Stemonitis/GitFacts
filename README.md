
<p align="center">
  <img width="200" src="https://github.com/Stemonitis/GitFacts/blob/master/src/logo?raw=true">
  <h1 align="center">GitFacts </h1>
</p>

GitFacts is a web app that is hosted on <a href="https://gitfacts.dev/">gitfacts.dev</a> and can help you better navigate the world of software through visualizing GitHub data. Here in this app, we introduce the concept of mindful searching by displaying your results as a layered treemap representing hierarchy and relations between different qualities of every repository. By using this wholesome approach you can truly comprehend the big picture of your search, which can aid you in exploring new possibilities for your future project, looking for a job in a particular company, planning out your future career, choosing the right developer to work for you or just having fun learning new things.



<h1 align="center">Technologies used </h1>

This app is built in React, the diagram is embedded in D3.js and the calls to the GitHub GraphQL API are executed via Apollo Client. The app is deployed with Firebase and tested with Jest and Cypress. To implement the drag and drop options I used React Beautiful DnD library.

<h1 align="center">HowTo</h1>

To start exploring you can type in the topic that you are interested in the search bar and add any options that you want to display in the SunBurst diagram. Options are draggable and droppable, so you can change their order effortlessly, also they memorize your search unless you close them. These are all available options of the GitHub search API. Please, note that this app currently uses one API key, so the number of queries is limited to 5000 per hour. If you have problems or glitches try refreshing the page.


![alt text](https://github.com/Stemonitis/GitFacts/blob/master/src/app.png?raw=true)

For more details and use examples please refer to the <a href="https://gitfacts.dev/#howto">howto section</a> of our website.


<h1 align="center">Thanks for reading!</h1>

If you have anything you think you can contribute to please contact me or open an issue.

















