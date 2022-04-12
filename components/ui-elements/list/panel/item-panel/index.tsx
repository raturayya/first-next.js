import Link from 'next/link';

const ItemPanel = ({ ...props }) => {
  return (
    <Link href={props.routeTo} scroll={false} passHref>
      <div className={`list--panel-item ${props.selected == props.id ? 'active' : ''}`}>
        <div>
          <p className="font-semibold">{props.name}</p>
          <small className="font-medium">{props.description}</small>
        </div>
        <i className={`${props.selected === props.id ? 'clr-primary' : 'clr-light'}`}>
          arrow_forward
        </i>
      </div>
    </Link>
  );
};

export default ItemPanel;
