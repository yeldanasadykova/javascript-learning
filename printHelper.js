export function printAge(age){
    console.log(age)
}


export class CustomerDetails {
    /**
     * This method will print the first name
     * @param {string} firstName 
     */
    printFirstName(firstName){
        console.log(firstName)
    }
    printLastName(lastName){
        console.log(lastName)
    }
}


class customerDetails {
    printFirstName(firstName){
        console.log(firstName)
    }
    printLastName(lastName){
        console.log(lastName)
    }
}
export const cDetails = new customerDetails()