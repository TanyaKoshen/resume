# Introduction
## Project Overview
The "Resume" project is a single-page web application developed using React, TypeScript, and pure CSS. It functions as a resume, enabling users to discover information about the creator (Tatiana Peretyatko), delve into the creator's skills and experiences, and provide feedback on the website.

## Technologies Used
#### -React
#### -TypeScript
#### -CSS, CSS Modules
#### -Figma
#### -React Router DOM
#### -Firebase Firestore (for data storage)
#### -React Testing Library
#### -GitHub Actions (CI)
#### -Netlify (CD)

# Getting Started
## Installation
   Clone the repository from https://github.com/TanyaKoshen/resume.
   Navigate to the project directory in your terminal.
   Run `npm install` to install the project dependencies.
   In the project directory, run `npm start`. Runs the app in the development mode.
   Open http://localhost:3000 to view it in the browser.
   The page will reload if you make edits.
   You will also see any lint errors in the console.

## Scripts
In this project, scripts are located in the package.json file

#### `npm start`: Starts the development server on port 3000
#### `npm run build`: Optimizes and bundles the code for deployment, making it suitable for production use.
#### `npm run test`: Executes test cases and obtains test results
#### `lint`: Runs ESLint, checks and enforces code style and quality rules. It focuses on *.ts and *.tsx files. If possible, it will automatically fix fixable issues.

# Project Structure
## Directory Structure

    /src
        /app/providers   -  routing
        /components  - main layout components, including header and sidebar
        /db - Firebase connection config
        /pages  - contain directories with React component tsx files and CSS modules
        /shared - custom UI components, assets(pictures, logos, pdf)
        /styles - index css and css variables

# Components - Main Layout Structure
### Header:
   At the top of the viewport, we have the header. It contains links to the relevant GitHub files related to what you're currently viewing. This makes it easy for users to see the code behind the content. 
   
### Sidebar:
   On the side, there's a vertical menu. It's where you can find links to different sections like your resume, about me, skills, experience, education, and contact. It's user-friendly and works well even on smaller screens.
   
### Outlet:
   The outlet, also known as the content area, is where the main content of the page is rendered. It dynamically displays score information such as the home page, about me, skills, experience, education, contact and information.

# Navigation and Routing
   The application simulates a multipage experience using React Router DOM. It dynamically renders different sections based on the URL, offering seamless navigation with back and forward functionality, making it feel like multiple pages. Additionally, GitHub links in the header offer direct access to relevant code repositories, enhancing transparency and code exploration.



# Pages
### Home
   The “Home” page serves as the default landing page for the application. It features a captivating background picture that sets the visual tone for the site. Prominently placed on this page is a download button that allows users to easily access and download my resume. 
   
### About
   The "About Me" page is a brief summary of who I am, highlighting my background, skills, and experiences. It serves as a personal introduction, providing an overview similar to my resume.
  
### Skills
   The "Skills" page showcases my primary technology stack and skills. It uses logos with tooltips to explain each technology, enhancing understanding. I also provide self-assessments for my skills, giving users insights into my expertise.
  
### Experience
   The "Experience" page presents my relevant web development roles and achievements in a structured timeline. It highlights key responsibilities, projects, and skills used, providing a clear overview of my professional journey. 
   
### Education
   The "Education" page is a brief yet meaningful section that features the emblems of my two alma maters. It encapsulates the significance of my educational journey, paying homage to the institutions that have shaped my path and knowledge.
   Contact
   The "Contact" page offers straightforward ways to connect with me. Users can send an email, connect on LinkedIn, or view my location on Google Maps for convenience and accessibility. 
   
# Features
### GitHub Links
   The GitHub links  in the header  positioned  to the left  dynamically change based on the content being viewed. Clicking these links takes users to the relevant GitHub directory, allowing them to explore the code behind the displayed content.
###  UX Scoreboard Feature Overview:
   Located on the right side of the header menu, the UX Scoreboard tab provides users with access to a dedicated score page. This page offers a comprehensive overview of the website's user experience, evaluated across multiple criteria:
####   Usability:
   The scoreboard assesses the website's ease of use and navigation, ensuring a user-friendly experience.
####  Visual Design:
   It evaluates the overall visual aesthetics and design coherence of the web application, aiming for an engaging and appealing look. 
   
#### Content Fullness:
   Users can gauge the completeness of content, ensuring that it effectively communicates the desired information.
#### Responsive Web Design:
   The scoreboard checks how well the website adapts to various screen sizes, ensuring a seamless experience on different devices.
