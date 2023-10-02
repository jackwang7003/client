
export const fetchAllUsers = async () => {
  const response = await fetch('https://fakestoreapi.com/users');
  const data = await response.json();
  return data;
};

export const fetchUser = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/users/${id}`);
    const data = await response.json();
    return data;
}


export const fetchAllProducts = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
}

export const fetchProduct = async (id) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data = await response.json();
  return data;
}

export const addProduct = async (product) => {
    const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
    }

export const deleteProduct = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
    }

export const updateProduct = async (id, product) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    });
    const data = await response.json();
    return data;
    }

export const deleteUser = async (id) => {
    const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
        method: 'DELETE',
    });
    const data = await response.json();
    return data;
    }

export const updateUser = async (id, user) => {
    const response = await fetch(`https://fakestoreapi.com/users/${id}`, {
        method: 'PUT',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
    });
    const data = await response.json();
    return data;
    }

export const fetchCategories = async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories');
    const data = await response.json();
    return data;
}

   