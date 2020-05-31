import properUrlJoin from 'proper-url-join';
function joinUrl(base, params) {
    // @ts-ignore
    return properUrlJoin(base, ...params);
}
export { joinUrl };
//# sourceMappingURL=url.js.map