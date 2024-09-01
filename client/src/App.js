import Text from "./Components/Text";
import Submissions from "./Components/Submissions";
import { Route, Routes} from 'react-router-dom';
function App ()
{
    return (
        <>
            <Routes>
                <Route path ="/"  element={<Text/>} />
                <Route path ="/submissions"  element={<Submissions/>} />
            </Routes> 
        </>
    );
}

export default App;