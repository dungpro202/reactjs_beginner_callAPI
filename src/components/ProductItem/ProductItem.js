import {Link} from 'react-router-dom'

//cha nó là ProductList nhung lấy giá trị truyền vào từ ProductListPage qua props.chilren
function ProductItem(props) {


  var { product, index } = props;
  var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
  var statusClass = product.status ? 'warning' : 'default';

  //Hàm xóa sản phẩm khi click vào Xóa
  const onDeleteProduct = (id) => {
    if (confirm('Bạn chắc chắn muốn xóa?')) { //eslint-disable-line
      props.onReceiveDeleteProduct(id);
    }
  }

  


  return (
    <tr>
      <td>{index + 1}</td>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <span className={`label label-${statusClass}`}>
          {statusName}
        </span>
      </td>
      <td>
        <Link
          to={`/product/${product.id}/edit`}
          className="btn btn-success mr-10"
        >
          Sửa
        </Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDeleteProduct(product.id)}
        >
          Xóa
        </button>
      </td>
    </tr>

  );
}

export default ProductItem;
