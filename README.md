
**Cypress Test Repository:**
This repository contains automated tests for VALIDATION OF INDIVIDUAL CURRENT ACCOUNT (Technical Excercise) using Cypress. 
Follow the steps below to clone this repository and run the tests locally or using GitHub Actions.

**Clone the Repository**
Open your terminal or command prompt.

Clone the repository using the following command:
git clone https://github.com/your-username/your-cypress-repo.git

**Installing Cypress Locally**
Before running the tests locally, you'll need to install Cypress on your machine. Follow these steps:
1. Ensure you have Node.js and npm installed on your machine. If not, you can download and install them.
2. Navigate to the cloned repository directory:
   cd your-cypress-repo
3. Install Cypress as a dev dependency using npm:
   npm install cypress --save-dev

**Running Locally**
Once Cypress is installed, you can open the Cypress Test Runner by running:
  npx cypress open  //This command will open the Cypress Test Runner, allowing you to select and run technicalExercise.cy.js spec file.
  


**Running with GitHub Actions**
1. Fork this repository to your GitHub account.
2. Navigate to the "Actions" tab in your forked repository.
3. GitHub Actions are already configured in Technical-Exercise repository to run Cypress tests manually once it's triggered. You can view the workflow file under .github/workflows/cypress.yml.
4. Once the workflow is triggered, you can view the test results in the "Actions" tab.


