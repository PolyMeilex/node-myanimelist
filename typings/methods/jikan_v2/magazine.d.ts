declare function magazine(id: number, p?: number): Promise<any>;
declare namespace magazine {
    var debug: (id: number, p?: number) => string;
}
export default magazine;
