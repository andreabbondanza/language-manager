import { ILanguage } from './ILanguage';

export class Language implements ILanguage
{
    public language = () => "neutral";
    public dictionary: any = {
    }
    public get(key: string): string
    {
        if (this.dictionary[key])
            return this.dictionary[key];
        return key;
    }
}

export class Neutral extends Language
{
    public language = () => "neutral";
    public dictionary = {

    }
}