 export default class NameDisplayLibraryLibrary {
  public async DynamicallyLoadname(): Promise<string> {
    const importedName=await import('./CallNameFunctions');
    return importedName.default.DisplayName();
  }
  public async DynamicallyLoadDate(): Promise<string> {
    const importedName=await import('./CallNameFunctions');
    return importedName.default.DisplayDate();
  }
  public async DynamicallyLoadDeveloperName(): Promise<string> {
    const importedDev=await import('./CallDevFunctions');
    return importedDev.default.DisplayDeveloper();
  }
}
