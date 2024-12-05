/// <reference types="cypress" />
import { players } from "./data"
export function useStubs() {

  const login = (username: string, password: string) => {
    cy.visit("/");
    cy.get("#username").type(username).get("#password").type(password);
    cy.get("#kc-login").click();
    localStorage.setItem("firstLoggin", "true");
  };


  const goToMenu = (item:string)=>{
    cy.get('[data-test="nav-bar"]').within(()=>{
      cy.get(`[data-test="nav-${item}"]`)
    });
  }

  const stubGetAllPlayers = () =>{
    cy.intercept({
      method: "GET",
      url: "/joueurs",
    }, {
      statusCode: 200,
      body: players,
    }).as("players-list");
  }
  const stubGetPlayerById = (id: string) =>{
    cy.intercept({
      method: "GET",
      url: `/joueurs/${id}`,
    }, {
      statusCode: 200,
      body: players[0],
    }).as("player-details");
  }

  return {
    login,
    stubGetAllPlayers,
    stubGetPlayerById,
    goToMenu,
  }
}
