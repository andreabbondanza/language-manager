import { IStorage } from "./IStorage";
import fs from "fs";
import path from "path";

export class StorageClient implements IStorage
{
    public getItem(key: string): string | null
    {
        return localStorage.getItem(key);
    }
    public setItem(item: string, key: string): void
    {
        localStorage.setItem(key, item);
    }

}

export class StorageServer implements IStorage
{
    private _path: string = '';
    /**
     * 
     * @param path path for localization settings file
     */
    public constructor(path: string)
    {
        this._path = path;
    }
    /**
     * 
     * @param key useless
     */
    public getItem(key: string = ""): string | null
    {
        const filePath = path.join(this._path, "lang-file");
        if (fs.existsSync(filePath))
        {
            const val = fs.readFileSync(filePath,{encoding: "utf8"});
            return val !== undefined ? val : null;
        }
        return null;
    }
    /**
     * set an item for storage server
     * @param item the value
     * @param key useless
     */
    public setItem(item: string, key: string = ""): void
    {
        fs.writeFileSync(path.join(this._path, "lang-file"), item,{encoding: "utf8"});
    }

}