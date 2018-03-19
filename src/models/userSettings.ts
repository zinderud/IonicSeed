export class UserSettings {
    public language: string;
    public height:string;
    public weight:string;
  
    constructor() {}
  
    public static defaults(language: string,height:string,weight:string): UserSettings {
      const settings = new UserSettings();
      settings.language = language;
      settings.height=height;
      settings.weight=weight;
      return settings;
    }
  
  }
  