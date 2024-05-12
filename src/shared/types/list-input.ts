export interface IListInput<SortBy>{
    q?: string,
    sortBy?: SortBy,
    order?: "asc"|"desc",
    offset?: number,
    limit?: number,
}