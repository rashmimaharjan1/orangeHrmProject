class Login{ 

    txtUserName = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    labelMessage =".oxd-topbar-header-breadcrumb > .oxd-text";

    enterUsername(username){
        
        cy.get(this.txtUserName).type(username);

    }

    enterPassword(password){
        cy.get(this.txtPassword).type(password);
    }
    clickLogin(){
        cy.get(this.btnSubmit).click();
    }
    verifyLogin(){
        cy.get(this.labelMessage).should('have.text','Dashboard');
    }
}
export default Login;