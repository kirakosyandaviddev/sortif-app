export const routes = {
    root: '/',
    signIn: '/sing-in',
    forgotPassword: '/forgot-password',
    checkEmail: (email: string) => `/check-email/${email}`,
    newPassword: '/new-password',
    passwordReset: '/password-reset',

    signUp: '/sign-up',
    emailVerification: (email: string) => `/email-verification/${email}`,
    mailBoxConection: '/mailbox-conection',

    userHome: '/home',
}
