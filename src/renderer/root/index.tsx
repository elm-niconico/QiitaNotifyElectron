import {FC} from "react";
import ReactDOM from "react-dom";
import './index.scss';
import {TagList} from "../tag-list/tag-list";

const Root: FC = () => (
    <>
        <TagList />
    </>
);


ReactDOM.render(<Root />,document.getElementById('root'))
