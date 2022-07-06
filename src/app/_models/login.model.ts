export interface login {}

export interface login_post{
    email: string,
    password: string
}

export interface login_success_res {
    id_token: string,
    email: string,
    refresh_token: string, 
    expires_in: string,
    local_id: string,
    registered:boolean
}