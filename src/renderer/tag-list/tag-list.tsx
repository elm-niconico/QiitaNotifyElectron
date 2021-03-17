import {FC, useState} from "react";
import {Tag} from "../tag/tag";
import {Test} from "../../main/preload";

export interface TagProps{
    tagName: string;
}

export const TagList: FC = () => {
    const [list, setList] = useState<TagProps[]>([]);

    let test : Test|null = null
        //@ts-ignore
        test = window.api;
    test?.test()
    return (
    <div id={"tag-list"}>
        {list.map(tag => <Tag tagName={tag.tagName} />)}
    </div>
    );
};
