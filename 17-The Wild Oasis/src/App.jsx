
import { BrowserRouter, Navigate,  Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import Dashboard from './pages/Dashboard'
import PageNotFound from './pages/PageNotFound'
import Account from './pages/Account'
import Booking from './pages/Bookings'
import Cabin from './pages/Cabins'
import Login from './pages/Login'
import User from './pages/Users'
import Setting from './pages/Settings'
import GlobalStyle from "./styles/GlobalStyle"
import StyleApp from "./ui/StyledApp"
import AppLayout from "./ui/AppLayout"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Toaster } from "react-hot-toast"



const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      // staleTime:60 *1000
      staleTime:0
    }
  }
 })

function App() {

  return (
  <>
  
    <QueryClientProvider client={queryClient}>
       <ReactQueryDevtools initialIsOpen={false} />
  
    <GlobalStyle/>
    <StyleApp>
    <BrowserRouter>
    <Routes>
    <Route element={<AppLayout/>}>
        <Route index  element={<Navigate replace to="/dashboard"/>}/>
        <Route path="dashboard" element={<Dashboard/>}/>
        <Route path="/account" element={<Account/>}/>
        <Route path="/booking" element={<Booking/>}/>  
        <Route path="/cabins" element={<Cabin/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/users" element={<User/>}/>
    </Route>
   
        <Route path="/login" element={<Login/>}/>
    <Route path="*" element={<PageNotFound/>}/>
   </Routes>
   </BrowserRouter>
   </StyleApp>

   <Toaster
  position="top-right"
  gutter={8}
  toasterId="default"
  toastOptions={{
    success: {
      duration: 3000,      
    },
    error:{
       duration:5000,     
    
      },
     
    Style:{
      fontSize:"30px",
      padding:"10px",
      backgroundColor: 'var(--color-grey-500)'

      }
  }}
/>

   </QueryClientProvider>
 
      
         </>
  )
}

export default App
