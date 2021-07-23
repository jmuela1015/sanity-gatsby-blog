export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "60fb444f600c660950e36753",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-a2h3hku9",
                  apiId: "13334a2a-e299-4cae-b7d9-db1e32e1f259",
                },
                {
                  buildHookId: "60fb444f131ab30abf76c05a",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-iaext3kp",
                  apiId: "9ca2156f-8881-4777-82d8-89fe423c7682",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/jmuela1015/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-iaext3kp.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
