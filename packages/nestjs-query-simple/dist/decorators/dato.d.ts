export interface DatoOptions {
    name: string;
    collection?: string;
    outputOnly?: boolean;
}
export declare function Dato(options: DatoOptions): ClassDecorator;
