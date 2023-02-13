import { Navigate, Outlet } from "react-router-dom";
import { auth } from "core-authent/constants/constant";
import routes from "core-authent/constants/routes";
import { getLocal } from "core-authent/utils/localStorage";

function GuardLogin() {
    const isAuth = getLocal(auth.TOKEN);

    return !isAuth ? <Outlet /> : <Navigate to={routes.dashboard} />;
}

export default GuardLogin;
