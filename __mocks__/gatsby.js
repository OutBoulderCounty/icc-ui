const React = require("react");
const gatsby = jest.requireActual("gatsby");

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({ activeClassName, activeStyle, getProps, innerRef, partiallyActive, ref, replace, to, ...rest }) =>
      React.createElement("a", {
        ...rest,
        href: to,
      })
  ),
  Slice: jest.fn().mockImplementation(
    ({ alias, ...rest }) =>
      React.createElement("div", {
        ...rest,
        "data-test-slice-alias": alias,
      })
  ),
  useStaticQuery: jest.fn(() => ({
    site: {
      siteMetadata: {
        title: `Inclusive Care CO`,
        description: `TODO`,
        author: `Out Boulder County`,
        siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
      },
    },
  })),
};