/*
type User = {
  name: string;
  age: number;
  email: string;
}

const partialUser: Partial<User> = {
  name: "John",
}
*/

/*
type User = {
  name: string;
  age: number;
  email: string;
};

const partialUser: Partial<User> = {
  name: "John",
};

if (partialUser.age !== undefined) {
  // safe to use partialUser.age
  partialUser.age += 1;
}

type ApiConfig = {
  page: number;
  pageSize: number;
  sort: "asc" | "desc";
};

const defaultConfig: ApiConfig = {
  page: 1,
  pageSize: 10,
  sort: "asc",
};

async function fetchUsers(config: Partial<ApiConfig> = {}): Promise<void> {
  const finalConfig = { ...defaultConfig, ...config };

  const response = await fetch(
    `/api/users?page=${finalConfig.page}&pageSize=${finalConfig.pageSize}&sort=${finalConfig.sort}`
  );
  const data = await response.json();

  console.log(data);
}

// Fetch users with default config
fetchUsers();

// Fetch users with custom config
fetchUsers({ page: 2, sort: "desc" });
*/

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

const products: Product[] = [
  {
    id: 0,
    name: "Sample Product",
    price: 49.99,
    description: "A sample product for demonstration",
  },
];

type UpdateableProductFields = Partial<Omit<Product, "id">>;

function updateProduct(
  productId: number,
  updatedValues: UpdateableProductFields
): void {
  let product: Product | undefined = products.find(item => item.id === productId);
  if (product) {
    products[product.id] = { ...product, ...updatedValues };
  } else {
    console.log("Product not found");
  }
}

updateProduct(0, {
  name: "Updated Product Name",
  price: 99.99,
})