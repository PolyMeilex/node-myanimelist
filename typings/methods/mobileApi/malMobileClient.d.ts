import token from "./auth/token";
import refreshToken from "./auth/refreshToken";
import profile from "./users/profile";
import animelist from "./users/animelist";
declare const _default: {
    auth: {
        token: typeof token;
        refreshToken: typeof refreshToken;
    };
    users: {
        profile: typeof profile;
        animelist: typeof animelist;
    };
};
export default _default;
