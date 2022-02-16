export const routes = {
    root: '/',
    signIn: '/sign-in',
    forgotPassword: '/forgot-password',
    checkEmail: (email: string) => `/check-email/${email}`,
    newPassword: '/new-password',
    passwordReset: '/password-reset',

    signUp: '/sign-up',
    emailVerification: (email: string) => `/email-verification/${email}`,
    mailBoxConection: '/mailbox-conection',

    home: '/home',
    invoice: '/invoice',
}
