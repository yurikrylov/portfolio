import Projects from "../Pages/Projects";
import Tasks from "../Pages/Tasks";

export const routes =[
  {path: '/Projects', component: Projects, exact: true},
  {path: '/Projects/:id', component: Tasks, exact: true}
]