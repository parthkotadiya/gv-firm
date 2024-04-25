import LoginPage from "./Component/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./Dashboard/Dashboard";
import Team from "./Team Member/Team";
import MainDashboard from "./Component/MainDashboard";
import MainNotepad from "./Notepad/MainNotepad"
import AddNewClints from "./Client/Clientform";
import Taskmain from "./TaskMain/Taskpage"
import Cases from "./Cases/Allcases"
import ViewClientData from "./Client/Clientviewdata";
import Clienteditdata from "./Client/Clieneditdata";
import PdfClientData from "./Client/PdfClientDowloads";
import AlltodoTask from "./TaskMain/TaskAlltodo";
import Status from "./Team Member/Status";
import AllRunningcases from "./Cases/AllRunningCase";
import AllClosecase from "./Cases/AllCloseCase";
import MyCaseDairy from "./My Case Diary/MyCaseDairy";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exect path='/' element={<LoginPage />} />
          <Route exect path='/Dashboard' element={<DashBoard />} />
          <Route exect path="/MainDashboard" element={<MainDashboard />} />
          <Route exect path='/Team' element={<Team />} />
          <Route exect path='/Notepad' element={<MainNotepad />} />
          <Route exect path='/AddNewClient' element={<AddNewClints />} />
          <Route exect path='/Taskmain' element={<Taskmain />} />
          <Route exect path='/AllCases' element={<Cases />} />
          <Route exect path='/ViewClient' element={<ViewClientData />} />
          <Route exect path='/ClientEditMain/:id' element={<Clienteditdata   />} />
          <Route exect path='/PdfClient/:id' element={<PdfClientData />} />
          <Route exect path='/Alltodo' element={<AlltodoTask />} />
          <Route exect path='/Status/:id' element={<Status />} />
          <Route exect path='/RunningCases' element={<AllRunningcases />} />
          <Route exect path='/AllCloseCase' element={<AllClosecase />} />
          <Route exect path='/MyCaseDairy' element={<MyCaseDairy />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App