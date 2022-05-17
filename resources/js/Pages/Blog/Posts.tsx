import React from "react";

const Posts: React.FC<any> = ({title}) => {
    return (
        <div>
            <h1>Title:</h1>
            <span>{title}</span>
        </div>
    );
}

export default Posts;
