//TODO

describe('Create and Push Activity', ()=>{
    it('Signin', ()=>{
       cy.Signin(credentials.teacherUsername,
                 credentials.teacherPassword);
    });
    it('Reach Mocktest', ()=>{
        
    })
    
    it('Log Out', ()=>{
        cy.Logout()
    });
});