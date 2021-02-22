class Teacherobj
{
    getusername()
    {
        return cy.get('.login-form > [type="text"]')
    }
    getpassword()
    {
        return cy.get('.login-form > .ng-pristine')
    }
    getSignin()
    {
        return cy.contains('Sign In')
    }
    getSuccess()
    {
        return cy.get('.success')
    }
    getCurriculam()
    {
        return cy.get('.icon-curriculum.dash-img')
    }
    getGrades()
    {
        return cy.get('ul li.option').contains('IIT-Class 12')
    }
    getSubChemistry()
    {
        return cy.get('.subject-button.Chemistry ')
    }
    getSubMathematics()
    {
        return cy.get('.subject-button.Mathematics')
    }
    getSubPhysics()
    {
        return cy.get('.subject-button.Physics')
    }
    getarrowleft()
    {
        return cy.get('.fa.fa-arrow-circle-left')
    }
    getrefresh()
    {
        return cy.get('.fa.fa-refresh')
    }
    getLessonDocument()
    {
        return cy.get('li>div.resource-img-wrapper')
    }
    getPdfNext()
    {
        return cy.get('[ng-click="pdfViewer.goNextPage()"]')
    }
    getPdfZoomOut()
    {
        return cy.get('[ng-click="pdfViewer.zoomOut()"]')
    }
    getPdfZoomIn()
    {
        return cy.get('[ng-click="pdfViewer.zoomIn()"]')
    }
    getPdfFitpage()
    {
        return cy.get('[ng-click="pdfViewer.fitPage()"]')
    }
    getChapterContent()
    {
        return cy.get('[ng-if="show.relatedContent"] > a.ng-binding')
    }
    getchaptercontentclose()
    {
        return cy.get('i.fa-minus-circle')
    }
    getChapterFeature()
    {
        return cy.get('[ng-if="show.chapterFeatures"] > a.ng-binding')
    }
    getChapterNotes()
    {
        return cy.get('[ng-if="show.notes"] > a.ng-binding')
    }
    getNotesArea()
    {
        return cy.get('.text-center')
    }
    getNotesTyping()
    {
        return cy.get('#newNoteText')
    }
    getSaveNote()
    {
        return cy.get('[ng-click="saveNote()"]')
    }
    getNavigateback()
    {
        return cy.get('#navBackBtn')
    }
    getLogOut()
    {
        return cy.get('.fa-power-off')
    }
    getCreateAssignment()
    {
        return cy.get('#dropdownAssignment').find('li > [ui-sref="assignmentCreate"]')
    }
    getViewAssignment()
    {
        return cy.get('#dropdownAssignment').find('li > [ui-sref="assignmentView"]')
    }
    getName()
    {
        return cy.get('#txtAssignmentName')
    }
    getClass()
    {
        return cy.get('select').eq(1).select('0')
    }
    getSubject()
    {
        return cy.get('select').eq(2).select('2')
    }
    getSubChapter()
    {
        return cy.get('select').eq(3).select('0')
    }
    getdropdwnCreatedDate()
    {
        return cy.get('select').eq(4).select('0')
    }
    getSubjectTopics()
    {
        return cy.get('ul li.option')
    }
    getMarks()
    {
        return cy.get('select').eq(6).select('0')
    }
    getAssignmentDescription()
    {
        return cy.get('#cke_1_contents')
    }
    getActivityDescription()
    {
        return cy.get('.cke_contents')
    }
    getCreateActivtyPush()
    {
        return cy.get('#aCreateAndPush')
    }
    getCreateandPush()
    {
        return cy.get('[ng-click="createAndPush()"]')
    }
    getCheckbox()
    {
        return cy.get('[type="checkbox"]')
    }
    getCalender1()
    {
        return cy.get('.fa-calendar').eq(0)
    }
    getDate()
    {
        return cy.get('.datepicker .datepicker-days .table-condensed tr:nth-child(3) td')
    }
    getCalender2()
    {
        return cy.get('.fa-calendar').eq(1)
    }
    getPushCalender1()
    {
        return cy.get('.fa-calendar').eq(0)
    }
    getPushCalender2()
    {
        return cy.get('.fa-calendar').eq(1)
    }
    getDateandTime()
    {
        return cy.get('.datetimepicker .table-condensed tr:nth-child(5) td')
    }
    getDateandTime1()
    {
        return cy.get('.datetimepicker .table-condensed tr:nth-child(5) td')
    }
    getCalenderHour()
    {
        return cy.get('.hour:nth-child(18)')
    }
    getCalenderHour1()
    {
        return cy.get('.hour:nth-child(22)')
    }
    getCalenderMinute()
    {
        return cy.get('.minute:nth-child(10)')
    }
    getCalenderMinute1()
    {
        return cy.get('.minute:nth-child(10)')
    }
    getcancelPush()
    {
        return cy.get('[ng-click="cancelPush()"]')
    }
    getPushedTabButton()
    {
        return cy.get('[ng-click="showPushedAssignments()"]')
    }
    getAssignmentPushedTable()
    {
        return cy.get('tr td:nth-child(4)')
    }
    getBack()
    {
        return cy.get('[ng-click="goBack()"]')
    }
    getCreateActivity()
    {
        return cy.get('#dropdownActivity').find('li > [ui-sref="activityCreate"]')
    }
    getViewActivity()
    {
        return cy.get('#dropdownActivity').find('li > [ui-sref="activityView"]')
    }
    getActivityPushedTable()
    {
        return cy.get('tr td:nth-child(2)')
    }
    getActivityEyeview()
    {
        return cy.get(':nth-child(3)>i.fa-eye')
    }
    getFullScreen()
    {
        return cy.get('[ng-click="onClickFullScreen()"]')
    }
    getVideoMute()
    {
        return cy.get('[ng-click="onClickMute()"]')
    }
    getvideoPlay()
    {
        return cy.get('[ng-click="onClickPlayPause()"]')
    }
    getActivityClose()
    {
        return cy.get('[ng-click="closeModal()"]')
    }
    getEntranceExam()
    {
        return cy.get('a.ng-scope > .icon-competitive')
    }
    getEntranceExamChapter()
    {
        return cy.get('select').eq(2).select('2385')
    }
    getEntranceExamConcepts()
    {
        return cy.get('[title="Types Of Matrices"]')
    }  
    getEditNotes()
    {
        return cy.get('.fa.fa-pencil')
    }
    getCancel()
    {
        return cy.get('[ng-click="cancelPush()"]')
    }
    getAddMultimeddia()
    {
        return cy.get('[ng-click="addMultiMediaLink()"]')
    }
    getcloseDialog()
    {
        return cy.get('[ng-click="closeThisDialog()"]')
    }
    getcancelDialog()
    {
        return cy.get('[ng-click="cancelDialog()"]')
    }
    getCreateLessonPlan()
    {
        return cy.get('[ng-click="savePlan()"]')
    }    
    getEditLesson()
    {
        return cy.get('[ng-click="editPlan()"]')
    }
    getViewBack()
    {
        return cy.get('[ng-click="goBack()"]')
    }
    getGoals()
    {
        return cy.get('.goals')
    }
    getGoalClass()
    {
        return cy.get('select').eq(1).select('0')
    }
    getGoalsubj()
    {
        return cy.get('select').eq(2).select('0')
    }
    getGoalsection()
    {
        return cy.get('select').eq(3).select('0')
    }
    getGoalName()
    {
        return cy.get('[type="text"]')
    }
    getGoaldropdwn1()
    {
        return cy.get('select').eq(4).select('2')
    }
    getGoaldropdwn2()
    {
        return cy.get('select').eq(5).select('1')
    }
    getGoaldropdwn3()
    {
        return cy.get('select').eq(6).select('0')
    }
    getSetall()
    {
        return cy.get('.set-all-btn')
    }
    getsavegoal()
    {
        return cy.get('[ng-click="saveGoals()"]')
    }
    getGradebook()
    {
        return cy.get('.grade-book')
    }
    getGradeClass()
    {
        return cy.get('select').eq(1).select('0')
    }
    getGradesection()
    {
        return cy.get('select').eq(2).select('0')
    }
    getGradesubj()
    {
        return cy.get('select').eq(3).select('1')
    }
    getGradetype()
    {
        return cy.get('select').eq(4).select('1')
    }
    getGradeChapter()
    {
        return cy.get('select').eq(5).select('5')
    }
    getAssesmName()
    {
        return cy.get('[ng-model="name"]')
    }
    getGrademarks()
    {
        return cy.get('select').eq(6).select('0')
    }
    getActivityTab()
    {
        return cy.get('[heading="Activity"]')
    }
    getAssessTab()
    {
        return cy.get('[heading="Assessment"]')
    }
    getAssignTab()
    {
        return cy.get('[heading="Assignment"]')
    }
    getCollaborationTab()
    {
        return cy.get('[heading="Collaboration"]')
    }
    getnext()
    {
        return cy.get('.fc-next-button')
    }
    getprevious()
    {
        return cy.get('.fc-prev-button')
    }  
}
export default Teacherobj