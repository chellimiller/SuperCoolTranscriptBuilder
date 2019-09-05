/**
 * Describes the category of the subject.
 *
 * This should probably be refactored to be more flexible.
 * We probably want to allow multiple types and subtypes.
 */
export enum SubjectType {
  ENGLISH,
  MATHEMATICS,
  SCIENCE,
  SOCIAL_STUDIES,
  PHYSICAL_EDUCATION,
  DIGITAL_ART
}

/**
 * Describes the possible options for a grade
 */
type Grade = "A" | "B" | "C" | "D" | "F";

enum SemesterType {
  FALL = "FALL",
  SUMMER = "SUMMER",
  SPRING = "SPRING"
}

enum TermType {
  SEMESTER,
  YEAR
}

interface GenericTerm<T extends TermType> {
  type: T;
}

interface SemesterTerm extends GenericTerm<TermType.SEMESTER> {
  year: number;
  term: SemesterType;
}

interface YearTerm extends GenericTerm<TermType.YEAR> {
  start: SemesterTerm;
  end: SemesterTerm;
}

type Term = SemesterTerm | YearTerm;

/**
 * Describes a subject
 */

export class Subject implements Subject {
  credits: number;
  name: string;
  type: SubjectType;
  required: boolean;
  grade: Grade;
  term: Term;

  constructor(name: string, credits: number, type: SubjectType, grade: Grade) {
    this.name = name;
    this.credits = credits;
    this.type = type;
    this.grade = grade;
  }

  get inProgress(): boolean {
    return false;
  }
}
