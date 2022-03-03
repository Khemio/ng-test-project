export interface File {
        _id: string,
        amount: number
        type: string,
        name: {
            first: string,
            last: string
        },
        company: string,
        email: string,
        phone: string,
        address: string

}

export interface Account {
    id: number,
    type: string,
    data: any
}