# t3-sample
Sample app testing the capabilities of the T3 stack

# Troubleshooting
## Story book '@' alias
Storybook has a known issue with typescript where it does not properly detect the paths alias. I f this happens, go to your .storybook path and add a webpack.config.js (if it does not yet exist) and make sure it contains the following
```
const path = require("path");

module.exports = ({ config }) => {
  config.resolve.alias["@"] = path.resolve(__dirname, "../src");
  return config;
};

```