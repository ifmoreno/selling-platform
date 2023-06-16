<script>
	import { onMount } from 'svelte';
	import { initializeApp } from '@firebase/app';
	import { getFirestore, collection, query, where, onSnapshot } from '@firebase/firestore';
	import logo from '../lib/assets/93693-moving-truck.gif';

	// Initialize Firebase
	const firebaseConfig = {
		apiKey: 'AIzaSyC8dZ3MSiC1GC7EfoKnwfijgYesjeCGAf0',
		authDomain: 'selling-platform-1a3f1.firebaseapp.com',
		projectId: 'selling-platform-1a3f1',
		storageBucket: 'selling-platform-1a3f1.appspot.com',
		messagingSenderId: '950887623231',
		appId: '1:950887623231:web:10d5e781874fc36cf3668a',
		measurementId: 'G-LZ8ET1QK2H'
	};

	const app = initializeApp(firebaseConfig);
	const db = getFirestore(app);

	/**
	 * @type {any[]}
	 */
	let products = [];
	/**
	 * @type {string[]}
	 */
	let selectedTags = [];
	/**
	 * @type {any[]}
	 */
	let tags = [];
	/**
	 * @type {any[]}
	 */
	let filteredProducts = [];

	const unsubscribeProducts = onSnapshot(
		query(collection(db, 'products'), where('active', '==', true)),
		(snapshot) => {
			products = [];
			snapshot.forEach((doc) => {
				products.push({ id: doc.id, ...doc.data() });
			});
			console.log('Current products:', products);
			filteredProducts = products.filter(filterProducts);
		}
	);

	const unsubscribeTags = onSnapshot(collection(db, 'tags'), (snapshot) => {
		tags = [];
		snapshot.forEach((doc) => {
			tags.push(doc.data().tagname);
		});
		console.log('Current tags:', tags);
	});

	onMount(() => {
		// Unsubscribe from the snapshot listeners when the component is unmounted
		return () => {
			unsubscribeProducts();
			unsubscribeTags();
		};
	});

	const toggleTag = (/** @type {string} */ tag) => {
		if (selectedTags.includes(tag)) {
			selectedTags = selectedTags.filter((t) => t !== tag);
		} else {
			selectedTags = [tag];
		}

		if (tag == '') {
			selectedTags = [];
		}

		console.log('Selected tags:', selectedTags);
		filteredProducts = products.filter(filterProducts);
	};

	const filterProducts = (/** @type {{ tags: string | any[]; }} */ product) => {
		if (selectedTags.length === 0) {
			return true;
		}
		return (
			selectedTags.includes('') ||
			selectedTags.some((tag) => Array.isArray(product.tags) && product.tags.includes(tag))
		);
	};
</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />

<svelte:head>
    <title>Productos de Cata & Iván</title>
</svelte:head>

<div class="container">
	<div class="header">
		<h1 class="title">Productos de Cata & Iván</h1>
	</div>
	{#if products.length > 0}
		<div class="description">
			<p>¡Bienvenidos a nuestra página de venta!</p>
			<p>
				Estamos emocionados porque nos vamos de viaje y necesitamos vender los artículos de nuestra
				casa. <br />
				En esta página encontrarás una selección de productos cuidadosamente elegidos que están disponibles
				para la venta. <br />
				¡Explora nuestra colección de productos y encuentra grandes ofertas mientras nos ayudas a preparanos
				para nuestra aventura!
				<br /><br />
				<img src={logo} alt="logo" style="width: 100px" /><br /><br />
				<em>
					Si estás interesado en algún producto, puedes comunicarte al número 3175135763 o dar click
					<a
						href="https://api.whatsapp.com/send?phone=573175135763"
						target="_blank"
						rel="noopener noreferrer">aquí</a
					>
					para enviar un mensaje por WhatsApp.
				</em>
			</p>
		</div>
		<div class="tags">
			<button class:selected={selectedTags.length === 0} on:click={() => toggleTag('')}>
				Todos
			</button>
			{#each tags as tag}
				<button class:selected={selectedTags.includes(tag)} on:click={() => toggleTag(tag)}>
					{tag}
				</button>
			{/each}
		</div>
		{#if filteredProducts.length > 0}
			<div class="card-container">
				{#each filteredProducts as product}
					<div class="card">
						<img src={product.photo} alt={product.title} class="card-image" />
						<div class="card-content">
							<h2 class="card-title">{product.title}</h2>
							<p class="card-price">${product.price}</p>
							<p class="card-description">{product.description}</p>
							<div class="tags" style="margin-top: 5%;">
								{#each product.tags as tag}
									<span class:selected={selectedTags.includes(tag)}>{tag}</span>
								{/each}
							</div>
						</div>
					</div>
				{/each}
			</div>
		{:else}
			<p style="text-align: center; font-size: 18px;">
				¡No se encontraron productos con los filtros seleccionados!
			</p>
		{/if}
	{:else}
		<p style="text-align: center; font-size: 18px;">¡Ya vendimos todos los productos!</p>
	{/if}
</div>

<style>
	.container {
		font-family: 'Roboto', sans-serif;
		max-width: 80%;
		margin: 0 auto;
		padding: 20px;
	}

	.header {
		text-align: center;
		margin-bottom: 20px;
	}

	.title {
		font-size: 36px;
		font-weight: bold;
		color: #091540;
	}

	.tags {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
		margin-bottom: 20px;
	}

	.tags button {
		font-size: 16px;
		padding: 8px 16px;
		margin-right: 8px;
		margin-bottom: 8px;
		border-radius: 4px;
		border: 1px solid #ccc;
		background-color: #fff;
		cursor: pointer;
		transition: background-color 0.3s;
	}

	.tags button:hover {
		background-color: #f0f0f0;
	}

	.tags button.selected {
		background-color: #dcdbdb;
	}

	.tags span {
		font-size: 14px;
		padding: 4px 8px;
		margin-right: 4px;
		margin-bottom: 8px;
		border-radius: 4px;
		background-color: #f0f0f0;
		transition: background-color 0.3s;
	}

	.tags span:hover {
		background-color: #f7f7f7;
	}

	.tags span.selected {
		background-color: #e4e4e4;
	}

	.description {
		font-size: 16px;
		padding: 0 10%;
		text-align: center;
		margin-bottom: 5%;
	}

	.card-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-gap: 20px;
	}

	.card {
		background-color: #ffffff;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 16px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
	}

	.card-image {
		width: 100%;
		height: auto;
		border-radius: 8px;
		margin-bottom: 16px;
	}

	.card-title {
		font-size: 20px;
		font-weight: bold;
		margin-bottom: 8px;
	}

	.card-price {
		font-size: 18px;
		font-weight: bold;
		color: #232323;
		margin-bottom: 8px;
	}

	.card-description {
		font-size: 16px;
		color: #555555;
		margin-bottom: 8px;
	}
</style>
