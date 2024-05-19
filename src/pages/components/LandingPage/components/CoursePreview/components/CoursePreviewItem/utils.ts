export class GetCoursePreviewItemId {
  private itemIndex: number;
  moduleMarkId: string;
  lessonNameId: string;
  lessonDurationId: string;
  expandIconId: string;
  lessonNavigationContainerId: string;

  constructor(itemIndex: number) {
    this.itemIndex = itemIndex;
    this.moduleMarkId = `coursePreviewItemModuleMark${this.itemIndex}`;
    this.lessonNavigationContainerId = `coursePreviewItemLessonContainer${this.itemIndex}`;
    this.lessonNameId = `coursePreviewItemLessonName${this.itemIndex}`;
    this.lessonDurationId = `coursePreviewItemLessonDuration${this.itemIndex}`;
    this.expandIconId = `coursePreviewItemExpandIconId${this.itemIndex}`;
  }
}

export const COURSE_PREVIEW_ITEM_OPEN_ANIMATION_DURATION = 250;
