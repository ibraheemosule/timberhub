import data from "../../../../fixtures/mock-data.json";

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

    cy.get("[data-test=btn]").first().click();

    cy.get("[data-test=add-product-modal]").as("wrapper");

    cy.get("[data-test=usage]").find("input").as("usageInput");
    cy.get("[data-test=woodspecies]").find("input").as("speciesInput");
    cy.get("[data-test=drying]").find("input").as("dryingInput");
    cy.get("[data-test=grade]").find("input").as("gradeInput");
    cy.get("[data-test=treatment]").find("input").as("treatmentInput");
    cy.get("[data-test=thickness]").find("input").as("thicknessInput");
    cy.get("[data-test=width]").find("input").as("widthInput");
    cy.get("[data-test=length]").find("input").as("lengthInput");

    cy.get("@wrapper").contains("create product").as("submitBtn");
  });

  context("Add product modal tests", () => {
    it("should render", () => {
      cy.get("@wrapper").should("be.visible");
    });
    it("should close when blurred area is clicked", () => {
      cy.get("@wrapper").click("left");
      cy.get("@wrapper").should("not.be.visible");
    });

    it("should close when close button is clicked", () => {
      cy.get("@wrapper").contains("close").click();
      cy.get("@wrapper").should("not.be.visible");
    });

    it("should have 8 input fields when mounted", () => {
      cy.get("@wrapper").contains("Add another set").click();
      cy.get("@wrapper").click("left");
      cy.get("[data-test=btn]").first().click();
      cy.get("@wrapper").find("input").should("have.length", 8);
    });

    it("should have 3 extra input fields when 'add another set' button is clicked", () => {
      cy.get("@wrapper")
        .find("input")
        .then($input => {
          const inputLength = $input.length;
          cy.get("@wrapper").contains("Add another set").click();
          cy.get("@wrapper")
            .find("input")
            .should("have.length", inputLength + 3);
        });
    });

    context("Select field functionality", () => {
      it("should hide dropdown when modal opens", () => {
        cy.get("[data-test=usage")
          .find(".dropdown")
          .should("to.not.be.visible");
      });
      it("should render dropdown list on input focus", () => {
        cy.get("@usageInput").focus();
        cy.get("[data-test=usage").find(".dropdown").should("to.be.visible");
      });
      it("should hide dropdown list on input blurred", () => {
        cy.get("@usageInput").focus().blur();
        cy.get("[data-test=usage")
          .find(".dropdown")
          .should("to.not.be.visible");
      });
      it("should have 'scroll for more options' if dropdown list is more than 3", () => {
        cy.get("@usageInput").focus();
        cy.get("[data-test=usage")
          .find("li")
          .then($li => {
            $li.length > 3 &&
              cy.wrap($li).contains("Scroll for more options").should("exist");
          });
      });
      it("should NOT have 'scroll for more options' if dropdown list is more less than 4", () => {
        cy.get("@speciesInput").focus();
        cy.get("[data-test=woodspecies]")
          .find("li")
          .then($li => {
            $li.length < 4 &&
              cy
                .wrap($li)
                .contains("Scroll for more options")
                .should("not.exist");
          });
      });
      it("render only an li element of text 'no result' when input value doesn't match any options ", () => {
        cy.get("@usageInput").type("does not exist");
        cy.get("[data-test=usage")
          .find("li")
          .should("have.length", 1)
          .should("have.text", "No Result");
      });
      it("when an option is clicked, it should have the same value as input field ", () => {
        cy.get("@speciesInput").focus();
        cy.get("[data-test=woodspecies")
          .find("li")
          .first()
          .then($li => {
            const text = $li.text();
            cy.wrap($li).click();
            expect($li).to.not.be.true;
            cy.get("@speciesInput").should("have.value", text);
          });
      });
    });

    context("Form validation and submission test", () => {
      it(`empty field should trigger form submission error and
          border should change to red`, () => {
        cy.get("@submitBtn").click();
        cy.get("[data-test=usage]")
          .find("fieldset")
          .should("have.css", "border-color", "rgb(255, 0, 0)");
        cy.get("[data-test=woodspecies]")
          .find("fieldset")
          .should("have.css", "border-color", "rgb(255, 0, 0)");
        cy.get("[data-test=drying]")
          .find("fieldset")
          .should("have.css", "border-color", "rgb(255, 0, 0)");
        cy.get("[data-test=grade]")
          .find("fieldset")
          .should("have.css", "border-color", "rgb(255, 0, 0)");
        cy.get("[data-test=treatment]")
          .find("fieldset")
          .should("have.css", "border-color", "rgb(255, 0, 0)");
        cy.get("[data-test=thickness]")
          .find("input")
          .should("have.css", "border-color", "rgb(255, 0, 0)");
        cy.get("[data-test=width]")
          .find("input")
          .should("have.css", "border-color", "rgb(255, 0, 0)");
        cy.get("[data-test=length]")
          .find("input")
          .should("have.css", "border-color", "rgb(255, 0, 0)");
      });
      it(`error message should render on page when create product button
       is clicked and at least a field is empty`, () => {
        cy.get("@wrapper")
          .get("fieldset")
          .each($el => {
            cy.wrap($el)
              .find("li")
              .eq(2)
              .then($li => {
                cy.wrap($el).find("input").type($li.text());
              });
          });
        cy.get("@thicknessInput").type("40");
        cy.get("@lengthInput").type("30");
        cy.get("@submitBtn").click();
        cy.get("[data-test=width]")
          .find("input")
          .should("have.css", "border-color", "rgb(255, 0, 0)");
        cy.get("@wrapper")
          .contains("Ensure all fields are valid")
          .should("exist");
      });

      it("should create a new product when all input fields are validated", () => {
        cy.get("@wrapper")
          .get("fieldset")
          .each($el => {
            cy.wrap($el)
              .find("li")
              .eq(1)
              .then($li => {
                cy.wrap($el).find("input").type($li.text());
              });
          });
        cy.get("@thicknessInput").type("40");
        cy.get("@widthInput").type("20");
        cy.get("@lengthInput").type("80");
        cy.get("@submitBtn").click();
        cy.get("@wrapper").find("[data-test=loader-icon]").should("exist");
        cy.get("[data-test=success-popup]").should("have.css", "top", "0px");
      });
    });
  });
});
