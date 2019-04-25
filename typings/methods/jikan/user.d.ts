declare type request = 'profile' | 'history' | 'friends' | 'animelist' | 'mangalist';
declare const _default: (username: string, request?: request, argument?: any, argument2?: any) => Promise<{}>;
export default _default;
