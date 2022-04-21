const client = require("contentful").createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});

const getProjects = () =>
  client
    .getEntries({
      content_type: "projects",
      order: "sys.createdAt",
    })
    .then((response) => response.items)
    .catch((error) => console.log(error.message));

const getSingleProject = (slug) =>
  client
    .getEntries({
      "fields.name": slug,
      content_type: "projects",
    })
    .then((response) => response.items)
    .catch((error) => console.log(error.message));

export { getProjects, getSingleProject };
