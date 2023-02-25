import React from "react";
import Nav from "../components/Nav";
import Auth from "../components/Auth";
import Create from "../components/Admin/Create";

import { useEffect } from "react";
import { supabase } from "../supabaseClient";

function Admin() {

  useEffect(() => {
    supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session);
      if (session === null) {
        <Auth />
      }
    });
  }, []);

	return (
		<>
			<Nav />
			<Create />
		</>
	);
}

export default Admin;
