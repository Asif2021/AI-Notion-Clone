import { User } from "./types"


declare global {
    interface CustomJWTSessionClaim extends User{}
}