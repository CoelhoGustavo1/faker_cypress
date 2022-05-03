describe("Primeiro teste utilizando o FAKER", () => {
  const { faker } = require("@faker-js/faker");
  faker.locale = "pt_BR";

  const randomName = faker.name.findName(); // Rowan Nikolaus
  const randomEmail = faker.internet.email(randomName); // Kassandra.Haley@erich.biz
  const randomPhoneNumber = faker.phone.phoneNumber(); // (279) 329-8663 x30233
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const phonenumber = faker.phone.phoneNumber();
  const city = faker.address.city();
  const state = faker.address.state();
  const country = faker.address.country();

  it("Teste com o FAKER", () => {
    cy.log(randomName);
    cy.log(randomEmail);
    cy.log(randomPhoneNumber);
    cy.log(firstName);
    cy.log(lastName);
    cy.log(phonenumber);
    cy.log(city);
    cy.log(state);
    cy.log(country);
  });
});
