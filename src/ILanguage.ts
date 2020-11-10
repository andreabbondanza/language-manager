export interface ILanguage
{
    language: () => string;
    dictionary: any;
    get: (str: string) => string;
}
