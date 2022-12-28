import data from "../../../fixtures/mock-data.json";

describe("Products page", () => {
  beforeEach(() => {
    cy.visit("/", {
      onBeforeLoad: serverData => {
        let nextData: unknown;

        Object.defineProperty(serverData, "__NEXT_DATA__", {
          set(obj) {
            obj.props.pageProps.data = data;

            nextData = obj;
          },
          get() {
            return nextData;
          },
        });
      },
    });
  });

  context("All Products Section", () => {
    it("Page should be mounted to the dom", () => {
      cy.get("[data-test=products]").should("exist");
    });

    it("Products should be rendered to the page", () => {
      cy.get("[data-test=product-item]").should("have.length.greaterThan", 0);
    });

    context("Search bar should exist and function", () => {
      it("should return elements that contain the string value", () => {
        const textInput = "sa";
        cy.get("[data-test=search-bar]").type(textInput);
        cy.get("[data-test=categories]").each($el => {
          const elementText = $el.text().toLowerCase().includes(textInput);
          expect(elementText).to.be.true;
        });
      });

      it("should return empty list and no result found", () => {
        const textInput = "Does not exist";
        cy.get("[data-test=search-bar]").type(textInput);
        cy.get("[data-test=empty-list]").should("be.visible");
      });
    });

    it("Create product button click", () => {
      cy.get("[data-test=page-title]").should("exist");

      cy.get("[data-test=page-title]").find("[data-test=btn]").should("exist");

      cy.get("[data-test=add-product-modal]").should("not.be.visible");

      cy.get("[data-test=page-title]").find("[data-test=btn]").click();

      cy.get("[data-test=add-product-modal]").should("be.visible");
    });

    it("should route to product details page", () => {
      cy.get("[data-test=product-item]").first().click();
      cy.location("pathname").should("equal", `/${data[0].id}`);
    });

    context("Pagination functionality", () => {
      it("previous button should be disabled on page load", () => {
        cy.get("[data-test=pagination]")
          .contains("Previous")
          .should("be.disabled");
      });

      it("previous button should be disabled when users paginates the end of the list and return to the first page", () => {
        cy.get("[data-test=pagination]")
          .contains("Previous")
          .should("be.disabled");
        cy.get("[data-test=pagination]").contains("Next").click();
        cy.get("[data-test=pagination]")
          .contains("Previous")
          .should("not.be.disabled");
        cy.get("[data-test=pagination]").contains("Previous").click();
        cy.get("[data-test=pagination]")
          .contains("Previous")
          .should("be.disabled");
      });

      it("Next button should be disabled if data array gets the end", () => {
        cy.get("[data-test=pagination]").contains("Next").click();
        cy.get("[data-test=pagination]").contains("Next").should("be.disabled");
      });
    });
  });
});
