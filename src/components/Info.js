import React from "react";
import video from "../../media/1st.mp4";

const Info = () => {
  return (
    <>
      <div id="howto" className="black">
        <h2>HowTo. Tutorial through usecases</h2>
        <div>
          There are a variety of tasks you can accomplish with the help of our
          app. Whether it comes to planning your journey as a student in
          computer science, deciding between the tide of applicants for the job
          you are offering, outlining a timetable for your exciting new project
          or looking to get hired by a particular company GitFacts got you
          covered. Please, take a look at our short videos to have a better
          understanding of our app has to offer.
        </div>
        <div>
          <h3>
            Case 1. Exploring the world of programming and planning your future
            career.{" "}
          </h3>
          <div>
            Let`s say you have always wanted to be a game developer. Type in
            your search in the search window (in this case "game development"),
            choose the radio button with all the languages and type in the year
            ranges to see how this field changed. You can change the order of
            filters by simply dragging and dropping them.
            <video autoPlay={true} src={video} />
            <div>
              You can also explore the field through topics. In the field topics
              type in the topic names separates by spaces. If the topic name has
              two words, simply write it as one word. In our case we will search
              for front end, deep learning, testing and virtual reality. Our
              second filter is the langugages default filter (22 most popular
              languages)
            </div>{" "}
            But what if you are looking for jobs? GitFacts gives you an
            opportunity to better understand your potential employer with the
            help of the "Organizations" filter. Simply enter the names of the
            organizations that you are interested in separated by spaces. Let`s
            look what languages are prevalently used by google, microsoft and
            amazon. You can also filter organisation`s repositories by the
            license type. We added mit license, as we at GitFacts are also big
            believers of the opensource (btw I use arch).
          </div>
        </div>
        <div>
          <h3>Case 2. Planning out some awesome project of yours.</h3>
          <div>
            Let`s say you want to write a browser extension that enhances
            productivity, but you have no idea in which technologies are used
            for that, how many of similar extensions already exist and, oh, how
            popular it can get in the case you want to eventually monetize it.
            Start out by entering "browser extention" in the search. Languages
            filter is useful to better understand current technologies. The
            ratio of the last created helps to choose projects that were active
            and actively maintained for the extended periods of time. In our
            case we will choose last three months.
          </div>
          <div>
            To estimate repositories with the biggest impact we will use size,
            stars, forks, visibility filters. Also we will filter out all the
            repositories that are mirrors and the ones that are archived. Let`s
            start by filtering out repositories that weight less than 1MB. After
            that we can apply default stars, followers and forks filters to
            estimate how popular these repositories are. Also we choose to
            exclude repositories that are archived, private and the ones that
            are are mirrors.
          </div>
        </div>
        <div>
          <h3>
            Case 3. Getting to know your job applicants/students/colleages
          </h3>
          <div>
            In our case we chose to get inspired by a couple of developers by
            studying their developer paths. We can observe how their number of
            stars, followers, repos sizes and technologies changed over certain
            periods of time. Let`s get inspired by Francois Chollet, Dan Abramov
            and Quincy Larson.
          </div>
        </div>
      </div>
      <div id="about">
        <h2>About</h2>
        <div>
          Troubleshooting. I don`t see the graph. I get errors from the API I
          want to know more about their code
        </div>
      </div>
      <div id="share1" className="black">
        <h2>Share</h2>
      </div>
    </>
  );
};

export default Info;
