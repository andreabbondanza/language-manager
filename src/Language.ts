import { ILanguage } from './ILanguage';

export class Language implements ILanguage
{
    public language = () => "neutral";
    public dictionary: any = {
    }
    public get(key: string): string
    {
        return this.dictionary[key];
    }    
}

export class Neutral extends Language{
    public language = () => "neutral";
    public dictionary = {
       
    }
}