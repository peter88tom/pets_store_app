// Header component
import { For } from "solid-js";
import { pets } from "../App";
import PetCard from "./PetCard";

const Header = () =>{
	return (
		<div>
			<h2>List of Awesome Pets</h2>
			<div class="row">
				<For each={ pets() }>
					{(pet => <PetCard pet={pet} /> )}
				</For>
			</div>
		</div>
	)
	
}

export default Header;


/*
 1. We imported the pets state from the App component and loop throug the array with For template helper and render
    the PetCard component with each item from the pets array.

    The PetCard components takes takes a prop of item as pet
*/