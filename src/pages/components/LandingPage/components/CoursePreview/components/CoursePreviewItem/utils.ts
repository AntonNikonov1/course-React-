import { getMediaBreakpoints } from "utils/media-breakpoints";

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

export class CoursePreviewItemAnimation {
  private breakPointValue = getMediaBreakpoints().breakPointValue;
  private isOpened: boolean;

  constructor(isOpened: boolean) {
    this.isOpened = isOpened;
  }

  getModuleMarkMargin = () => {
    if (!this.isOpened) {
      return "0";
    }

    if (this.breakPointValue === "xs") {
      return "20px";
    }

    return "40px";
  };

  getLessonNavigationContainerMargin = () => {
    if (!this.isOpened) {
      return "0";
    }

    if (this.breakPointValue === "xs") {
      return "30px 0 0";
    }

    return "100px 0 0";
  };

  getLessonDurationMargin = () => {
    if (this.isOpened) {
      return "0";
    }

    if (this.breakPointValue === "xs") {
      return "25px 0 0";
    }

    return "55px 0 0";
  };
}

export const COURSE_PREVIEW_ITEM_OPEN_ANIMATION_DURATION = 250;
