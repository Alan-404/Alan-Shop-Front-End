export const formatDate = (date: string) => {
    var arr_date = date.split('T')[0].split('-')
    return arr_date[2] + " - " + arr_date[1] + " - " + arr_date[0]
}

export const reduceDescription = (sequence: string) => {
    var arr = sequence.split(' ')
    arr = arr.slice(0, 15)
    return arr.join(' ') + "..."
}

export const calDiscountedPrice = (price: number, discount: number) =>{
    return (price*((100-discount)/100))
}

export const convertNum2Vec = (num: number) => {
    var arr = []
    for (var i =0; i<num; i++){
        arr.push(i)
    }

    return arr;
}

export const hidePhoneNumber = (phone: string) => {
    return phone.slice(0, 6) + "******"
}

export const makeUrlAvatarUser = (id: string) => {
    return `http://localhost:8080/user/avatar?id=${id}`
}