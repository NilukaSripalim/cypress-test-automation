/*
 *   Copyright (c) 2021 WSO2 Inc. (http://www.wso2.org)
 *   All rights reserved.
 *   This software is the property of WSO2 Inc. and its suppliers, if any.
 *   Dissemination of any information or reproduction of any material contained
 *   herein in any form is strictly forbidden, unless permitted by WSO2 expressly.
 *   You may not alter or remove any copyright or other notice from copies of this content." 
 */

/// <reference types="Cypress" />

describe("Working with Wrap", () => {
  it("Verify value from property", () => {
    cy.wrap({ name: "niluka" })
      .should("have.property", "name")
      .and("eq", "niluka");

    cy.get(".table").find("tr > td").then(($td) => {
        cy.wrap($td).contains("niluka").invoke("wrap").parent().contains("names").click();
    })
  });
});

