import { Route, Routes } from "react-router-dom";
import NotFound from "./containers/NotFound.tsx";
import Home from "./containers/Home.tsx";
import Login from "./containers/Login.tsx";
import Signup from "./containers/Signup.tsx";
import NewNote from "./containers/NewNote.tsx";
import Notes from "./containers/Notes.tsx";
import AuthenticatedRoute from "./components/AuthenticatedRoute.tsx";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute.tsx";

export default function Links() {
  return (
    <Routes>
         {/* hatalı istekleri yakala */}
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound />} />;

    <Route
  path="/login"
  element={
    <UnauthenticatedRoute>
      <Login />
    </UnauthenticatedRoute>
  }
/>
<Route
  path="/signup"
  element={
    <UnauthenticatedRoute>
      <Signup />
    </UnauthenticatedRoute>
  }
/>
<Route
  path="/notes/new"
  element={
    <AuthenticatedRoute>
      <NewNote />
    </AuthenticatedRoute>
  }
/>

<Route
  path="/notes/:id"
  element={
    <AuthenticatedRoute>
      <Notes />
    </AuthenticatedRoute>
  }
/>


    </Routes>
  );
}