export interface IPaginationResponse<T> {
  data: T[];
  page: number;
  perPage: number;
  maxPage: number;
}

export interface ISearchByOptions {
  page?: number;
  searchQuery?: string;
}
