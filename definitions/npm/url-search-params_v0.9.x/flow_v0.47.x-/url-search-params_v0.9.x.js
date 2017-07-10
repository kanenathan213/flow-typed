declare module 'url-search-params' {
  declare class URLSearchParams {
    constructor(): URLSearchParams;
    has(string): boolean;
    get(string): string;
    getAll(string): Array<string>;
    toString(): string;
    append(string, string): void;
    delete(string): void;
    set(string, number | string): void;
  }
  declare export default typeof URLSearchParams;
}
