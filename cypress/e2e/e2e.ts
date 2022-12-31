import data from "../fixtures/mock-data.json";

before(() => {
  cy.request("POST", "/api?test=y", data);
});
