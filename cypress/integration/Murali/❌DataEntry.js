/*
Author: Murali
*/
/// <reference types="Cypress" />
import DataEntry from '../../support/pageObjects/DataEntry'
const DEntry = require('../../fixtures/Murali/DataEntry.json')
describe('My First Test Suite', function() 
{
    it('Login ',function() {   
        const DEntry = new DataEntry() 
        cy.visit(DEntry.URL)
        // login
        DEntry.getusername().type(DEntry.Username)
        DEntry.getpassword().type(DEntry.Password)
        DEntry.getSignin().click({multiple: true})
        DEntry.getSuccess().click()        
        
    })
    it('Create Assessment ',function() {
        const DEntry = new DataEntry()
        DEntry.getCreateAssessment().click({force: true})
        DEntry.getNameAssessment().type(DEntry.exmType)
        DEntry.getType().contains(DEntry.testtype)
        DEntry.getCurriculam().contains(DEntry.Curriculum)
        DEntry.getGrade().contains(DEntry.Class)
        DEntry.getSubject().contains(DEntry.Subject)
        DEntry.getLevel().contains(DEntry.Level)
        DEntry.getDuration().clear()
        cy.wait(1000)
        DEntry.getDuration().type(DEntry.Duration)
        DEntry.getMarks().clear()
        cy.wait(1000)
        DEntry.getMarks().type(DEntry.Marks)
        DEntry.getSelectquestions().click()
        cy.wait(7000)
        DEntry.getChapter().contains(DEntry.Chapter)
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from
            // failing the test
            return false
          })
        DEntry.getTopic().contains(DEntry.Topic)  
        DEntry.getDifficulty().contains(DEntry.Level)
        DEntry.getSkillType().contains(DEntry.Skill)
        //DEntry.getUsage().contains('Regular')
        DEntry.getPastexam().contains(DEntry.pastExm)
        DEntry.getExamyear().contains(DEntry.Year)
        DEntry.getQstntype().contains(DEntry.QstType)
        DEntry.getDescript().type(DEntry.content)
        DEntry.getConcept().type(DEntry.content)
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
        DEntry.getCurriculamAdd().contains(DEntry.Curriculum)
        DEntry.getGradeAdd().contains(DEntry.Class)
        DEntry.getSubjectAdd().contains(DEntry.Subject)
        DEntry.getChapterAdd().contains(DEntry.Chapter)
        DEntry.getTopicAdd().contains(DEntry.Topic)
        DEntry.getDifficultAdd().contains(DEntry.Level)
        DEntry.getSkillTypeAdd().contains(DEntry.Skill)
        DEntry.getQstntypeAdd().contains(DEntry.Qstntype)
        Cypress.on('uncaught:exception', (err, runnable) => {
             return false
          })
        DEntry.getNumericDescription().type(DEntry.discript)
        DEntry.getNumericAns().type(DEntry.NumVal)
        DEntry.getQstnSolution().click()
        DEntry.getAnswer1().type(DEntry.Answer1)
        DEntry.getQstnSolution().click()
        DEntry.getQstnHint().click()
        DEntry.getHint1().type(DEntry.Hint1)
        DEntry.getQstnHint().click()
        DEntry.getPreview().click()
        DEntry.getClose().click()
        DEntry.getSave().click()
        DEntry.getCLOSE().click()
        DEntry.getSaving().click()
    })    
})    