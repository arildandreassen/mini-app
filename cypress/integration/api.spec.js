describe("api tests for the app", () => {
  let url;
  before("", () => {
    url = Cypress.config().baseUrl + "/calculator";
  });

  it("Should return 200 and calculate the formula with 17 lbs left over", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "5",
        mediumDogs: "3",
        largeDogs: "7",
        leftOverFood: "17",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(363.6);
    });
  });

  it("Should return 200 and calculate the formula with 200 lbs left over", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "5",
        mediumDogs: "3",
        largeDogs: "7",
        leftOverFood: "200",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(144);
    });
  });

  it("Should return 200 and calculate the formula with 200 lbs left over", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "5",
        mediumDogs: "3",
        largeDogs: "7",
        leftOverFood: "315",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(6);
    });
  });

  it("Should return 200 and calculate the formula with 800 lbs left over for large dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "",
        mediumDogs: "",
        largeDogs: "30",
        leftOverFood: "800",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(120);
    });
  });

  it("Should return 200 and calculate the formula with 299 lbs left over for small dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "30",
        mediumDogs: "",
        largeDogs: "",
        leftOverFood: "299",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(1.2);
    });
  });

  it("Should return 200 and calculate the formula with 299 lbs left over for medium dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "",
        mediumDogs: "30",
        largeDogs: "",
        leftOverFood: "590",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(12);
    });
  });

  it("Should return 200 and calculate customer requirement", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "5",
        mediumDogs: "3",
        largeDogs: "7",
        leftOverFood: "17",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(363.6);
    });
  });

  it("Should return 200 and round decimals to closest decimal point", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "1.5",
        mediumDogs: "1.3",
        largeDogs: "1.7",
        leftOverFood: "1.18",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(70.6);
    });
  });

  it("Should return 200 if calculating max small dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "30",
        mediumDogs: 0,
        largeDogs: 0,
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(360);
    });
  });

  it("Should return 200 if calculating max medium dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        mediumDogs: "30",
        largeDogs: 0,
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(720);
    });
  });

  it("Should return 200 if calculating max large dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        mediumDogs: 0,
        largeDogs: "30",
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(1080);
    });
  });

  it("Should return 200 and still calculate if small dogs value is blank", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "",
        mediumDogs: 0,
        largeDogs: "1",
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(36);
    });
  });

  it("Should return 200 and still calculate if medium dogs value is blank", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        mediumDogs: "",
        largeDogs: "1",
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(36);
    });
  });

  it("Should return 200 and still calculate if large dogs value is blank", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        mediumDogs: "1",
        largeDogs: "",
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(24);
    });
  });

  it("Should return 200 and still calculate if left over food is blank", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        mediumDogs: "1",
        largeDogs: "",
        leftOverFood: "",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(24);
    });
  });

  it("Should return 200 if left over food already covers expected food", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "1",
        mediumDogs: 0,
        largeDogs: 0,
        leftOverFood: "20",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.key("result");
      expect(response.body.result).to.eq(0);
    });
  });

  it("Should return 400 if calculating above max small dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "31",
        mediumDogs: 0,
        largeDogs: 0,
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("There are too many dogs!");
    });
  });

  it("Should return 400 if calculating above max medium dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        mediumDogs: "31",
        largeDogs: 0,
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("There are too many dogs!");
    });
  });

  it("Should return 400 if calculating above max large dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        mediumDogs: 0,
        largeDogs: "31",
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("There are too many dogs!");
    });
  });

  it("Should return 400 if calculating negative small dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "-1",
        mediumDogs: 0,
        largeDogs: 0,
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("Please enter only positive numbers");
    });
  });

  it("Should return 400 if calculating negative medium dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        mediumDogs: "-1",
        largeDogs: 0,
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("Please enter only positive numbers");
    });
  });

  it("Should return 400 if calculating negative large dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        mediumDogs: 0,
        largeDogs: "-1",
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("Please enter only positive numbers");
    });
  });

  it("Should return 400 if calculating negative left over food", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "1",
        mediumDogs: 0,
        largeDogs: 0,
        leftOverFood: "-1",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("Please enter only positive numbers");
    });
  });

  it("Should return 400 if calculating non-number small dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: "hello",
        mediumDogs: 0,
        largeDogs: 0,
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("Please enter only numbers");
    });
  });

  it("Should return 400 if calculating non-number medium dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        mediumDogs: "hello",
        largeDogs: 0,
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("Please enter only numbers");
    });
  });

  it("Should return 400 if calculating non-number large dogs", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        mediumDogs: 0,
        largeDogs: "hello",
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("Please enter only numbers");
    });
  });

  it("Should return 400 if calculating non-number left over food", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        mediumDogs: 0,
        largeDogs: 0,
        leftOverFood: "hello",
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("Please enter only numbers");
    });
  });

  it("Should return 400 if no dogs are entered", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        mediumDogs: 0,
        largeDogs: 0,
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("There are no dogs!");
    });
  });

  it("Should return 400 if the body is missing", () => {
    cy.api({
      method: "post",
      url,
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("Body cannot be empty");
    });
  });

  it("Should return 400 if the body is empty", () => {
    cy.api({
      method: "post",
      url,
      body: {},
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("Body cannot be empty");
    });
  });

  it("Should return 400 if missing small dogs parameter", () => {
    cy.api({
      method: "post",
      url,
      body: {
        mediumDogs: 0,
        largeDogs: 0,
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("Please enter only numbers");
    });
  });

  it("Should return 400 if missing medium dogs parameter", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        largeDogs: 0,
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("Please enter only numbers");
    });
  });

  it("Should return 400 if missing large dogs parameter", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 0,
        mediumDogs: 0,
        leftOverFood: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("Please enter only numbers");
    });
  });

  it("Should return 400 if missing left over food parameter", () => {
    cy.api({
      method: "post",
      url,
      body: {
        smallDogs: 1,
        mediumDogs: 0,
        largeDogs: 0,
      },
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.key("error");
      expect(response.body.error).to.eq("Please enter only numbers");
    });
  });
});
