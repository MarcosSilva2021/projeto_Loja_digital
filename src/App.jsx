import Paths from "./Routes/Paths";
import GlobalStyles from "./styles/GlobalStyles";
import { AuthContext } from "./contexts/AuthContext";

import "primereact/resources/themes/lara-light-pink/theme.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";


const App = () => {

  return (
    <> 
      <GlobalStyles />
      <AuthContext>     
        <Paths />
      </AuthContext>      
    </>
  );
}
export default App;

