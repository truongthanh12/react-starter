import { useEffect, useState } from "react";
import { useAppSelector } from "../../state/hooks";
import useProductsFetch from "../../api/useProductsFetch";

const Home = () => {
  const { user } = useAppSelector((state) => state.auth);

  if (!user?.username) {
    return null;
  }

  const [products, setProducts] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await useProductsFetch();
        setProducts(data);
      } catch (error) {
        throw error;
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-8 lg:px-20 grid grid-col-2 md:grid-col-4 space-y-2">
      {products?.products?.map((item: { title: string }) => (
        <div key={item.title}>{item.title}</div>
      ))}
    </div>
  );
};

export { Home };
