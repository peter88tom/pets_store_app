/* @refresh reload */
import { render } from 'solid-js/web';
import  App  from "./App"

import { Router } from "@solidjs/router";
import "bootstrap/dist/css/bootstrap.min.css"

render(
	() => (
	<Router>
		<App />
	</Router>
	 ),
	document.getElementById('root')
     );
/*

1. We imported the Route compontens from solid-app-route and wrap it around the App component, then we imported the bootstrap 
   CSS  library.
*/