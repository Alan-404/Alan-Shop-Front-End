export class LoginDTO{
    email: String = "";
    password: String = "";
}

export class ResponseLogin{
    success: boolean = false;
    message: string = "";
    accessToken: string = "";
}

export class ChangePasswordDTO{
    currentPassword: string = "";
    newPassword: string = "";
}