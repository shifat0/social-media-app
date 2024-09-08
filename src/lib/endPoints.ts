export const authEndPoint = {
  signUp: "/auth/sign-up",
  logIn: "/auth/login",
  verifyOtp: "/auth/verify-otp",
  forgetPassword: "/auth/forget-password",
  resetPassword: "/auth/reset-password",
};

export const userEndPoint = (userId: string) => ({
  getProfile: `/user/profile/${userId}`,
});
