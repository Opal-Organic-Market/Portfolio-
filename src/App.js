import './App.css';
import './index.css'
import { BrowserRouter,Route,Routes } from  'react-router-dom';
import Homepage from './pages/homepage';
import About from './pages/about';
import Achievements from './pages/achievements';
import Contact from './pages/contact';
import Experience from './pages/experience';
import Posts from './pages/posts';
import Skills from './pages/skills';
import Project from './pages/project';
import Adminpage from './pages/admin';
import AddAchievementForm from './forms/AddAchievementForm';
import AddExperienceForm from './forms/AddExperienceForm';
import AddProjectForm from './forms/AddProjectForm';
import AddSkillsForm from './forms/AddSkillsForm';
import AddPostForm from './forms/AddPostForm';
function App() {
  return (
    <>
<BrowserRouter>
<Routes>

<Route path='/' element={<Homepage/>} ></Route>
<Route path='/aboutpage' element={<About/>}></Route>
<Route path='/achievementpage' element={<Achievements/>}></Route>
<Route path='/contactpage' element={<Contact/>}></Route>
<Route path='/experiencepage' element={<Experience/>}></Route>
<Route path='/postspage' element={<Posts/>}></Route>
<Route path='/skillspage' element={<Skills/>}></Route>
<Route path='/projectsspage' element={<Project/>}></Route>
<Route path='/adminpage' element={<Adminpage/>}></Route>
<Route path='/add-achievement' element={<AddAchievementForm/>}></Route>
<Route path='/add-experience' element={<AddExperienceForm/>}></Route>
<Route path='/add-project' element={<AddProjectForm/>}></Route>
<Route path='/add-skills' element={<AddSkillsForm/>}></Route>
<Route path='/add-post' element={<AddPostForm/>}></Route>





</Routes>
</BrowserRouter>
    </>
  );
}

export default App;
