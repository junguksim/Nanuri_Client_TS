export interface ItemProps {
    itemIdx : number,
    pic: {
        uri : string,
        width : number,
        height : number
    },
    title: string,
    address: string,
    uploadTime: string,
    price: number,
    description :string
}