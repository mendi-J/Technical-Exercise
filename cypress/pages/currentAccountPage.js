class CurrentAccountPage {
  clickFeaturesAndBenefits() {
    cy.xpath("//h4[@id='ui-id-1']//a[@id='#features-and-benefits']").click();
    cy.wait(10000);
  }

  // Validates the features of the “Individual Current Account”.
  validateFeaturesOfTheIndividualCurrentAccount() {
    cy.get("div.cpb_content_element ul").then(($ul) => {
      // Validate each item in the features accordion
      cy.wrap($ul)
        .find("li")
        .each(($li) => {
          const featuresItemText = $li.text().trim();
          switch (featuresItemText) {
            case "Zero account opening balance":
              cy.wrap($li).should("contain", "Zero account opening balance");
              break;
            case "Internet Banking":
              cy.wrap($li).should("contain", "Internet Banking");
              break;
            case "Zenith Mobile Banking app":
              cy.wrap($li).should("contain", "Zenith Mobile Banking app");
              break;
            case "*966# Eazybanking":
              cy.wrap($li).should("contain", "*966# Eazybanking");
              break;
            case "MasterCard/Visa/Verve debit card":
              cy.wrap($li).should(
                "contain",
                "MasterCard/Visa/Verve debit card"
              );
              break;
            case "Email/SMS Alertz":
              cy.wrap($li).should("contain", "Email/SMS Alertz");
              break;
            case "Cheque book":
              cy.wrap($li).should("contain", "Cheque book");
              break;
            /*            default:
              // Handle any other items or do nothing
              break; */
          }
        });
    });
  }

  clickRequirements() {
    cy.xpath("//h4[@id='ui-id-3']//a[@id='#requirements']").click();
    cy.wait(5000);
  }

  //Validates the requirements of the “Individual Current Account”
  validateRequirementsOfTheIndividualCurrentAccount() {
    cy.get("div.cpb_content_element ul").then(($ul) => {
      // Validate each item in the requirements accordion
      cy.wrap($ul)
        .find("li")
        .each(($li) => {
          const requirementsItemText = $li.text().trim();
          switch (requirementsItemText) {
            case "Account opening form duly completed":
              cy.wrap($li).should(
                "contain",
                "Account opening form duly completed"
              );
              break;
            case "One recent clear passport photograph of signatory":
              cy.wrap($li).should(
                "contain",
                "One recent clear passport photograph of signatory"
              );
              break;
            case "Identification of signatories (Driver`s License, International Passport,  National Identity Card or Voter`s Card)":
              cy.wrap($li).should(
                "contain",
                "Identification of signatories (Driver`s License, International Passport,  National Identity Card or Voter`s Card)"
              );
              break;
            case "Residence permit (where applicable)":
              cy.wrap($li).should(
                "contain",
                "Residence permit (where applicable)"
              );
              break;
            case "Two independent and satisfactory references":
              cy.wrap($li).should(
                "contain",
                "Two independent and satisfactory references"
              );
              break;
            case "Public Utility Receipt dated within the last three months (PHCN bill, water rate bill, tenement rate, rent receipt, telephone bill)":
              cy.wrap($li).should(
                "contain",
                "Public Utility Receipt dated within the last three months (PHCN bill, water rate bill, tenement rate, rent receipt, telephone bill)"
              );
              break;
            default:
              break;
          }
        });
    });
  }

  clickAvailableChannels() {
    cy.xpath("//h4[@id='ui-id-5']//a[@id='#available-channels']").click();
    cy.wait(5000);
  }

  //Validates the available channels of the “Individual CurrentAccount”.
  validateAvailableChannelsOfTheIndividualCurrentAccount() {
    cy.get("div.cpb_content_element ul").then(($ul) => {
      // Validate each item in the requirements accordion
      cy.wrap($ul)
        .find("li")
        .each(($li) => {
          const availableChannelItemText = $li.text().trim();
          switch (availableChannelItemText) {
            case "*966# EazyBanking":
              cy.wrap($li).should("contain", "*966# EazyBanking");
              break;
            case "Zenith Internet Banking":
              cy.wrap($li).should("contain", "Zenith Internet Banking");
              break;
            case "In-branch at any Zenith Bank branch":
              cy.wrap($li).should(
                "contain",
                "In-branch at any Zenith Bank branch"
              );
              break;
            case "ZenithDirect – our 24/7 telephone banking":
              cy.wrap($li).should(
                "contain",
                "ZenithDirect – our 24/7 telephone banking"
              );
              break;
            case "Zenith Bank ATM nation-wide – free cash withdrawal":
              cy.wrap($li).should(
                "contain",
                "Zenith Bank ATM nation-wide – free cash withdrawal"
              );
              break;
            case "Zenith Mobile Banking App – 24/7 on your smart phone":
              cy.wrap($li).should(
                "contain",
                "Zenith Mobile Banking App – 24/7 on your smart phone"
              );
              break;
            case "Access your account using your Zenith Bank debit card at participating merchant stores for payment of goods and services in Nigeria and anywhere in the world":
              cy.wrap($li).should(
                "contain",
                "Access your account using your Zenith Bank debit card at participating merchant stores for payment of goods and services in Nigeria and anywhere in the world"
              );
              break;
            default:
              break;
          }
        });
    });
  }
}
export default CurrentAccountPage;
