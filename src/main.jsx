import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Comp3 from './Comp3.jsx'
// import Comp2 from './Comp2.jsx'
// import Comp1 from './Comp1.jsx'
// import Comp4 from './Comp4.jsx'
// import Notfound from './NotFound.jsx'
// import US1 from "./US1.jsx"
// import US2 from "./US2.jsx"
// import US3 from "./US3.jsx"
// import US4 from "./US4.jsx"
// import US5 from "./US5.jsx"
// import US6 from "./US6.jsx"
// import US7 from "./US7.jsx"
import Form1 from './form1.jsx'
import Practice from './practice.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Comp1 /> */}
    {/* <Comp2 /> */}
    {/* <Comp3 /> */}
    {/* <Comp4 /> */}
    {/* <US7/> */}
    {/* <Notfound/> */}
    {/* <Form1/> */}
    <Practice/>
  </StrictMode>,
)
