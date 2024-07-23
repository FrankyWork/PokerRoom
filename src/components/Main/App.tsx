import './App.scss';
import {useGetHandCards} from "../../hooks/useGetHandCards";


function App() {

    const cards = useGetHandCards();

    return (
        <div>
            {cards.map(item => item + " ")}
        </div>
    );
}

export default App;
