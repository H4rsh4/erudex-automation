/// <reference types="Cypress" />

describe('My First Test Suite', function() 
{
    before(function() {
        cy.fixture('ConstVarbl').then(function(data) {
                this.data=data  })
      })
      
    it('Login ',function() {    

        cy.visit(this.data.URL)
        // login
        cy.get('.login-form > [type="text"]').type(this.data.Username)
        cy.get('.login-form > .ng-pristine').type(this.data.Password)
        cy.contains('Sign In').click({multiple: true})
        
        cy.get('.success').click()        
        
    })
it('Curriculam page',function() {

    // curriculam tab
    cy.get('.icon-curriculum.dash-img').click()
    cy.wait(1000)
    cy.get('ul li.option').contains('తెలుగు').click({force: true})

    cy.wait(1000)
    cy.get('ul li.option').contains('NEET-Class 12').click({force: true})    
    cy.get('.subject-button.Physics').click()
    cy.wait(1000)
    cy.get('.subject-button.Chemistry').click()
    cy.wait(1000)
    cy.get('.subject-button.Biology').click()
    cy.wait(1000)
    // open and close chapter contents
    cy.get('.fa.fa-arrow-circle-left').click()
    cy.wait(1000)
    cy.get('.fa.fa-arrow-circle-left').click()
    cy.wait(1000)
    // refresh page
    cy.get('.fa.fa-refresh').click()
    cy.wait(1000)
    //cy.get('.block-ellipsis.border-bottom').click()
    cy.get('[ng-show="selectedTopic.animationResources && selectedTopic.animationResources.length > 0"] > .resource-grid > li > .resource-img-wrapper > .resource-img').click({ force: true })
    cy.wait(10000)
    cy.get('.iconButton.pause').click()
    cy.wait(2000)

    // Chapter Content
    cy.get('[ng-if="show.relatedContent"] > a.ng-binding').click()
    cy.wait(3000)
    cy.get('i.fa-minus-circle').click()
    
    //Creating Notes and saving 
    cy.wait(3000)
    cy.get(':nth-child(2) > .language-select-button.ng-binding').click()
    cy.wait(3000)
    cy.get('[ng-if="show.notes"] > a.ng-binding').click()
    cy.wait(3000)
    cy.get('.text-center').click()
    cy.wait(3000)
    cy.get('#newNoteText').type('Creating New Notes By Telugu Videos')
    cy.wait(3000)
    cy.get('#newNotePanel > .right').click()
    cy.get('.iconButton.pause').click()    
    //cy.get('.ng-binding.active > .right').click()
    cy.wait(3000)
    cy.get('#navBackBtn').click()

    //cy.wait(3000)
    //cy.get('[ng-show="selectedChapter.chapterResources && selectedChapter.chapterResources.length > 0"] > .resource-grid > [index="0"] > .resource-img-wrapper > .resource-img').click()
    //cy.wait(3000)
    //cy.get('#navBackBtn').click()    
    cy.wait(3000)
    cy.get('[ng-show="selectedChapter.chapterResources && selectedChapter.chapterResources.length > 0"] > .resource-grid > [index="1"] > .resource-img-wrapper > .resource-img').click()
    cy.wait(3000)
    cy.get('#navBackBtn').click()
    cy.wait(3000)
    
    //Autotrophic Nutrition
    cy.get('.active > [ng-class="{active:isSelectedTopic({topicId:3214})}"]').click()
    cy.wait(3000)
    cy.get('[ng-show="selectedTopic.animationResources && selectedTopic.animationResources.length > 0"] > .resource-grid > [index="0"] > .resource-img-wrapper > .resource-img').click()
    //cy.wait(3000)
    //cy.get('.iconButton.pause').click()
    cy.wait(3000)
    cy.get('#navBackBtn').click()
    cy.wait(3000)

    // 2nd Chapter
    cy.get('[ng-click="selectCallback({chapter:chapters[1]})"] > .ng-binding').click()
    cy.get('[ng-class="{active:isSelectedTopic({topicId:3232})}"] > .chapter-name').click()
    cy.wait(3000)
    cy.get('[ng-show="selectedChapter.chapterResources && selectedChapter.chapterResources.length > 0"] > .resource-grid > [index="1"] > .resource-img-wrapper > .resource-img').click()
    cy.get('#navBackBtn').click()

    // 3r Chapter
    cy.get('[ng-click="selectCallback({chapter:chapters[2]})"] > .ng-binding').click()
    cy.get('[ng-class="{active:isSelectedTopic({topicId:3252})}"] > .chapter-name').click()
    cy.wait(3000)
    cy.get('[ng-show="selectedTopic.animationResources && selectedTopic.animationResources.length > 0"] > .resource-grid > [index="0"] > .resource-img-wrapper > .resource-img').click()
    cy.wait(13000)
    cy.get('.iconButton.pause').click()
    
})
    //cy.get('.fa.fa-power-off').click()
    
    it('Assignments',function() {

        
    })
    it('Activities',function() {

        
    })
    it('Assessments',function() {

        
    })
    it('MockTests',function() {

        
    })
    it('Reports',function() {

        
    })
    it('Timeline',function() {

        
    })
    it('Settings',function() {

        
    })



})