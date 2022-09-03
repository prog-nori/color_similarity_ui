export type BlockType = {
    file: string
    name: string
    red: number
    green: number
    blue: number
    hue: number
    saturation: number
    value: number
    rgb: string
    hsv: string
}

// res
export type BlockListResponseProps = {
    blocks: BlockType[]
    size: number
}

type Person = {
    name: string
    age: number
}

export type ReponseUnion = BlockListResponseProps | Person

// export interface ApiResponse extends ReponseUnion {
//     // data: T;
//     status: number;
//     statusText: string;
//     // headers: AxiosResponseHeaders;
//     // config: AxiosRequestConfig<D>;
//     // request?: any;
// }