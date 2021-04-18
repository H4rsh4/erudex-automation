class StudentCurriculumPage {
  getSubject() {
    return cy.get(".subject-button");
  }
  getCollapseArrow() {
    return cy.get(".expand-arrow");
  }
  getExpandArrow() {
    return cy.get(".fa.fa-arrow-circle-left");
  }
  getFeaturesExpand() {
    return cy.get(".fa.fa-chevron-left").eq(1);
  }
  getFeaturesCollapse() {
    return cy.get(".collab-collapse", { timeout: 10000 });
  }
  getOpenClassList() {
    return cy.get(".nice-select").first();
  }
  getClassList() {
    return cy.get("ul.list > li");
  }
  getChapter(idx) {
    return cy.get("li>div.resource-img-wrapper").eq(idx);
  }
  getVideoPause() {
    return cy.get(".iconButton.pause");
  }
  getMediaControl() {
    return cy.get("vg-play-pause-button.ng-scope > .iconButton");
  }
  getChapterContent() {
    return cy.get(".accordion").contains("Chapter Content");
  }
  getChapterContentResource() {
    return cy.get(".related-resource");
  }
  getChapterFeatureResources() {
    return cy.get('[resources="selectedChapter.chapterResources"] >');
  }
  getChapterFeatures() {
    return cy.contains("Chapter Features");
  }
  getToggleRatingBar() {
    return cy.get('[ng-click="toggleRatingBar()"] > img');
  }
  getHighestRating() {
    return cy.get('[ng-class="{active:currentResourceRating > 4.75}"]');
  }
  getLowestRating() {
    return cy.get('[ng-class="{active:currentResourceRating > 0.75}"]');
  }
  getToggleFavorite() {
    return cy.get('[ng-click="toggleFavorite()"] > .ng-scope');
  }
  getNewNote() {
    return cy.contains("New Note");
  }
  getNoteBox() {
    return cy.get("#newNoteText");
  }
  getNoteSave() {
    return cy.contains("Save");
  }
  getNoteCancel() {
    return cy.contains("Cancel");
  }
  getNoteText() {
    return cy.get(".note-text");
  }
  getHideNote() {
    return cy.get(".ng-binding.active > span.ng-scope");
  }
  getDocCanvas() {
    return cy.get("canvas.pdf-canvas");
  }
  getDocZoomIn() {
    return cy.get('[ng-click="pdfViewer.zoomIn()"]');
  }
  getDocZoomOut() {
    return cy.get('[ng-click="pdfViewer.zoomOut()"]');
  }
}
export default StudentCurriculumPage;
