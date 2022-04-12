import ItemPanel from '../item-panel';

const ListPanel = ({ ...props }) => {
  const menus = [
    {
      id: 1,
      name: 'Top up',
      description: 'Upload your receipt',
      routeTo: '/brand/' + props.clientCode + '/topup'
    },
    {
      id: 2,
      name: 'History',
      description: 'See your history top up and point',
      routeTo: '/brand/' + props.clientCode + '/history'
    },
    {
      id: 3,
      name: 'Point Info',
      description: 'Point value on each product',
      routeTo: '/brand/' + props.clientCode + '/point-info'
    }
  ];

  return (
    <div className="list--panel space-y-2">
      {menus.map((item: any, i: number) => (
        <ItemPanel {...item} {...props} key={i} />
      ))}
    </div>
  );
};

export default ListPanel;
