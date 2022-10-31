const projects = {
  projects: [
    {
      projectID: 3,
      name: "Portfolio",
      description: [
        "At the risk of being a little bit recursive, I did feel I had to include this in my list of projects.",
        "I've built this website to showcase my projects, and I've largely focused on a clean, responsive design whilst also exploring the challenges of not including a back end application.",
        "It's been a journey of causing memory leaks by neglecting to remove event listeners, constantly rethinking my CSS, and getting a little too distracted by how SVGs work. ",
        "I aim to build out this website as I advance in my career, hopefully to the point where I run into performance issues so I can learn how to handle those too.",
      ],
      imgURL: "../Images/Christopher-Rule.png",
      projectURL: "https://www.christopher-rule.com/",
      githubURL: "https://github.com/Chris-Rule/portfolio",
    },
    {
      projectID: 2,
      name: "Forex Expert Advisors",
      description: [
        "One of the reasons for my initial foray into coding was an interest foreign exchange (forex) currency trading, more specifically an interest in automating the testing and deployment of trading strategies.",
        "The languages I elected to use are two versions of a C++ based language called Metaquotes Language, which include the older MQL4 which has far more learning resources available, and the relatively new MQL5 which is fundamentally faster and supports asynchronous executions.",
        "Making trading bots is something of a never-ending enterprise as there's always another tweak to be made, but as I only trade in demo environments it's become a great place to work on my skills and really get to grips with the challenges of code that goes into continuous use.",
        "Since my bootcamp I have been refactoring a lot of my code with a focus on the seperation of concerns and implementing testing wherever I can.",
        "Image provided courtesy of the Metatrader App.",
      ],
      imgURL: "../Images/Metatrader.png",
      projectURL: "https://github.com/Chris-Rule/Public-EAs",
      githubURL: "https://github.com/Chris-Rule/Public-EAs",
    },
    {
      projectID: 1,
      name: "RESTless",
      description: [
        "The final project on the Northcoders bootcamp I attended consisted of an eight day project block working in a team of four.",
        "We were encouraged to avoid forming a heirarchy and instead focus on working collaboratively, and we were also expected to explore new technologies rather than lean on the React and PostgreSQL skills we had developed over the course of the bootcamp.",
        "For our final project we developed a workout application using Svelte on the front end and Node, Express and a MongoDB database on the back end.",
        "Our knowledge from the bootcamp definitely helped us pick up these new technologies smoothly, and whilst the project itself definitely challenged our communications skills I felt we worked really well together as a team, and I'm particularly proud that the minimum viable product we set out at the start of the project is almost exactly what we ended up producing.",
      ],
      imgURL: "../Images/Restless.png",
      projectURL: "https://restless.vercel.app/",
      githubURL: "https://github.com/SFagelman/RESTless-fe",
    },
    {
      projectID: 0,
      name: "NC-News",
      description: [
        "This was my first real full-stack project, assembled during my time at the Northcoders bootcamp I attended in 2022.",
        "It was an intense course, and it was great to see our newly-acquired knowledge come together in this starter project.",
        "The back-end was built out first using Node.js, PostgreSQL and Express, with a heavy emphasis on Test Driven Development, then later we built up the front end with React.",
        "There is definitely more work to be done, particularly on the styling front, but I feel I learnt a lot of what not to do on this project, and I hope to apply those lessons as I move forward.",
      ],
      imgURL: "../Images/NC-News.png",
      projectURL: "https://nc-news-cr.netlify.app/",
      githubURL: "https://github.com/Chris-Rule/FE-NC-News",
    },
  ],
};

export default projects;
