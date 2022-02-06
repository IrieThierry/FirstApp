import React from 'react';
import { Badge} from 'antd';


const Badges = () => {
    const [count, setCount] = React.useState(0)
       return (
        <div>
        <Badge count={count}/>
       </div>
    );
};

export default Badges;