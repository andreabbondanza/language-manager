export interface IStorage
{
    getItem(key: string): string | null;
    setItem(item: string,key: string): void;
}