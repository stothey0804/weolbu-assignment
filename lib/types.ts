export type userType = "instructor" | "learner";

export interface ClassData {
  id?: number;
  title: string;
  capacity: number;
  applicants: number;
  instructor: string;
  sellingPrice: number;
}

export type ClassListData = Array<ClassData> | [];
