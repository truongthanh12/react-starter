import { memo, useEffect, useState } from "react";
import { useAppSelector } from "../../state/hooks";
import fetchProducts from "../../api/fetchProducts";

const Home = () => {
  const [products, setProducts] = useState<any>();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user?.username) {
      const fetchData = async () => {
        const { data } = await fetchProducts();
        setProducts(data);
      };

      fetchData();
    }
  }, [user?.username]);

  if (!user?.username) {
    return null;
  }

  return (
    <div className="px-8 lg:px-20 grid grid-col-2 md:grid-col-4 space-y-2">
      {products?.products?.map((item: { title: string }) => (
        <div key={item.title}>{item.title}</div>
      ))}
    </div>
  );
};

export default memo(Home);
