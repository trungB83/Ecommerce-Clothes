import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { auth } from "core-authent/constants/constant";
import routes from "core-authent/constants/routes";
import { getLocal, getObjectLocal } from "core-authent/utils/localStorage";

function GuardAdmin() {
    const [userInfo, setUserInfo] = useState(() => {
        const userInfoLocal = localStorage.getItem(auth.USER_INFO);
        if (userInfoLocal) {
            return getObjectLocal(auth.USER_INFO);
        } else {
            return {};
        }
    });
    const isAuth = getLocal(auth.TOKEN);

    return isAuth && userInfo?.user_cate_id !== 1 ? <Outlet /> : <Navigate to={`${routes.customer}`} />
}

export default GuardAdmin;
