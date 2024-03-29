import { useTagsFetchParamsContext } from '../../context/TagsContext';

const OrderButton = () => {
  const { order, setOrderParam } = useTagsFetchParamsContext();

  const changeOrder = () =>
    setOrderParam((prev) => {
      if (prev === 'desc') return 'asc';
      return 'desc';
    });

  return <button onClick={changeOrder}>change order {order}</button>;
};

export default OrderButton;
