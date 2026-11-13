export interface CreateTableOptions {
  base: number;
  limit?: number;
}

export interface CreateTableUseCase {
  execute: (options: CreateTableOptions) => string;
}

export class CreateTable implements CreateTableUseCase {
  constructor /**
   * DI - Dependency Injection
   */() {}

  execute({ base, limit = 10 }: CreateTableOptions) {
    const array: string[] = [
      `
=========================
       Tabla del ${base}
=========================
  `,
    ];
    const directory = "src/outputs";
    for (let index = 1; index <= limit; index++) {
      array.push(`${base} x ${index} = ${base * index}`);
    }
    return array.join("\n");
  }
}
