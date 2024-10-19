// Cache DOM elements
const output = document.querySelector('#output');
const button = document.querySelector('#get-posts-btn');
const addPostForm = document.querySelector('.add-post-form');

// Helper function to create a post element
function createPostElement(post) {
    const postEl = document.createElement('div');
    postEl.textContent = post.title;
    return postEl;
}

// Get and display posts
async function showPosts(e) {
    if (e) e.preventDefault();

    try {
        const response = await fetch('http://localhost:8000/api/posts');
        if (!response.ok) throw new Error("Failed to fetch posts");

        const posts = await response.json();
        output.innerHTML = ''; // Clear existing posts

        posts.forEach((post) => {
            output.appendChild(createPostElement(post));
        });
        console.log(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        alert('An error occurred while fetching the posts.');
    }
}

// Submit a new post
async function addPost(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const formData = { title };

    try {
        const response = await fetch('http://localhost:8000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Failed to add post: ${response.status} ${errorText}`);
        }

        const newPost = await response.json();
        output.appendChild(createPostElement(newPost)); // Append the new post

        showPosts(); // Refresh the posts list
    } catch (error) {
        console.error('Error:', error.message);
        alert(`Error adding post: ${error.message}`);
    }
}

// Event listeners
button.addEventListener('click', showPosts);
addPostForm.addEventListener('submit', addPost);


// const output = document.querySelector('#output');
// const button = document.querySelector('#get-posts-btn');
// const addNewPost = document.querySelector('.add-post-form');

// // Get and show posts
// async function showPosts(e) {
//     if (e) {
//         e.preventDefault();
//     }
    
//     try {
//       const response = await fetch('http://localhost:8000/api/posts');
//         if(!response.ok){
//             throw new Error("Failed to fetch posts");
//         }

//       const posts = await response.json();
//       console.log(posts);
//       output.innerHTML = '';

//       posts.forEach((post) => {
//         const postEl = document.createElement('div');
//         postEl.textContent = post.title;
//         output.appendChild(postEl);
//       });
//     } catch (error) {
//       console.log('Error fetching posts:', error);
//       alert('An error occurred while fetching the posts.');
//     }
// };


// // Submit new post
// async function addPost(e) {
//     e.preventDefault();

//     const formData = {
//         title: document.getElementById('title').value,
//     };

//     const title = formData.title;

//     try {
//         const response = await fetch('http://localhost:8000/api/posts', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(formData),
//         });
    
//         if (!response.ok) {
//             const errorText = await response.text(); // Get the error message from the response
//             throw new Error(`Failed to add post: ${response.status} ${errorText}`);
//         }
    
//         const newPost = await response.json();
    
//         const postEl = document.createElement('div');
//         postEl.textContent = newPost.title;
//         document.getElementById('output').appendChild(postEl);
//         showPosts();
//     } catch (error) {
//         console.error('Error:', error.message); // Log the full error message
//         alert(`Error adding post: ${error.message}`); // Display a more detailed error
//     }
// };

// // Event listener
// button.addEventListener('click', showPosts);
// addNewPost.addEventListener('submit', addPost);


// document.getElementById('contactForm').addEventListener('submit', async function (event) {
//     event.preventDefault();

//     const formData = {
//       name: document.getElementById('name').value,
//       message: document.getElementById('message').value
//     };

//     try {
//       const response = await fetch('http://localhost:8000/api/posts', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const result = await response.json();
      
//       if (result.status === 'success') {
//         addToList(formData);
//       }

//       alert(result.message);
//     } catch (error) {
//       console.error('Error:', error);
//       alert('An error occurred while submitting the form.');
//     }
//   });

//   function addToList(data) {
//     const dataList = document.getElementById('dataList');
//     const listItem = document.createElement('li');
//     listItem.textContent = `Name: ${data.name}, Message: ${data.message}`;
//     dataList.appendChild(listItem);

//     // Optionally, reset form fields after submission
//     document.getElementById('contactForm').reset();
//   }