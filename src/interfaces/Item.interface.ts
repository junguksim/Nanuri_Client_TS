import { Picture } from "../classes/Picture.class"

export interface ItemProps {
    userInfo : {
        userIdx : number,
        userName : string,
        userImg : Picture,
        address : string
    },
    itemInfo : {
        itemIdx : number,
        thumbnail : Picture,
        itemPictures : Array<Picture>,
        title: string,
        uploadTime: string,
        price: number,
        description :string,
        people : number,
        maxPeople : number
    }
}