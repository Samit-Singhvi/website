/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
 
  // But you can create a sidebar manually
 
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Weekly Report',
      id: 'about'
    },
   {
     type: 'category',
     label: 'Documents- Instructions',
     items:[
       {
      type: 'doc',
      label: 'Markdown',
      id: 'markdown'
    },
    {
      type: 'doc',
      label: 'Environment Variables',
      id: 'environment-variables'
    },
    {
      type: 'doc',
      label: 'Fundamentals of Linux',
      id: 'linux'
    }
        ],
},
],
};

module.exports = sidebars;
