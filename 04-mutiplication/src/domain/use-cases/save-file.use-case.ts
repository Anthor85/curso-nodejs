import fs from "fs";
export interface SaveFileOptions {
  fileContent: string;
  destination?: string;
  fileName?: string;
}

export interface SaveFileUseCase {
  execute: (options: SaveFileOptions) => boolean;
}

export class SaveFile implements SaveFileUseCase {
  constructor /** repository: StorageRepository */() {}

  execute = ({
    fileContent,
    destination = `src/outputs`,
    fileName = "table.txt",
  }: SaveFileOptions) => {
    try {
      fs.mkdirSync(destination, { recursive: true });
      fs.writeFileSync(`${destination}/${fileName}`, fileContent);
      console.log("File created!");
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
}
