
import Star from "./Star";
import { nanoid } from 'nanoid'//библиотека, которая  генерирует уникальный id

interface StarsProps {
    count: number,
}


const Stars = ({count}: StarsProps ) => {
    // const count = props;
    if (!Number.isInteger(count) || typeof count !== 'number' || isNaN(count) || count < 1 || count > 5) {
        return null;
    };

    const starsItem = [];
    for (let i = 0; i < count; i++) {
        starsItem.push(<Star key={nanoid(10)} />);
    }


    return (
        <ul className="card-body-stars u-clearfix">
            {starsItem}
        </ul>
    );
}


export default Stars