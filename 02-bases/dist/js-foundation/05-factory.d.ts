interface Options {
    uuidv4: () => string;
    getAge: (birthdate: string) => number;
}
interface UserData {
    name: string;
    birthdate: string;
    city: string;
}
export declare const buildMakePerson: ({ uuidv4, getAge }: Options) => ({ name, birthdate, city }: UserData) => {
    id: string;
    name: string;
    birthdate: string;
    age: number;
    city: string;
};
export {};
//# sourceMappingURL=05-factory.d.ts.map