/*
Author: Murali
*/
/// <reference types="Cypress" />
import DataEntry from '../../support/pageObjects/DataEntry'
describe('My First Test Suite', function() 
{
    beforeEach(function() {
        cy.fixture('DataEntry').then(function(data) {
                this.data=data  })
      })

    it('Login ',function() {   
        const DEntry = new DataEntry() 
        cy.visit(this.data.URL)
        // login
        DEntry.getusername().type(this.data.Username)
        DEntry.getpassword().type(this.data.Password)
        DEntry.getSignin().click({multiple: true})
        DEntry.getSuccess().click()        
        
    })
    it('Create Assessment ',function() {
        const DEntry = new DataEntry()
        DEntry.getCreateAssessment().click({force: true})
        DEntry.getNameAssessment().type(this.data.exmType)
        DEntry.getType().contains(this.data.testtype)
        DEntry.getCurriculam().contains(this.data.Curriculum)
        DEntry.getGrade().contains(this.data.Class)
        DEntry.getSubject().contains(this.data.Subject)
        DEntry.getLevel().contains(this.data.Level)
        DEntry.getDuration().clear()
        cy.wait(1000)
        DEntry.getDuration().type(this.data.Duration)
        DEntry.getMarks().clear()
        cy.wait(1000)
        DEntry.getMarks().type(this.data.Marks)
        DEntry.getSelectquestions().click()
        cy.wait(7000)
        DEntry.getChapter().contains(this.data.Chapter)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        DEntry.getTopic().contains(this.data.Topic)  
        DEntry.getDifficulty().contains(this.data.Level)
        DEntry.getSkillType().contains(this.data.Skill)
        //DEntry.getUsage().contains('Regular')
        DEntry.getPastexam().contains(this.data.pastExm)
        DEntry.getExamyear().contains(this.data.Year)
        DEntry.getQstntype().contains(this.data.QstType)
        DEntry.getDescript().type(this.data.content)
        DEntry.getConcept().type(this.data.content)
        DEntry.getAddquestion1().click({ force: true })
        DEntry.getAddquestion2().click({ force: true })
        DEntry.getAddquestion3().click({ force: true })
        DEntry.getAddquestion4().click({ force: true })
        DEntry.getAddquestion5().click({ force: true })
        DEntry.getOK().click({force:true})
        cy.wait(2500)
        DEntry.getDeleteqstn().click()
        DEntry.getSuccess().click()
        DEntry.getAddNew().click()
    })
    it('Add Questions ',function() {
        const DEntry = new DataEntry()
        DEntry.getCurriculamAdd().contains(this.data.Curriculum)
        DEntry.getGradeAdd().contains(this.data.Class)
        DEntry.getSubjectAdd().contains(this.data.Subject)
        DEntry.getChapterAdd().contains(this.data.Chapter)
        DEntry.getTopicAdd().contains(this.data.Topic)
        DEntry.getDifficultAdd().contains(this.data.Level)
        DEntry.getSkillTypeAdd().contains(this.data.Skill)
        DEntry.getQstntypeAdd().contains(this.data.Qstntype)
        Cypress.on('uncaught:exception', (err, runnable) => {
             return false
          })
        DEntry.getNumericDescription().type(this.data.discript)
        DEntry.getNumericAns().type(this.data.NumVal)
        DEntry.getQstnSolution().click()
        DEntry.getAnswer1().type(this.data.Answer1)
        DEntry.getQstnSolution().click()
        DEntry.getQstnHint().click()
        DEntry.getHint1().type(this.data.Hint1)
        DEntry.getQstnHint().click()
        DEntry.getPreview().click()
        DEntry.getClose().click()
        DEntry.getSave().click()
        DEntry.getCLOSE().click()
        DEntry.getSaving().click()
    })    
})    