/// <reference types="cypress" />

import HomePage from "../pages/homePage";
import CurrentAccountPage from "../pages/currentAccountPage";

describe("Zenith Bank Technical Exercise", () => {
  const homePage = new HomePage();
  const currentAccountPage = new CurrentAccountPage();

  it('should navigate to "Current Accounts page" and validate features, requirements, and available channels of the individual current account', () => {
    cy.visit("/");
    homePage.selectPersonal();
    homePage.selectBankAccount();
    homePage.selectCurrentAccount();
    currentAccountPage.clickFeaturesAndBenefits();
    currentAccountPage.validateFeaturesOfTheIndividualCurrentAccount();
    currentAccountPage.clickRequirements();
    currentAccountPage.validateRequirementsOfTheIndividualCurrentAccount();
    currentAccountPage.clickAvailableChannels();
    currentAccountPage.validateAvailableChannelsOfTheIndividualCurrentAccount();
  });
});

// Run
