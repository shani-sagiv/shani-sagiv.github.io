const minimist = require("minimist");

module.exports = function (plop) {
  // Parse command-line arguments
  const args = minimist(process.argv.slice(2));

  plop.setGenerator("component", {
    description: "Generate a React component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name:",
        // Skip the prompt if --name is passed
        default: args.name,
      },
      {
        type: "input",
        name: "location",
        message: "location:",
        // Skip the prompt if --name is passed
        default: args.location,
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/assets/data/{{pascalCase location}}/{{pascalCase name}}/{{pascalCase name}}.tsx",
        templateFile: "templates/component.hbs",
      },
      {
        type: "add",
        path: "src/assets/data/{{pascalCase location}}/{{pascalCase name}}/index.ts",
        templateFile: "templates/index.hbs",
      },
      {
        type: "add",
        path: "src/assets/data/{{pascalCase location}}/{{pascalCase name}}/images/index.ts",
        templateFile: "templates/images.hbs",
      },
      {
        type: "add",
        path: "src/assets/data/{{pascalCase location}}/{{pascalCase name}}/images/profile.jpeg",
        templateFile: "templates/img_placeholder.hbs",
      },
      {
        type: "add",
        path: "src/assets/data/{{pascalCase location}}/{{pascalCase name}}/images/general/.gitkeep",
        template: "", // Creates an empty file
      },
    ],
  });
};
