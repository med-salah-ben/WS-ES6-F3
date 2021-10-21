const userCard = {
    name : "yesine",
    adress : "mrazga"
} 

export const user = userCard;
export const adress = userCard.adress;
//named export
export function getUserName(){
    return userCard.name
}
//named export
export const getUserAdress = ()=>{
    return userCard.adress
}

export default userCard