import React from "react";
import ReactPlayer from "react-player/lazy";
import {
  FacebookShareButton,
  InstapaperShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  MailruShareButton,
  ViberShareButton,
  WorkplaceShareButton,
  HatenaShareButton,
  EmailShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon,
} from "react-share";

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
            career.
          </h3>
          <div>
            Let`s say you have always wanted to be a game developer. Type in
            your search in the search window (in this case "game development"),
            choose the radio button with all the languages and type in the year
            ranges to see how this field changed. You can change the order of
            filters by simply dragging and dropping them.
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                width="100%"
                height="100%"
                url="https://www.youtube.com/watch?v=rd_IMmRalRk"
              />
            </div>
            <div>
              You can also explore the field through topics. In the field topics
              type in the topic names separates by spaces. If the topic name has
              two words, simply put a dash(-) instead of a space. In our case we
              will search for front end, deep learning, testing and virtual
              reality. Our second filter is the langugages default filter (22
              most popular languages)
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  width="100%"
                  height="100%"
                  url="https://www.youtube.com/watch?v=xj2Ax7zoOK0"
                />
              </div>
            </div>
            But what if you are looking for jobs? GitFacts gives you an
            opportunity to better understand your potential employer with the
            help of the "Organizations" filter. Simply enter the names of the
            organizations that you are interested in separated by spaces. Let`s
            look what languages are prevalently used by google, microsoft and
            AWS. You can also filter organization`s repositories by the license
            type. We added mit license, as we at GitFacts are also big believers
            of the opensource (btw I use arch).
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                width="100%"
                height="100%"
                url="https://www.youtube.com/watch?v=J80gODsnChI"
              />
            </div>
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
            case we will choose last three months. Also we wanted to search in
            readme files for the mentions of "browser extension" keywords, so we
            added another "search in" filter and checked the readme option.
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                width="100%"
                height="100%"
                url="https://youtu.be/Bbn4zUVvn0U"
              />
            </div>
          </div>
          <div>
            To estimate repositories with the biggest impact we will use size,
            stars, forks, visibility filters. Also we will filter out all the
            repositories that are mirrors and the ones that are archived. Let`s
            start by filtering out repositories that weight less than 1MB. After
            that we can apply default stars, followers and forks filters to
            estimate how popular these repositories are. Also we choose to
            exclude repositories that are archived, private and the ones that
            are mirrors.
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                width="100%"
                height="100%"
                url="https://youtu.be/CLkmzft_TrM"
              />
            </div>
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
            <div className="player-wrapper">
              <ReactPlayer
                className="react-player"
                width="100%"
                height="100%"
                url="https://youtu.be/o7Z6ErRf6p0"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="about">
        <h2>Facts about GitFacts</h2>
        <div>
          GitFacts is the tool that can help you better navigate the world of
          software through visualizing GitHub data. Here in this app, we
          introduce the concept of mindful searching by displaying your results
          as a layered treemap representing hierarchy and relations between
          different qualities of every repository. By using this wholesome
          approach you can truly comprehend the big picture of your search,
          which can aid you in exploring new possibilities for your future
          project, looking for a job in a particular company, planning out your
          future career, choosing the right developer to work for you or just
          having fun learning new things.
        </div>
        <br />
        <hr />
        <br />

        <div>
          {" "}
          To start exploring you can type in the topic that you are interested
          in the search bar and add any options that you want to display in the
          SunBurst diagram. Options are draggable and droppable, so you can
          change their order effortlessly, also they memorize your search unless
          you close them. These are all available options of the GitHub search
          API. Please, note that this app currently uses one API key, so the
          number of queries is limited to 5000 per hour. If you have problems or
          glitches try refreshing the page.
          <h3>Q&A</h3>
          <div>
            <em>
              I found a bug in your application or I have ideas on how to make
              your app better.
            </em>
          </div>
          <br></br>
          <div>
            At GitFacts we always appreciate constructive feedback. Please, open
            an issue at our{" "}
            <a href="https://github.com/Stemonitis/GitFacts">
              {" "}
              github repository{" "}
            </a>
            or email us at atokhtamysh@gmail.com
          </div>
          <br></br>
          <div>
            <em>I have troubles understanding how to use your app. </em>
          </div>
          <br></br>
          <div>
            Please, take a look at our HowTo section that will walk you through
            the main features. More about the logic behind search filters can be
            found at{" "}
            <a href="https://docs.github.com/en/github/searching-for-information-on-github/understanding-the-search-syntax">
              GitHub search synthax page{" "}
            </a>
            and{" "}
            <a href="https://docs.github.com/en/graphql/overview/explorer">
              GitHub GraphQL API
            </a>
            . <br></br>
          </div>
          <br></br>
          <div>
            <em>I want to know more about how you built your app. </em>
          </div>
          <br></br>
          <div>
            Our app uses React, GraphQL and D3.js and it is deployed using
            Firebase. More on app creation can be found{" "}
            <a href="tokhtamysh.xyz">here.</a>
          </div>
          <br></br>
          <div>
            <em>How can I support your app?</em>
          </div>
          <br></br>
          <div>
            If you find this app useful don`t forget to open issues, follow and
            share us on social media, and star us on github.
          </div>
          <br></br>
        </div>
      </div>
      <div id="share1" className="black">
        <h2>Share</h2>
        <div>
          Source code can be found in this{" "}
          <a href="https://github.com/Stemonitis/GitFacts">repo.</a>
        </div>

        <TwitterShareButton url="https://gitfacts.dev/" hashtags={["gitfacts"]}>
          <TwitterIcon />
        </TwitterShareButton>
        <LinkedinShareButton
          url="https://gitfacts.dev/"
          title="GitFacts"
          summary="GitFacts is the tool that can help you better navigate the world of
          software through visualizing GitHub data. Here in this app, we
          introduce the concept of mindful searching by displaying your results
          as a layered treemap representing hierarchy and relations between
          different qualities of every repository. "
        >
          <LinkedinIcon />
        </LinkedinShareButton>
        <FacebookShareButton
          quote="New app for github data search visualization"
          hastag="#gitfacts"
          url="https://gitfacts.dev/"
        >
          <FacebookIcon />
          <RedditShareButton url="https://gitfacts.dev/" title="GitFacts">
            <RedditIcon />
          </RedditShareButton>
        </FacebookShareButton>
        <EmailShareButton
          subject="GitFacts Data Visualizing GitHub API tool"
          url="https://gitfacts.dev/"
          body="Check out this new app I found"
        >
          <EmailIcon />
        </EmailShareButton>
        <TelegramShareButton url="https://gitfacts.dev/">
          <TelegramIcon />
        </TelegramShareButton>
        <TumblrShareButton url="https://gitfacts.dev/">
          <TumblrIcon />
        </TumblrShareButton>
        <WhatsappShareButton
          url="https://gitfacts.dev/"
          hashtags={["#gitfacts"]}
        >
          <WhatsappIcon />
        </WhatsappShareButton>
        <HatenaShareButton url="https://gitfacts.dev/" title="GitFacts">
          <HatenaIcon />
        </HatenaShareButton>
        <InstapaperShareButton url="https://gitfacts.dev/" title="GitFacts">
          <InstapaperIcon />
        </InstapaperShareButton>
        <PinterestShareButton
          media="https://www.youtube.com/watch?v=xj2Ax7zoOK0"
          url="https://gitfacts.dev/"
        >
          <PinterestIcon />
        </PinterestShareButton>
        <ViberShareButton url="https://gitfacts.dev/">
          <ViberIcon />
        </ViberShareButton>
        <VKShareButton url="https://gitfacts.dev/">
          <VKIcon />
        </VKShareButton>
      </div>
    </>
  );
};

export default Info;
