import { type } from "os";
import { StringDecoder } from "string_decoder";
import { ResolvedTypeReferenceDirectiveWithFailedLookupLocations, updateSourceFileNode } from "typescript";

let a = 1 + 2;
let b = a + 3;
let c = {
    apple: a,
    banana: b
}
let d = c.apple * a;

(3).toString() + [1].toString();

function add(e: string, f: number){
    return e || f;
}

function sumVariadic(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0)
}
sumVariadic(1, 2, 3) // 6と評価される

type Log = (message: string, userId?: string) => void
let log: Log = (
    message,
    userId = 'Not signed in'
 ) => {
    let time = new Date().toISOString()
    console.log(time, message, userId)
}
type Log = {
    (message: string, userId?: string): void
}


type Reserve = {
    (from: Date, to: Date, destination: Date): Reservation
    (from: Date, destination: string): Reservation
}
let reserve: Reserve = {
    from: Date,
    toOrDestination: Date | string,
    destination?: string 
} => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        // 宿泊旅行を予約する
    } else if (typeof toOrDestination === 'string') {
        // 日帰り旅行を予約する
    }
}

type Filter = {
    <T>(array: T[], f: (iterm: T) => boolean): T[]
}

function map<T, U>(array: T[], f: (item: T) => U): U[] {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i]);
    }
    return result
}


function deleteUser(user: {id?: number, name: string}) {
    delete user.id
}
type LegacyUser = {
    id?: number | string
    name: string
}
let legacyUser: LegacyUser = {
    id: '703331',
    name: 'Xin Yang'
}
deleteUser(legacyUser)
