import token from "./auth/token";
import refreshToken from "./auth/refreshToken";

import profile from "./users/profile";
import animelist from "./users/animelist";

export default {
  auth: { token, refreshToken },
  users: { profile, animelist }
};
