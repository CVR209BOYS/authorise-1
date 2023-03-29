
import { useEffect, useState } from "react";
import { ReactSession } from 'react-client-session';
ReactSession.setStoreType("localStorage")

function Profile() {
    const [user, setUser] = useState(undefined);
    const [user2, setUser2] = useState(undefined)
    useEffect(() => {
        setUser(currentUser => ReactSession.get("user"));
    }, [ReactSession.get("user")]);
    useEffect(() => {
        setUser2(user);
    }, [user]);
    return (
        <>
            {user2 &&
                <div>
                    {user2.name}
                    <div>
                        {user2.email}
                    </div>
                    <div>
                        <img src={user2.picture}></img>
                    </div>
                </div>
            }
            {
                !user2 && <div>koi user nhi h LAUDE</div>
            }

        </>



    )
}

export default Profile