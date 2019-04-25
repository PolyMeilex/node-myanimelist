export interface SearchFilter {
    page?: Number;
    limit?: Number;
}
declare const _default: (type: string, query: string, filter?: SearchFilter) => Promise<{}>;
export default _default;
