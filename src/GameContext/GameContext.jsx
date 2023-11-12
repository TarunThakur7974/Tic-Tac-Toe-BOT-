import { createContext, useReducer } from "react";
import GameReducer from "./GameReducer";

let GameContext = createContext();

let initialState = {
    one: "Hello",
    world: "World"
};

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GameReducer, initialState);
    return (
        <GameContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GameContext.Provider>
    )
}

export default GameContext;