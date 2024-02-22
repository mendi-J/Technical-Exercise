class HomePage {
  selectPersonal() {
    cy.get("#continue-button").should("be.visible").click();
    cy.get('#menu-main-menu-1 > .menu-item-1162 > [href="/personal-banking/"]')
      .should("be.visible")
      .trigger("mouseover")
      .wait(1000);
  }
  selectBankAccount() {
    // Hover over personal
    cy.xpath(
      "//li[@class='menu-item-1154 menu-item menu-item-type-post_type menu-item-object-page cg-std-menu hoverimg']//a[normalize-space()='Bank Accounts']"
    ).should("exist");
  }
  selectCurrentAccount() {
    cy.xpath(
      "//li[contains(@class,'lvl3menu-item 1640')]//a[normalize-space()='Current Account']"
    ).click({ force: true });
    //This line of code validates the correctness of url.
    cy.url().should("include", "bank-accounts/current-account/");
  }
}
export default HomePage;
