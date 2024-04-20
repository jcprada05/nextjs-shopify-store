interface CategoryProps {
  params: {
    category: string;
  };
}

export default function Category(props: CategoryProps) {
  console.log(props.params.category);
  const { category } = props.params;
  return <h1>Categoría Dinámica: {category}</h1>;
}
