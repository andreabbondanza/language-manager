

import dewlinq from "dewlinq";
import { ILanguage } from "./ILanguage";
import { IStorage } from "./IStorage";
import { Neutral } from "./Language";
dewlinq();

const neutral = new Neutral();

const _defaultLanguage: string = neutral.language();
let _currentLanguage: string = neutral.language();

export class LanguageManager
{
    private _storage: IStorage;
    public constructor(storageType: IStorage)
    {
        this._storage = storageType;
        if (this._storage.getItem("language_manager") === null)
            this.setLanguageOnStore(_defaultLanguage);
        else
            _currentLanguage = this.getLanguageFromStore();
    }
    private _languages: ILanguage[] = [neutral];

    public addLanguages(...lang: ILanguage[]): LanguageManager
    {
        this._languages.push(...lang);
        return this;
    }
    public get languages(): ILanguage[]
    {
        return this.languages;
    }
    private getLanguageFromStore(): string
    {
        const lang = this._storage.getItem("language_manager");
        for (const iterator of this._languages.select(x => x.language()))
        {
            if (iterator.toString() === lang)
                return iterator;
        }
        return _defaultLanguage;
    }

    private setLanguageOnStore(lang: string)
    {
        this._storage.setItem(lang.toString(), "language_manager")
    }
    /**
     * Set the current language
     * @param lang current language
     */
    public setCurrentLanguage(lang: string): LanguageManager
    {
        _currentLanguage = lang;
        this.setLanguageOnStore(lang);
        return this;
    }
    /**
     * Return the current language dictionary value or the same string
     * @param str key
     */
    public getString(str: string | undefined | null): string
    {
        if (_currentLanguage === _defaultLanguage)
            return str || '';
        else
        {
            const temp = str || '';
            const lang = this._languages.first(x => x.language() === _currentLanguage);
            if (lang !== null)
                return lang.get(temp);
            return temp;
        }
    }
    /**
     * Return the current language dictionary value or the same string
     * @param str key
     */
    public _(str: string | undefined | null): string
    {
        if (_currentLanguage === _defaultLanguage)
            return str || '';
        else
        {
            const temp = str || '';
            const lang = this._languages.first(x => x.language() === _currentLanguage);
            if (lang !== null)
                return lang.get(temp);
            return temp;
        }
    }
}



