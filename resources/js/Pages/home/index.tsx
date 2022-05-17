import React from "react";

const Home: React.FC<any> = ({user}) => {
    return (
        <div>
            {user.id}
        </div>
    );
}

export default Home;
