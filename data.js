const products = [
      {
        "id": 1,
        "title": "Black Framed Sunglasses",
        "price": 49.95,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis arcu, vel placerat turpis. Nunc eget est id nulla aliquet varius. Pellentesque condimentum.",
        "categories": ["accessories"],
        "image": "https://images.unsplash.com/photo-1584036553516-bf83210aa16c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3680&q=80"
      },
      {
        "id": 2,
        "title": "Space Grey Watch",
        "price": 29.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis arcu, vel placerat turpis. Nunc eget est id nulla aliquet varius. Pellentesque condimentum.",
        "categories": ["accessories"],
        "image": "https://images.unsplash.com/photo-1549482199-bc1ca6f58502?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
      },
      {
        "id": 3,
        "title": "XSquare Pad",
        "price": 39.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis arcu, vel placerat turpis. Nunc eget est id nulla aliquet varius. Pellentesque condimentum.",
        "categories": ["accessories"],
        "image": "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3687&q=80"
      },
      {
        "id": 4,
        "title": "Bea Headphones",
        "price": 49.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis arcu, vel placerat turpis. Nunc eget est id nulla aliquet varius. Pellentesque condimentum.",
        "categories": ["shoes", "mens"],
        "image": "https://images.unsplash.com/photo-1545127398-14699f92334b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
      },
      {
        "id": 5,
        "title": "Fitness Watch",
        "price": 129.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis arcu, vel placerat turpis. Nunc eget est id nulla aliquet varius. Pellentesque condimentum.",
        "categories": ["accessories", "tech"],
        "image": "https://images.unsplash.com/photo-1555487505-8603a1a69755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
      },
      {
        "id": 6,
        "title": "Lumix Camera",
        "price": 299.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis arcu, vel placerat turpis. Nunc eget est id nulla aliquet varius. Pellentesque condimentum.",
        "categories": ["tech"],
        "image": "https://images.unsplash.com/photo-1585459733256-a22e2b5eecf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=994&q=80"
      },
      {
        "id": 7,
        "title": "Nikon Camera",
        "price": 279.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis arcu, vel placerat turpis. Nunc eget est id nulla aliquet varius. Pellentesque condimentum.",
        "categories": ["tech"],
        "image": "https://images.unsplash.com/photo-1564466809058-bf4114d55352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80"
      },
      {
        "id": 8,
        "title": "AirPods",
        "price": 99.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis arcu, vel placerat turpis. Nunc eget est id nulla aliquet varius. Pellentesque condimentum.",
        "categories": ["accessories", "tech"],
        "image": "https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
      },
      {
        "id": 9,
        "title": "Silver Iphone",
        "price": 499.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis arcu, vel placerat turpis. Nunc eget est id nulla aliquet varius. Pellentesque condimentum.",
        "categories": ["accessories"],
        "image": "https://images.unsplash.com/photo-1555375771-14b2a63968a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80"
      },
      {
        "id": 10,
        "title": "Smart Watch",
        "price": 99.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis arcu, vel placerat turpis. Nunc eget est id nulla aliquet varius. Pellentesque condimentum.",
        "categories": ["accessories", "tech"],
        "image": "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
      },
      {
        "id": 11,
        "title": "Soni Headphones",
        "price": 49.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis arcu, vel placerat turpis. Nunc eget est id nulla aliquet varius. Pellentesque condimentum.",
        "categories": ["accessories"],
        "image": "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=984&q=80"
      },
      {
        "id": 12,
        "title": "Azon Alexis",
        "price": 29.99,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut sagittis arcu, vel placerat turpis. Nunc eget est id nulla aliquet varius. Pellentesque condimentum.",
        "categories": ["tech"],
        "image": "https://images.unsplash.com/photo-1543512214-318c7553f230?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
      }
    ]

    module.exports = { products }