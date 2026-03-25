import type { Specialization } from "@/entities/specializations";

export type User = {
  id: string;
  username: string;
};

export type Company = {
  id: string;
  title: string;
  legalName: string;
  description: string;
  imageSrc: string;
  inn: string;
  kpp: string;
  createdAt: string;
  updatedAt: string;
};

export type CollectionItemResp = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy?: User | null;
  isFree: boolean;
  keywords: string[];
  company: Company;
  questionsCount: number;
  tasksCount: number;
  specializations: Specialization[];
};

export type CollectionItem = {
  id: number | undefined;
  specialization: Specialization[];
  isAccessed: boolean;
  company: string;
  author: string;
  questionsCount: number;
  keywords: string[];
  rawData: CollectionItemResp | undefined;
  description: string;
}

export type CollectionsResponse = {
  data: CollectionItemResp[];
  total: number;
  page: number;
  limit: number;
};

export interface FetchCollectionsProps {
  page: number;
  limit: number;
  titleOrDescriptionSearch?: string;
  specializations?: number[];
  keywords?: string[];
  isFree?: boolean;
  companies?: string[];
  authorId?: string;
  createdAtFrom?: string;
  createdAtTo?: string;
}