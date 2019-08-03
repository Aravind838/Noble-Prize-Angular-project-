export interface INoble {
   prizes: {
    overallMotivation: string;
    category: string;
    year: number;
    laureates: {
        id: number;
        firstname: string;
        surname: string;
    };
   };
}
