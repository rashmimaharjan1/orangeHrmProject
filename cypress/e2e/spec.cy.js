import Login from "../PageObjects/LoginPageUsingVariables.js"

describe('Validate Login Page using PAGE OBJECT MODEL', () => {
 
  beforeEach(function(){
    cy.visit('auth/login')
    cy.fixture('loginData').as('loginData'); //load data from fixture and load data in alias loginData
  })
  
  //using POM
  it.only('Validate that user can login with valid inputs using POM',()=>{
    const ln = new Login();
    cy.get('@loginData').then((user)=>{ //access data 
      ln.enterUsername('user.username')
      ln.enterPassword('user.password')
    }) 
    
    ln.clickLogin();

  })
 
})