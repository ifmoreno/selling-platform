import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

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

// Get a reference to the Firestore database
const db = getFirestore(app);

// Handle form submission
var documentForm = document.getElementById('documentForm');
documentForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    // Get form values
    var active = document.getElementById('active').checked;
    var description = document.getElementById('description').value;
    var photo = document.getElementById('photo').value;
    var price = document.getElementById('price').value;
    var tagsInput = document.getElementById('tags').value;
    var title = document.getElementById('title').value;

    // Split the tags string into an array
    var tags = tagsInput.trim().split(/\s*,\s*/);

    // Create a new document object
    var newDocument = {
        active: active,
        description: description,
        photo: photo,
        price: price,
        tags: tags,
        title: title
    };
    console.log('hola')

    try {
        // Add the new document to the "products" collection
        const docRef = await addDoc(collection(db, 'products'), newDocument);
        console.log('Document written with ID:', docRef.id);

        // Reset the form
        documentForm.reset();
    } catch (error) {
        console.error('Error adding document:', error);
    }
});
