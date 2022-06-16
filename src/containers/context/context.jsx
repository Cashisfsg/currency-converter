import { createContext } from "react";

const Context =  createContext ({
    currency: [],
    course: [],
    setCurrency: () => Promise.resolve(null),
    setCourse: () => Promise.resolve(null),
})

export default Context;