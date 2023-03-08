import { useContext } from "react";
import Quiz from "../Components/Quiz";




const QuizPersonalDataContext = React.createContext();

export function useQuizPersonalData(){
    return useContext(QuizPersonalDataContext);
}

export function QuizPersonalDataProvider({children}){

    
}