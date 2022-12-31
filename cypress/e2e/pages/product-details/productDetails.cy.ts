import { filterDimension, filterData } from "../../../support/command";

describe("Products page", () => {
  beforeEach(() => {
    cy.visit("/");

    cy.get("[data-test=product-item]").as("product");

    const productsWithDimensionsGt5 = filterData({
      condition: "gt",
      num: 10,
    });

    cy.visit(`/${productsWithDimensionsGt5[1].id}`);
    cy.get("[data-test=product-details]").as("wrapper");
    cy.get("[data-test=page-title]").find("button").as("back");
    cy.get("@wrapper").find("[data-test=dimension-card]").as("card");
    cy.get(".filter-wrapper").find("[data-test=FilterBy]").as("filterBy");
    cy.get(".filter-wrapper").find("[data-test=Range]").as("range");
    cy.get(".filter-wrapper").find("[data-test=Value]").as("value");

    cy.get("@back").click();
  });

  context("Product Details Page Test", () => {
    it("Page should be mounted to the dom", () => {
      cy.get("@product").first().click();
      cy.get("@wrapper").should("exist");
    });

    it("Go back button should take users back to the products page", () => {
      cy.get("@product").first().click();
      cy.get("@back").click();
      cy.location("pathname").should("equal", "/");
    });

    context("Filter component functionalities", () => {
      it("Render filter components if dimensions are less than 5", () => {
        const testProduct = filterData({ condition: "gt", num: 5 });
        cy.visit(`/${testProduct[0].id}`);
        cy.get(".filter-wrapper").should("exist");
      });
      it("DONT rendered filter component if dimensions are less than 5", () => {
        const testProduct = filterData({ condition: "lt", num: 5 });
        cy.visit(`/${testProduct[0].id}`);
        cy.get(".filter-wrapper").should("not.exist");
      });
      it("Render all dimensions if none option is selected in range", () => {
        const productsWithDimensionsGt5 = filterData({
          condition: "gt",
          num: 5,
        });
        cy.visit(`/${productsWithDimensionsGt5[0].id}`);
        cy.get("@filterBy").click();
        cy.get("@filterBy").contains("width").click();
        cy.get("@range").click();
        cy.get("@range").contains("none").click();
        cy.get("@value").type("50");
        cy.get("@card").should(
          "have.length",
          productsWithDimensionsGt5[0].dimensions.length
        );
      });
      it("Render all dimensions if no number is inputed in the value field", () => {
        const productsWithDimensionsGt5 = filterData({
          condition: "gt",
          num: 5,
        });
        cy.visit(`/${productsWithDimensionsGt5[0].id}`);
        cy.get("@filterBy").click();
        cy.get("@filterBy").contains("width").click();
        cy.get("@range").click();
        cy.get("@range").contains("greater than").click();
        cy.get("@card").should(
          "have.length",
          productsWithDimensionsGt5[0].dimensions.length
        );
      });
      context("Width", () => {
        it("Render dimensions with width greater than 50", () => {
          const productsWithDimensionsGt5 = filterData({
            condition: "gt",
            num: 5,
          });
          const productDimensionsWithWidthGt50 = filterDimension({
            dimensions: productsWithDimensionsGt5[0].dimensions,
            filterBy: "width",
            condition: "gt",
            num: 50,
          });
          cy.visit(`/${productsWithDimensionsGt5[0].id}`);
          cy.get("@filterBy").click();
          cy.get("@filterBy").contains("width").click();
          cy.get("@range").click();
          cy.get("@range").contains("greater than").click();
          cy.get("@value").type("50");
          cy.get("@card").should(
            "have.length",
            productDimensionsWithWidthGt50.length
          );
        });
        it("Render dimensions with width less than 50", () => {
          const productsWithDimensionsGt5 = filterData({
            condition: "gt",
            num: 5,
          });
          const productDimensionsWithWidthGt50 = filterDimension({
            dimensions: productsWithDimensionsGt5[0].dimensions,
            filterBy: "width",
            condition: "lt",
            num: 50,
          });
          cy.visit(`/${productsWithDimensionsGt5[0].id}`);
          cy.get("@filterBy").click();
          cy.get("@filterBy").contains("width").click();
          cy.get("@range").click();
          cy.get("@range").contains("less than").click();
          cy.get("@value").type("50");
          cy.get("@card").should(
            "have.length",
            productDimensionsWithWidthGt50.length
          );
        });
      });
      context("Length", () => {
        it("Render dimensions with length greater than 50", () => {
          const productsWithDimensionsGt5 = filterData({
            condition: "gt",
            num: 5,
          });
          const productDimensionsWithLengthGt50 = filterDimension({
            dimensions: productsWithDimensionsGt5[0].dimensions,
            filterBy: "length",
            condition: "gt",
            num: 50,
          });
          console.log(productDimensionsWithLengthGt50, "here");
          cy.visit(`/${productsWithDimensionsGt5[0].id}`);
          cy.get("@filterBy").click();
          cy.get("@filterBy").contains("length").click();
          cy.get("@range").click();
          cy.get("@range").contains("greater than").click();
          cy.get("@value").type("50");
          cy.get("@card").should(
            "have.length",
            productDimensionsWithLengthGt50.length
          );
        });
        it("Render dimensions with length less than 50", () => {
          const productsWithDimensionsGt5 = filterData({
            condition: "gt",
            num: 5,
          });
          const productDimensionsWithLengthGt50 = filterDimension({
            dimensions: productsWithDimensionsGt5[0].dimensions,
            filterBy: "length",
            condition: "lt",
            num: 50,
          });
          cy.visit(`/${productsWithDimensionsGt5[0].id}`);
          cy.get("@filterBy").click();
          cy.get("@filterBy").contains("length").click();
          cy.get("@range").click();
          cy.get("@range").contains("less than").click();
          cy.get("@value").type("50");
          cy.get("@card").should(
            "have.length",
            productDimensionsWithLengthGt50.length
          );
        });
      });
      context("thickness", () => {
        it("Render dimensions with thickness greater than 50", () => {
          const productsWithDimensionsGt5 = filterData({
            condition: "gt",
            num: 5,
          });
          const productDimensionsWiththicknessGt50 = filterDimension({
            dimensions: productsWithDimensionsGt5[0].dimensions,
            filterBy: "thickness",
            condition: "gt",
            num: 50,
          });
          cy.visit(`/${productsWithDimensionsGt5[0].id}`);
          cy.get("@filterBy").click();
          cy.get("@filterBy").contains("thickness").click();
          cy.get("@range").click();
          cy.get("@range").contains("greater than").click();
          cy.get("@value").type("50");
          cy.get("@card").should(
            "have.length",
            productDimensionsWiththicknessGt50.length
          );
        });
        it("Render dimensions with thickness less than 50", () => {
          const productsWithDimensionsGt5 = filterData({
            condition: "gt",
            num: 5,
          });
          const productDimensionsWiththicknessGt50 = filterDimension({
            dimensions: productsWithDimensionsGt5[0].dimensions,
            filterBy: "thickness",
            condition: "lt",
            num: 50,
          });
          cy.visit(`/${productsWithDimensionsGt5[0].id}`);
          cy.get("@filterBy").click();
          cy.get("@filterBy").contains("thickness").click();
          cy.get("@range").click();
          cy.get("@range").contains("less than").click();
          cy.get("@value").type("50");
          cy.get("@card").should(
            "have.length",
            productDimensionsWiththicknessGt50.length
          );
        });
      });
    });

    context("Dimension card functionality", () => {
      it("should display the delete icon if there is more than one card", () => {
        const testProduct = filterData({ condition: "gt", num: 5 });
        cy.visit(`/${testProduct[0].id}`);
        cy.get("@card").find("[data-test=delete-icon]").should("exist");
      });
      it("should NOT display the delete icon if there only one card", () => {
        const testProduct = filterData({ condition: "lt", num: 2 });
        cy.visit(`/${testProduct[0].id}`);
        cy.get("@card").find("[data-test=delete-icon]").should("not.exist");
      });
      it("should delete dimension card", () => {
        const testProduct = filterData({ condition: "gt", num: 20 });
        cy.visit(`/${testProduct[0].id}`);
        cy.get("@card")
          .first()
          .then($el => {
            cy.wrap($el).find("[data-test=delete-icon]").click();
            cy.wrap($el).find("[data-test=loader-icon]").should("exist");
            cy.wrap($el).should("not.exist");
          });
      });
      it("should NOT delete dimension card if there is error in deleting process", () => {
        const testProduct = filterData({ condition: "gt", num: 5 });
        cy.intercept("PUT", "/api", {
          statusCode: 404,
        });
        cy.visit(`/${testProduct[0].id}`);
        cy.get("@card")
          .first()
          .then($el => {
            cy.wrap($el).find("[data-test=delete-icon]").click();
            cy.wrap($el).find("span").should("exist");
            cy.wrap($el).should("exist");
          });
      });
    });

    context("Product Deletion", () => {
      it("should delete product when product delete button is clicked", () => {
        const testProduct = filterData({ condition: "lt", num: 2 });

        cy.intercept("DELETE", "/api", {
          data: testProduct[0],
        });

        cy.visit(`/${testProduct[0].id}`);
        cy.get("[data-test=delete-product-wrapper]")
          .contains("Delete Product")
          .click();
        cy.get("[data-test=delete-product-wrapper]")
          .contains("PROCEED")
          .click();

        cy.location("pathname").should("equal", "/");
      });
    });
  });
});
