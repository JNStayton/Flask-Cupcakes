let $container = $('#cupcakes-container');

showCupcakes();

// data-id $(this).data('id')

// $('#').click(function(){
//     alert('You clicked!')
// })

function makeCupcakeHTML(cupcake) {
	return `
        <div class="card m-1 col-md-4">
            <img src="${cupcake.image}" class="card-img-top" style="max-height: 15rem; object-fit: cover;"alt="A picture of a cupcake">
            <div class="card-body">
                <h5 class="card-title">${cupcake.flavor.toUpperCase()}</h5>
                <p class="card-text"><b>Rating:</b> ${cupcake.rating}</p>
                <p class="card-text"><b>Size:</b> ${cupcake.size}</p>
                <button data-id=${cupcake.id} class="btn btn-danger delete">Delete Cupcake</button>
            </div>
        </div>
`;
}

async function showCupcakes() {
	let resp = await axios.get('/api/cupcakes');
	let cupcakes = resp.data.cupcakes;
	for (let cupcake of cupcakes) {
		$container.append(makeCupcakeHTML(cupcake));
	}
}

$('#new-cupcake').on('submit', async function(evt) {
	evt.preventDefault();
	let flavor = $('#flavor').val();
	let size = $('#size').val();
	let rating = $('#rating').val();
	let image = $('#image').val();

	const newCupcake = await axios.post('/api/cupcakes', {
		flavor,
		size,
		rating,
		image
	});

	$container.append(makeCupcakeHTML(newCupcake.data.cupcake));

	$('#new-cupcake').each(function() {
		this.reset();
	});
});

async function deleteCupcake() {
	let cupcakeID = $(this).data('id');
	await axios.delete(`/api/cupcakes/${cupcakeID}`);
	$(this).parent().parent().remove();
}

$container.on('click', '.delete', deleteCupcake);
