declare function producer(id: number, p?: number): Promise<any>;
declare namespace producer {
    var debug: (id: number, p?: number) => string;
}
export default producer;
