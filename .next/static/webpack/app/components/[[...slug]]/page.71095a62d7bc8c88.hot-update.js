"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/components/[[...slug]]/page",{

/***/ "(app-pages-browser)/./public/search-data/documents.json":
/*!*******************************************!*\
  !*** ./public/search-data/documents.json ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = /*#__PURE__*/JSON.parse('[{"slug":"/introduction/changelog","title":"Changelog","description":"Changelogs and improvements to the Documents projects.","content":""},{"slug":"/introduction","title":"Introduction","description":"This section provides an overview of how to get started with the Documents, Next.js Document Starter Kit.","content":"![Banner](/images/banner.png \\"Documents\\")\\n\\n## Documents\\n\\nWelcome to **Documents**, a powerful and flexible Next.js documentation starter kit designed to simplify the process of creating high-quality, comprehensive\\r\\nproduct documentation, technical manuals, and business guides. Built with **React**, **Tailwind CSS**, and **TypeScript**, this starter kit provides the\\r\\nfoundation to build your project documentation and knowledge base.\\n\\nDocuments was crafted to streamline the creation, management and showcasing of documentation, allowing developers and teams to focus on the content rather\\r\\nthan building the underlying structure. This documentation aims to help you get up and running with the kit, exploring the various features and providing\\r\\ninsights into how to structure and present your content effectively.\\n\\n<CardGrid>\\n  <Card subtitle=\\"Instructions\\" title=\\"Installation\\" description=\\"Get started with Documents using our quick start installation guide to get your project started.\\" href=\\"/components/introduction/installation\\" />\\n\\n  <Card subtitle=\\"Setup\\" title=\\"Site Settings\\" description=\\"Setting up your Documents projects layout, links and search engine optimisation.\\" href=\\"/components/introduction/setup\\" />\\n\\n  <Card subtitle=\\"Support\\" title=\\"Rubix Studios\\" description=\\"Australia\'s leading branding, marketing and web development company.\\" href=\\"https://essenceui.vercel.app/\\" external={true} />\\n</CardGrid>\\n\\n## Why Documents?\\n\\nDocuments was created as an open-source project to help the community streamline their documentation process, enabling developers to focus on more critical\\r\\ntasks. Built with scalability in mind, it adapts to projects of all sizes, from single-page guides to comprehensive knowledge bases.\\n\\nThe integration of MDX, custom components and Tailwind CSS ensures an intuitive experience, simplifying both content creation and management.\\n\\n* **Product Guides**: Comprehensive manuals for product usage, setup and troubleshooting.\\n* **Business Documentation**: Clear and structured documentation for internal processes, policies and systems.\\n* **Technical Manuals**: Detailed guides for APIs, software development kits (SDKs) and technical processes.\\n\\nDocuments offers extensive customization options, allowing you to easily align the design and functionality with your branding.\\n\\n## Key Features\\n\\nHere are some of the features that make **Documents** ideal for building your documentation:\\n\\n| Feature                              | Description                                                                                                      |\\r\\n|--------------------------------------|------------------------------------------------------------------------------------------------------------------|\\r\\n| **Content Creation**                 | Write documentation using Markdown with JSX, custom components and Mermaid.js for diagrams.                      |\\r\\n| **Navigation & Structure**           | Organize content with multi-level navigation, automatically generated tables of contents and smooth pagination.  |\\r\\n| **Code Features**                    | Syntax highlighting, enhanced code blocks and a code switcher with copy functionality.                           |\\r\\n| **Advanced Search**                  | Fuzzy search with term highlighting for quick and accurate results.                                              |\\r\\n| **Theming & Layout**                 | Supports light/dark modes with automatic switching and responsive design.                                        |\\r\\n| **Math & Tables**                    | Seamless integration of LaTeX for math and structured tables.                                                    |\\r\\n| **SEO & Meta Tags**                  | Built-in SEO, metadata generation and control over meta tags for better search rankings and social sharing.      |\\r\\n| **AI-powered components (In Development)** | Future feature for AI-driven content discussions and search.                                                     |\\n\\n## How to Use These Documents\\n\\nYou\'ll find the documentation\'s navigation bar on the left side of the screen. The pages are organized in a logical sequence, progressing from foundational\\r\\ntopics to more advanced concepts, allowing you to follow along step-by-step as you build your documentation. However, feel free to explore the content in\\r\\nany order, selecting the sections most relevant to your use case.\\n\\nOn the right side of the screen, a table of contents provides easy navigation between sections of each page. For quick access to specific content, you can\\r\\nuse the search bar at the top or the search shortcut (`Ctrl+K` or `Cmd+K`).\\n\\nHead over to the [Installation Guide](/components/introduction/installation).\\n\\n## Join our Community\\n\\nIf you have questions about anything related to Documents, you\'re always welcome to ask our community on [GitHub](https://github.com/rubixvi/rubix-documents), [X (Twitter)](https://x.com/rubixstory), [Facebook](https://www.facebook.com/rubixstudios)\\r\\nand [Reddit](https://www.reddit.com/r/RubixStudios/).\\n"},{"slug":"/introduction/installation","title":"Installation","description":"This guide covers the installation of Documents and how to edit your new project.","content":"To install and edit the Documents, you need to have several prerequisites in place. Here\'s a list of all the essential pre-requisites\\r\\nfor setting up and working on this project.\\n\\n[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frubixvi%2Frubix-documents\\\\&project-name=my-documents\\\\&repository-name=my-documents\\\\&demo-title=Documents\\\\&demo-description=This%20Document%20Starter%20Kit%20is%20developed%20with%20Next.js%2C%20Tailwind%20CSS%20and%20TypeScript.%20It%20serves%20as%20a%20flexible%20and%20scalable%20foundation%20for%20building%20documentation%20websites%20or%20content-driven%20projects.\\\\&demo-url=https%3A%2F%2Frubix-documents.vercel.app%2F\\\\&demo-image=https%3A%2F%2Fgithub.com%2Frubixvi%2Frubix-documents%2Fblob%2Fmain%2Fpublic%2Fscreens%2Fscreen-1.png)\\n\\n## Prerequisites\\n\\n<Step>\\n  <StepItem title=\\"System Requirements\\">\\n    * **Node.js:** Make sure you have Node.js installed. The project uses `npm`, which comes with Node.js. Install Node.js from here.\\n    * **NPM or Yarn:** Since the project uses `npm` commands, ensure that npm is installed with Node.js. Alternatively, you can use Yarn if preferred.\\n\\n    To verify installation, run:\\n\\n    ```bash\\n    node -v\\r\\n    npm -v\\n    ```\\n  </StepItem>\\n\\n  <StepItem title=\\"Git\\">\\n    You need to have Git installed to clone the repository. Download Git from [here](https://git-scm.com/).\\n\\n    ```bash\\n    git --version\\n    ```\\n  </StepItem>\\n\\n  <StepItem title=\\"Code Editor\\">\\n    You’ll need a code editor to work on the project. Common options include:\\n\\n    * [Visual Studio Code](https://code.visualstudio.com/)\\n    * [WebStorm](https://www.jetbrains.com/webstorm/)\\n    * Any other text editor you prefer.\\n  </StepItem>\\n\\n  <StepItem title=\\"Required Knowledge\\">\\n    * **Next.js:** Since this is a Next.js project, you should be familiar with Next.js basics.\\n    * **React:** The project uses React, so understanding React\'s component structure and hooks will help.\\n    * **TypeScript:** The project is written in TypeScript, so you should have a basic understanding of it.\\n    * **Tailwind:** The project uses Tailwind CSS for styling.\\n    * **MDX:** Markdown + JSX (MDX) is used for writing documentation.\\n  </StepItem>\\n</Step>\\n\\n## Installation\\n\\n<Step>\\n  <StepItem title=\\"Clone the Repository\\">\\n    First, clone the repository to your local machine using Git:\\n\\n    ```bash\\n    git clone https://github.com/rubixvi/rubix-documents.git\\n    ```\\n\\n    Change the directory to the project folder:\\n\\n    ```bash\\n    cd rubix-documents\\n    ```\\n  </StepItem>\\n\\n  <StepItem title=\\"Install Dependencies\\">\\n    Use npm to install all the required dependencies:\\n\\n    ```bash\\n    npm install\\n    ```\\n\\n    This will install all the dependencies listed in the package.json file, including:\\n\\n    * Next.js\\n    * React\\n    * TypeScript\\n    * Tailwind CSS\\n    * MDX components\\n    * Other dependencies like ESLint, PostCSS, Husky, etc.\\n  </StepItem>\\n\\n  <StepItem title=\\"Running the Development Server\\">\\n    Start the development server by running:\\n\\n    ```bash\\n    npm run dev\\n    ```\\n\\n    This will start the local server, and you can open your browser at:\\n\\n    ```arduino\\n    http://localhost:3000\\n    ```\\n  </StepItem>\\n\\n  <StepItem title=\\"Editing the Project\\">\\n    * **MDX Files:** Documentation content is stored in `contents/components`.\\n    * **Components:** You can edit React components in the `components/` directory.\\n    * **Tailwind:** Tailwind styling are managed in `tailwind.config.ts` and `app/globals.css`.\\n\\n    To make any changes to the project, open the files in your editor and modify them as needed.\\n\\n    <Note title=\\"Required\\" type=\\"danger\\">\\n      The project\'s search functionality relies on the Husky\'s automation to build `search-data/documents.json` ensure git commit is performed to generate this file.\\n    </Note>\\n  </StepItem>\\n\\n  <StepItem title=\\"Building for Production\\">\\n    Once you’ve made your changes and want to build the project for production:\\n\\n    ```bash\\n    npm run build\\n    ```\\n\\n    This will generate a production-ready build of the app.\\n  </StepItem>\\n\\n  <StepItem title=\\"Running Production Server\\">\\n    To run the production server:\\n\\n    ```bash\\n    npm run start\\n    ```\\n\\n    The production app will be available at:\\n\\n    ```arduino\\n    http://localhost:3000\\n    ```\\n  </StepItem>\\n</Step>\\n\\n## Optional\\n\\n<Step>\\n  <StepItem title=\\"Deploying to Vercel\\">\\n    This project is optimized for Vercel deployment. To deploy to Vercel:\\n\\n    * Go to [vercel.com](https://vercel.com/) and sign up.\\n    * Link your GitHub repository and deploy the project.\\n    * Vercel will handle the build process for you automatically.\\n\\n    The production app will be available at:\\n\\n    ```bash\\n    http://localhost:3000\\n    ```\\n  </StepItem>\\n\\n  <StepItem title=\\"Linting and Pre-commit Hooks\\">\\n    The project uses ESLint for linting and Husky for Git hooks. These tools are configured automatically, but you can customize them in `.eslintrc.json` and `.husky` directories.\\n  </StepItem>\\n</Step>\\n\\n## Important Information\\n\\nThe project\'s search functionality relies on the Husky\'s automation to build `search-data/documents.json` ensure git commit is performed to generate this file.\\n"},{"slug":"/introduction/setup","title":"Setup","description":"Setting up and configuring your documentation project","content":"Setting up your new documentation project is straightforward. Most of the essential project settings can be configured within the `settings` folder.\\n\\n## Settings\\n\\nThis section provides the core settings for your documentation site, such as defining the site\'s URL, site icon and title.\\n\\n```tsx showLineNumbers\\nexport const url = \\"\\"; // The URL for your documentation site\\r\\nexport const siteicon = \\"\\"; // Icon displayed next to the site name in the header\\r\\nexport const sitename = \\"\\"; // Title of your documentation site\\n```\\n\\n## Google Tags\\n\\nThis section allows you to integrate Google Tag Manager into your documentation project. You can add your GTM code and configure whether it\'s connected.\\n\\n```tsx showLineNumbers\\nexport const gtm = \\"\\"; // Add your Google Tag Manager code here\\r\\nexport const gtmconnected = true; // Set to true if GTM is connected, otherwise set to false\\n```\\n\\n## Search Engine\\n\\nConfigure essential SEO settings to ensure your documentation site is optimized for search engines. This includes meta descriptions, keywords and social media sharing details like images and alt text.\\n\\n```tsx showLineNumbers\\nexport const description = \\"\\"; // Description of your documentation site for SEO\\r\\nexport const keywords = [\\"\\", \\"\\"]; // List of SEO keywords for your documentation site\\r\\nexport const urlimage = \\"\\"; // The URL of the image used when sharing on social media)\\r\\nexport const imagealt = \\"\\"; // Alt text for shared images, helpful for screen readers\\r\\nexport const twitterhandle = \\"\\"; // Your company’s Twitter handle for social sharing\\n```\\n\\n## Footer Branding\\n\\nThe footer settings allow you to customize the company information displayed at the bottom of the site. You can add the company name and the URL that the name will link to.\\n\\n```tsx showLineNumbers\\nexport const companyname = \\"\\"; // The company name displayed in the copyright section\\r\\nexport const companylink = \\"\\"; // The URL your company name should link to\\n```\\n\\n## General Layout\\n\\nThe layout settings control the appearance and functionality of various elements of the documentation site, such as branding, the right sidebar, feedback options, table of contents, and scroll-to-top functionality.\\n\\n```tsx showLineNumbers\\nexport const branding = true; // Set to true to display our branding elements\\r\\nexport const rightsidebar = true; // Set to true to enable the right sidebar with feedback, table of contents and scroll-to-top\\r\\nexport const feedbackedit = true; // Control to enable/disable feedback on GitHub\\r\\nexport const tableofcontent = true; // Control to enable/disable the generated table of contents\\r\\nexport const totopscroll = true; // Control to enable/disable scroll-to-top button\\n```\\n\\n## Github Control\\n\\nIf your MDX files are hosted on GitHub, you can configure the project to load documents directly from there. This option can be useful for syncing documentation updates directly with your repository.\\n\\n```tsx showLineNumbers\\nexport const loadfromgithub = false; // Set to true to load your MDX documents directly from GitHub\\n```\\n\\n## Project Structure\\n\\n<CardGrid>\\n  <Card title=\\"Navigation\\" href=\\"/components/navigation\\" icon=\\"alignJustify\\" variant=\\"small\\" description=\\"Creating your navigation\\" />\\n</CardGrid>\\n"},{"slug":"/markup/cards","title":"Cards","description":"This section provides an overview of Introduction.","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste dolorum tempore consectetur explicabo tempora provident quia maxime, molestiae, facilis aperiam et, error illum vel ullam? Quis architecto dolore ullam\\n\\n## Small Card\\n\\n<CardGrid>\\n  <Card title=\\"Page Structure\\" href=\\"/components/deep/deeper\\" icon=\\"alignJustify\\" variant=\\"small\\" description=\\"test description\\" />\\n\\n  <Card title=\\"Page Structure\\" href=\\"/components/deep/deeper\\" icon=\\"alignJustify\\" variant=\\"small\\" />\\n\\n  <Card title=\\"Rubix Studios\\" href=\\"https://essenceui.vercel.app\\" icon=\\"alignJustify\\" external={true} variant=\\"small\\" />\\n</CardGrid>\\n\\n## Large Card\\n\\n<CardGrid>\\n  <Card subtitle=\\"Instructions\\" title=\\"Installation\\" description=\\"Get started with Documents using our quick start installation guide to get your project started.\\" href=\\"/components/introduction/installation\\" />\\n\\n  <Card subtitle=\\"Setup\\" title=\\"Site Settings\\" description=\\"Setting up your Documents projects layout, links and search engine optimisation.\\" href=\\"/components/introduction/setup\\" />\\n\\n  <Card subtitle=\\"Support\\" title=\\"Rubix Studios\\" description=\\"Australia\'s leading branding, marketing and web development company.\\" href=\\"https://essenceui.vercel.app/\\" external={true} />\\n</CardGrid>\\n\\n## Image Card\\n\\n<CardGrid>\\n  <Card title=\\"Rubix Studios\\" href=\\"https://essenceui.vercel.app\\" image=\\"/images/essenceuilink.png\\" external={true} variant=\\"image\\" />\\n\\n  <Card title=\\"Rubix Studios\\" href=\\"https://essenceui.vercel.app\\" image=\\"/images/essenceuilink.png\\" variant=\\"image\\" />\\n\\n  <Card title=\\"Rubix Studios\\" href=\\"https://essenceui.vercel.app\\" image=\\"/images/essenceuilink.png\\" variant=\\"image\\" />\\n</CardGrid>\\n"},{"slug":"/markup/diagrams","title":"Diagrams","description":"This section provides an overview of Introduction.","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste dolorum tempore consectetur explicabo tempora provident quia maxime, molestiae, facilis aperiam et, error illum vel ullam? Quis architecto dolore ullam\\n\\n## Flowchart\\n\\n## Decision Tree\\n\\n## Entity-Relationship Diagram\\n"},{"slug":"/markup/filetree","title":"Filetree","description":"This section provides an overview of Introduction.","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste dolorum tempore consectetur explicabo tempora provident quia maxime, molestiae, facilis aperiam et, error illum vel ullam? Quis architecto dolore ullam\\n\\n<FileTree>\\n  <Folder name=\\"src\\" label=\\"Source Code\\">\\n    <File name=\\"index.tsx\\" label=\\"index.tsx\\" />\\n\\n    <Folder name=\\"components\\" label=\\"Components\\">\\n      <File name=\\"button.tsx\\" label=\\"Button Component\\" />\\n\\n      <File name=\\"input.tsx\\" label=\\"Input Component\\" />\\n    </Folder>\\n\\n    <Folder name=\\"pages\\" label=\\"Pages\\">\\n      <File name=\\"home.tsx\\" label=\\"Home Page\\" />\\n\\n      <File name=\\"about.tsx\\" label=\\"About Page\\" />\\n    </Folder>\\n  </Folder>\\n</FileTree>\\n"},{"slug":"/markup","title":"Introduction","description":"This section provides an overview of Introduction.","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste dolorum tempore consectetur explicabo tempora provident quia maxime, molestiae, facilis aperiam et, error illum vel ullam? Quis architecto dolore ullam\\n\\n* \\\\[x] Write the press release\\n* \\\\[ ] Update the website\\n* \\\\[ ] Contact the media\\n\\n| Syntax        | Description |   Test Text |\\n| :------------ | :---------: | ----------: |\\n| Header        |    Title    | Here\'s this |\\n| Paragraph     |    Text     |    And more |\\n| Strikethrough |             |    ~~Text~~ |\\n\\n# Sample Document with Mermaid\\n\\nHere is a Mermaid diagram:\\n\\nThis diagram should render automatically without any extra imports.\\n\\n## Getting Started\\n\\nTo begin using the Documentation Template, follow these simple steps:\\n\\n* Start by cloning the repository to your local machine.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae iure nulla deserunt dolore quam pariatur minus sapiente accusantium. Optio, necessitatibus sequi. Veritatis, aspernatur? Possimus quis repellat eum vitae eveniet.\\n\\n## Blockquotes\\n\\nBlockquotes are useful for emphasizing key points or quoting external sources:\\n\\n> \\"Documentation is a love letter that you write to your future self.\\" - Damian Conway\\n\\nFeel free to use blockquotes to highlight important information or quotes relevant to your documentation.\\n\\n## Code Examples with switch\\n\\nHere a custom tab component from shadcn ui is used.\\n\\n## Conclusion\\n\\nThank you for choosing the Documentation Template for your project. Whether you\'re documenting software, APIs, or processes, we\'re here to support you in creating clear and effective documentation. Happy documenting!\\n"},{"slug":"/markup/lists","title":"Lists","description":"This section provides an overview of Introduction.","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste dolorum tempore consectetur explicabo tempora provident quia maxime, molestiae, facilis aperiam et, error illum vel ullam? Quis architecto dolore ullam\\n\\n## Checklist\\n\\n* \\\\[x] Write the press release\\n* \\\\[ ] Update the website\\n* \\\\[ ] Contact the media\\n\\n## Simple List\\n\\n* Item 1\\n* Item 2\\n* Item 3\\n\\n## Number List\\n\\n1. Research\\n2. Draft the content\\n3. Review and edit\\n4. Publish\\n\\n## Nested List\\n\\n* Main Category 1\\n  * Sub Item 1.1\\n  * Sub Item 1.2\\n* Main Category 2\\n  * Sub Item 2.1\\n  * Sub Item 2.2\\n"},{"slug":"/markup/maths","title":"Maths","description":"This section provides an overview of Introduction.","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste dolorum tempore consectetur explicabo tempora provident quia maxime, molestiae, facilis aperiam et, error illum vel ullam? Quis architecto dolore ullam\\n\\n## Basic Algebra\\n\\nThe area of a circle ($$A$$) can be calculated using the radius ($$r$$) as follows:\\n\\n```math\\nA = \\\\pi r^2\\n```\\n\\n## Quadratic Formula\\n\\nThe quadratic formula for solving an equation of the form $$ax^2 + bx + c = 0$$ is:\\n\\n```math\\nx = \\\\frac{-b \\\\pm \\\\sqrt{b^2 - 4ac}}{2a}\\n```\\n\\n## Newton\'s Second Law of Motion\\n\\nNewton\'s second law of motion states that force ($$F$$) is the product of mass ($$m$$) and acceleration ($$a$$):\\n\\n```math\\nF = ma\\n```\\n\\n## Pythagorean Theorem\\n\\nThe Pythagorean theorem relates the lengths of the sides of a right triangle:\\n\\n```math\\na^2 + b^2 = c^2\\n```\\n\\n## Einstein\'s Mass-Energy Equivalence\\n\\nEinstein\'s famous equation relates energy ($$E$$), mass ($$m$$), and the speed of light ($$c$$):\\n\\n```math\\nE = mc^2\\n```\\n"},{"slug":"/markup/notes","title":"Notes","description":"This section provides an overview of Introduction.","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste dolorum tempore consectetur explicabo tempora provident quia maxime, molestiae, facilis aperiam et, error illum vel ullam? Quis architecto dolore ullam\\n\\n## Standard Note\\n\\n<Note title=\\"Required\\">\\n  The project\'s search functionality relies on the Husky\'s automation to build `search-data/documents.json` ensure git commit is performed to generate this file.\\n</Note>\\n\\n## Success Note\\n\\n<Note title=\\"Required\\" type=\\"success\\">\\n  The project\'s search functionality relies on the Husky\'s automation to build `search-data/documents.json` ensure git commit is performed to generate this file.\\n</Note>\\n\\n## Warning Note\\n\\n<Note title=\\"Required\\" type=\\"warning\\">\\n  The project\'s search functionality relies on the Husky\'s automation to build `search-data/documents.json` ensure git commit is performed to generate this file.\\n</Note>\\n\\n## Danger Note\\n\\n<Note title=\\"Required\\" type=\\"danger\\">\\n  The project\'s search functionality relies on the Husky\'s automation to build `search-data/documents.json` ensure git commit is performed to generate this file.\\n</Note>\\n"},{"slug":"/markup/steps","title":"Steps","description":"This section provides an overview of Introduction.","content":"The `<Step>` and `<StepItem>` components allow you to create structured step-by-step guides in your documentation. These components are particularly useful when you want to break down a process or tutorial into easy-to-follow stages.\\n\\n## Steps\\n\\nTo create a step-by-step guide in your MDX, you can use the following structure:\\n\\n<Step>\\n  <StepItem title=\\"Install Node.js\\">\\n    Make sure you have Node.js installed on your machine. You can download it from [here](https://nodejs.org).\\n\\n    To verify the installation, run the following command:\\n\\n    ```bash\\n    node -v\\n    ```\\n  </StepItem>\\n\\n  <StepItem title=\\"Install Dependencies\\">\\n    After cloning the repository, navigate to the project directory and install the necessary dependencies:\\n\\n    ```bash\\n    npm install\\n    ```\\n  </StepItem>\\n\\n  <StepItem title=\\"Run the Project\\">\\n    Start the development server:\\n\\n    ```bash\\n    npm run dev\\n    ```\\n\\n    You can access the application at:\\n\\n    ```bash\\n    http://localhost:3000\\n    ```\\n  </StepItem>\\n</Step>\\n"},{"slug":"/markup/table","title":"Table","description":"This section provides an overview of Introduction.","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste dolorum tempore consectetur explicabo tempora provident quia maxime, molestiae, facilis aperiam et, error illum vel ullam? Quis architecto dolore ullam\\n\\n| Syntax        | Description |   Test Text |\\n| :------------ | :---------: | ----------: |\\n| Header        |    Title    | Here\'s this |\\n| Paragraph     |    Text     |    And more |\\n| Strikethrough |             |    ~~Text~~ |\\n\\n| Feature     | Documentation Link | Notes                  |\\n| :---------- | :----------------: | ----------------------: |\\n| **Feature A**| [components](#)           | For more info click here |\\n| **Feature B**| [Guide](#)          | See the full guide here  |\\n| **Feature C**| [Setup](#)          | Setup instructions       |\\n"},{"slug":"/markup/tabs","title":"Tabs","description":"This section provides an overview of Introduction.","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste dolorum tempore consectetur explicabo tempora provident quia maxime, molestiae, facilis aperiam et, error illum vel ullam? Quis architecto dolore ullam\\n\\n## Code Examples with switch\\n\\nHere a custom tab component from shadcn ui is used.\\n"},{"slug":"/navigation","title":"Navigation","description":"How to build our your documents menu and navigations.","content":""},{"slug":"/random","title":"Introduction","description":"This section provides an overview of Introduction.","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste dolorum tempore consectetur explicabo tempora provident quia maxime, molestiae, facilis aperiam et, error illum vel ullam? Quis architecto dolore ullam\\n\\n* \\\\[x] Write the press release\\n* \\\\[ ] Update the website\\n* \\\\[ ] Contact the media\\n\\n| Syntax        | Description |   Test Text |\\n| :------------ | :---------: | ----------: |\\n| Header        |    Title    | Here\'s this |\\n| Paragraph     |    Text     |    And more |\\n| Strikethrough |             |    ~~Text~~ |\\n\\n## Getting Started\\n\\nTo begin using the Documentation Template, follow these simple steps:\\n\\n* Start by cloning the repository to your local machine.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae iure nulla deserunt dolore quam pariatur minus sapiente accusantium. Optio, necessitatibus sequi. Veritatis, aspernatur? Possimus quis repellat eum vitae eveniet.\\n\\n## Blockquotes\\n\\nBlockquotes are useful for emphasizing key points or quoting external sources:\\n\\n> \\"Documentation is a love letter that you write to your future self.\\" - Damian Conway\\n\\nFeel free to use blockquotes to highlight important information or quotes relevant to your documentation.\\n\\n## Code Examples with switch\\n\\nHere a custom tab component from shadcn ui is used.\\n\\n## Conclusion\\n\\nAdding some random stuff to change the code\\n"},{"slug":"/structure/deeper/even-deeper","title":"Introduction","description":"This section provides an overview of Introduction.","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste dolorum tempore consectetur explicabo tempora provident quia maxime, molestiae, facilis aperiam et, error illum vel ullam? Quis architecto dolore ullam\\n\\n* \\\\[x] Write the press release\\n* \\\\[ ] Update the website\\n* \\\\[ ] Contact the media\\n\\n| Syntax        | Description |   Test Text |\\n| :------------ | :---------: | ----------: |\\n| Header        |    Title    | Here\'s this |\\n| Paragraph     |    Text     |    And more |\\n| Strikethrough |             |    ~~Text~~ |\\n\\n<CardGrid>\\n  <Card title=\\"Page Structure\\" href=\\"/components/deep/deeper\\" icon=\\"alignJustify\\" variant=\\"small\\" description=\\"test description\\" />\\n\\n  <Card title=\\"Page Structure\\" href=\\"/components/deep/deeper\\" icon=\\"alignJustify\\" variant=\\"small\\" />\\n\\n  <Card title=\\"Rubix Studios\\" href=\\"https://essenceui.vercel.app\\" icon=\\"alignJustify\\" external={true} variant=\\"small\\" />\\n\\n  <Card title=\\"Rubix Studios\\" href=\\"https://essenceui.vercel.app\\" image=\\"/images/essenceuilink.png\\" external={true} variant=\\"image\\" />\\n</CardGrid>\\n"},{"slug":"/structure/deeper","title":"Introduction","description":"This section provides an overview of Introduction.","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste dolorum tempore consectetur explicabo tempora provident quia maxime, molestiae, facilis aperiam et, error illum vel ullam? Quis architecto dolore ullam\\n\\n* \\\\[x] Write the press release\\n* \\\\[ ] Update the website\\n* \\\\[ ] Contact the media\\n\\n| Syntax        | Description |   Test Text |\\n| :------------ | :---------: | ----------: |\\n| Header        |    Title    | Here\'s this |\\n| Paragraph     |    Text     |    And more |\\n| Strikethrough |             |    ~~Text~~ |\\n\\n## Getting Started\\n\\nTo begin using the Documentation Template, follow these simple steps:\\n\\n* Start by cloning the repository to your local machine.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae iure nulla deserunt dolore quam pariatur minus sapiente accusantium. Optio, necessitatibus sequi. Veritatis, aspernatur? Possimus quis repellat eum vitae eveniet.\\n\\n## Blockquotes\\n\\nBlockquotes are useful for emphasizing key points or quoting external sources:\\n\\n> \\"Documentation is a love letter that you write to your future self.\\" - Damian Conway\\n\\nFeel free to use blockquotes to highlight important information or quotes relevant to your documentation.\\n\\n## Code Examples with switch\\n\\nHere a custom tab component from shadcn ui is used.\\n\\n## Conclusion\\n\\nThank you for choosing the Documentation Template for your project. Whether you\'re documenting software, APIs, or processes, we\'re here to support you in creating clear and effective documentation. Happy documenting!\\n\\n## Tabs Example\\n"},{"slug":"/structure","title":"Structure","description":"This section provides an overview of Introduction.","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iste dolorum tempore consectetur explicabo tempora provident quia maxime, molestiae, facilis aperiam et, error illum vel ullam? Quis architecto dolore ullam\\n\\n* \\\\[x] Write the press release\\n* \\\\[ ] Update the website\\n* \\\\[ ] Contact the media\\n\\n| Syntax        | Description |   Test Text |\\n| :------------ | :---------: | ----------: |\\n| Header        |    Title    | Here\'s this |\\n| Paragraph     |    Text     |    And more |\\n| Strikethrough |             |    ~~Text~~ |\\n\\n## Getting Started\\n\\nTo begin using the Documentation Template, follow these simple steps:\\n\\n* Start by cloning the repository to your local machine.\\n\\nLorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quae iure nulla deserunt dolore quam pariatur minus sapiente accusantium. Optio, necessitatibus sequi. Veritatis, aspernatur? Possimus quis repellat eum vitae eveniet.\\n\\n## Blockquotes\\n\\nBlockquotes are useful for emphasizing key points or quoting external sources:\\n\\n> \\"Documentation is a love letter that you write to your future self.\\" - Damian Conway\\n\\nFeel free to use blockquotes to highlight important information or quotes relevant to your documentation.\\n\\n## Code Examples with switch\\n\\nHere a custom tab component from shadcn ui is used.\\n\\n## Conclusion\\n\\nThank you for choosing the Documentation Template for your project. Whether you\'re documenting software, APIs, or processes, we\'re here to support you in creating clear and effective documentation. Happy documenting!\\n"}]');

/***/ })

});