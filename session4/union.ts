type Person = { name: string, age?: number}

let d: Person = { name: "Donald Duck" }
let ag = d.age

function doubleAge(ag?: number) {
    if (ag === undefined) return undefined
    return ag * 2
}

type Pet = { type: "dog", walk(): void }  
  | { type: "cat", sleep(): void } 
  | { type: "goldfish", swim(): void }

let pet: Pet = { type: "cat", sleep(){}}

function doSomething(pet: Pet) {
    let type = pet.type
    switch(pet.type) {
        case "dog":
            pet.walk()
            break
        case "cat":
            pet.sleep()
            break
        default:
            pet.swim()
    }
}
