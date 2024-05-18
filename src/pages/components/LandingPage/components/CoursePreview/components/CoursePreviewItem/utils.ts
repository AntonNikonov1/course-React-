export class GetCoursePreviewItemId {
  private itemIndex: number;
  moduleMarkId: string;
  lessonNameId: string;
  expandIconId: string;
  lessonNavigationContainerId: string;

  constructor(itemIndex: number) {
    this.itemIndex = itemIndex;
    this.moduleMarkId = `CoursePreviewItemModuleMark${this.itemIndex}`;
    this.lessonNameId = `CoursePreviewItemContainer${this.itemIndex}`;
    this.expandIconId = `CoursePreviewItemExpandIconId${this.itemIndex}`;
    this.lessonNavigationContainerId = `CoursePreviewItemLessonContainer${this.itemIndex}`;
  }
}

export const COURSE_PREVIEW_ITEM_OPEN_ANIMATION_DURATION = 250;
