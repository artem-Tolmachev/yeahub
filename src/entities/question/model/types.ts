import type { Specialization } from "@/entities/specializations";

export interface UserShort {
  id: string;
  username: string;
}
export interface ResponseData {
  data: Question[];
  totalQuestions: number;
}

export interface Skill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  specializations?: Specialization[];
  createdBy?: UserShort;
}


export interface Question {
  id: number;
  title: string;
  slug: string;
  description: string;
  code: string;
  imageSrc: string;
  keywords: string[];

  longAnswer: string;
  shortAnswer: string;

  status: 'public' | 'private' | string; 
  rate: number;
  complexity: number;

  createdById: string;
  updatedById: string;

  questionSpecializations: Specialization[];
  questionSkills: Skill[];

  createdAt: string;
  updatedAt: string;

  createdBy: UserShort;
  updatedBy: UserShort;

  checksCount: number;
  isLearned: boolean;
  isFavorite: boolean;

  profileId: string;
  lastUpdate: string;
}

export interface PaginatedResponse<T> {
  total: number;
  page: number;
  limit: number;
  data: T[];
}

export type QuestionsResponse = PaginatedResponse<Question>;




