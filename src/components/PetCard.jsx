// PetCard component

const PetCard = ({pet}) => {
	return (

	<div class="col-md-4">
      		<div class="card" style="width: 18rem;">
			<img src="http://pets-images.dev-apis.com/pets/dog25.jpg" class="card-img-top" alt="{pet.name}" />
			<div class="card-body">
			<h5 class="card-title">{pet.name}</h5>
			<p class="card-text">{pet.description}</p>
			
			</div>
		</div>
   	</div>
		
	);
}

export default PetCard;