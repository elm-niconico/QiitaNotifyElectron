import {FC} from "react";

interface Props{
    tagName: string;
}

export const Tag: FC<Props> = (props)=>(
    <div className={"tag"}>
        {props.tagName}
    </div>
);
