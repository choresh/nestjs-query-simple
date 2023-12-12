export interface DtoPropOptions {
    nullable?: boolean;
    type?: () => any;
}
export declare function DtoProp(options?: DtoPropOptions): (target: any, key: string) => void;
