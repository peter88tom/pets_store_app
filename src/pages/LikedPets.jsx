// LikedPets component
import { createSignal, For } from 'solid-js';
import PetCard from '../components/PetCard';


const  [cutePets, setCutePets] = createSignal([]);

const LikedPets = () => {
	return (
		<div>
			<For each={cutePets()}>
				{pet => <PetCard pet={pet} />}
			</For>
		</div>
	);
}
export {cutePets, setCutePets}
export default LikedPets;

/*
1. We are using Signal to create an Array of cute pets. Then we loop through
 the array of cutePets and render the PetCard component for each item in the array.

2. We export the functions to use it in other components.
*/