#### Browser Compatibility:
   It assesses compatibility with different web browsers to ensure broad accessibility. 
   
#### Performance:
   The performance of the web application, including loading speed and responsiveness, is evaluated.
### User Feedback and Rating:
#### Voting:
   Users can provide feedback by clicking the "Leave Feedback" button voluntarily. This action activates a scoring system where users can rate their experience across different categories.
#### Scoring:  
   Users are presented with the opportunity to rate their own experience in each category, allowing them to express their opinions on usability, design, content, responsiveness, browser compatibility, and performance.
#### Validation:
   To ensure comprehensive feedback, the "Submit" button remains inactive until the user has rated all the category fields. This encourages users to provide ratings for all aspects of their experience before submitting feedback.
### Current User Time
   The header displays the current time based on the user's device clock.
   It updates in real-time, providing users with the current time as they navigate the site.
## Responsive Web Design
###   Sidebar Menu Behavior:
   On larger screens, the sidebar menu is always visible, providing easy navigation to different sections of the application.
   On smaller screens (600 pixels or less), a hamburger icon appears to save space.
   Clicking the hamburger con toggles the menu's visibility, ensuring a clean and focused interface for users.
### Hook: useResponsive
   The useResponsive custom hook is designed to assist in creating responsive web designs within a React application. It leverages the browser's built-in window.matchMedia API to detect changes in the screen's viewport size and returns a boolean value indicating whether the screen matches a specified media query.
## Custom UI Components:
###   Custom Buttons:
   The application features two types of custom-designed buttons, enhancing the user interface and experience.
###   Modal Window:
   A modal window  with smooth transitions that pops up after the user submitted the feedback is incorporated. It can be closed in three ways:
   User interaction by clicking the close button.
   Clicking outside the modal content area.
   Automatic closure after a 3-second delay.
# Firebase Firestore Integration
   User feedback scores are stored in Firestore, a cloud-based NoSQL database provided by Firebase.
   The Firebase connection configuration can be found in the "db" directory under the "src" folder of the project.
   When a user submits feedback and ratings through the application, the data is packaged and sent to Firestore.
   Firestore stores this data in a structured format.
   The integration with Firestore allows for secure and scalable storage of user feedback, making it accessible for analysis, reporting, and continuous improvement of the website's user experience.

# Deployment and Hosting Strategy
   The application is deployed and hosted on Netlify using a simplified Continuous Integration and Continuous Deployment (CI/CD) approach.
   The link: https://master--fluffy-daffodil-c62d23.netlify.app/
## Continuous Deployment (CD):
   The CD process is set up to automate the deployment of the application whenever changes are pushed to the master branch in the GitHub repository, ensuring that users always have access to the most up-to-date version of the application.
## Deployment Workflow:
 A GitHub Actions workflow named "CI" is defined in the project repository. It is triggered on pushes to the master branch.
## Workflow Steps:
   The workflow consists of several steps:
### Checkout code: 
The workflow begins by checking out the latest code from the repository.
### Install dependencies: 
It then installs the necessary project dependencies using npm install.
### Run tests: 
The workflow runs tests using npm test to ensure the application's functionality remains intact.
## Deployment Trigger:
   Pushing changes to the master branch triggers the GitHub Actions workflow. If the tests pass successfully, the workflow proceeds with the deployment process.
## Netlify Hosting:
Netlify is used as the hosting platform. It automatically deploys the application based on the code changes in the master branch.
# Conclusion and Future Aspirations
In wrapping up the "Resume" project, I want to express my dedication to delivering an exceptional user experience through this single-page web application. It's not just a representation of my skills and experiences; it's a testament to my passion for web development and user-centric design.
## Looking Ahead
As I move forward, I have exciting plans to make this project even better:
## Enhancing Code Quality:
I'm committed to maintaining the highest code quality and reliability. To achieve this, I'll be expanding our test coverage to thoroughly assess every aspect of our codebase, ensuring robust functionality and unwavering stability.
## User Registration:
I aim to offer users the convenience of registering with their email or Google credentials, enhancing personalization and interaction within the application.
## More Informative Content:
Expect to see more informative sections, resources, and insights added to the application. I want it to be a comprehensive source of information about my experiences and skills.
## Empowering Users:
In the near future, I plan to introduce a user-generated resume feature. This will allow you to create and download your customized resumes in PDF format, giving you the tools to showcase your skills and experiences effortlessly.

These aspirations are a reflection of my commitment to continuous improvement and my desire to provide you with a valuable and engaging experience. I'm excited about the journey ahead and can't wait to bring these enhancements to life. Thank you for joining me on this adventure!
