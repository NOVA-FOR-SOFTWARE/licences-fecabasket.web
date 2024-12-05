// https://on.cypress.io/api
import { useStubs } from "../../utils/stubs";

const { stubGetAllPlayers, stubGetPlayerById } = useStubs();
const playerId = "497f6eca-6276-4993-bfeb-53cbbbba6f08";
describe("My First Test", () => {
  it("visits the app root url", () => {
    // cy.viewport(1212, 800);

    cy.visit("/");
    stubGetAllPlayers();
    stubGetPlayerById(playerId);
    cy.pause();
  });
});
