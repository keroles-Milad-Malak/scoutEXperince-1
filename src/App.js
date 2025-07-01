
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Slider from './components/slider';
import Home from './components/home';
import Teachers from './components/teachers';
import Eduction from './components/eduction';
import EductionScout from "./components/edduction_scout"; // راعي تغيير الاسم
import LessonDetails from './components/lessonDetalis';
import AddLesson from './components/addLesson';
import ScoutAll from './components/scoutAll';
import LeaderAttendance from './components/leaderAttendence';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Slider />
            <Home />
          </>
        } />

        <Route path='/teachers' element={<Teachers />} />
        <Route path='/eduction' element={<Eduction />} />
        <Route path="/eduction/scout" element={<EductionScout />} />
        <Route path="/eduction/lesson/:id" element={<LessonDetails />} />
        <Route path="/eduction/scout/add" element={<AddLesson />} />
        < Route path='/scoutAll' element={<ScoutAll />} />
        <Route path='/leader' element={<LeaderAttendance />} />
      </Routes>
    </>
  );
}

export default App;
