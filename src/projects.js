const projects = {
  projects: [
    {
      projectID: 2,
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
