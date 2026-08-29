export interface IContactApiData {
    name: string,
    email: string
    message: string
}

export interface IContactApiRequest extends IContactApiData {
    turnstileToken?: string
}
