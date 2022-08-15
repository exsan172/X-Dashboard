import { atom } from "recoil";

export const showMenu = atom({
    key : "showMenu",
    default : true
})

export const activeMenu = atom({
    key : "activeMenu",
    default : ""
})