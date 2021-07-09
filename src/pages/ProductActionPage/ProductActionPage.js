import { useState, useEffect } from 'react';
import callApi from './../../utils/apiCaller';
import { Link } from 'react-router-dom'

function ProductActionPage(props) {

  const [product, setProduct] = useState({
    id: "",
    txtName: '',
    txtPrice: '',
    chkbStatus: '',
  })

  // neeus ko didmount thì sẽ ko sửa đc giá trị do on Change thay dổi thì nó lại gọi lại
  useEffect(() => {
    if (props.match) {
      let id = props.match.params.id;
      callApi(`products/${id}`, 'GET', null).then(res => {
        let data = res.data;
        setProduct({
          id: data.id,
          txtName: data.name,
          txtPrice: data.price,
          chkbStatus: data.status,
        })
      })
    }

  }, [])

  // Hàm onChange product
  const onChangeProduct = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    setProduct({ ...product, [name]: value });

  }

  // Hàm onSubmit form product
  const onSaveProduct = (e) => {
    e.preventDefault();

    if (product.id) {//update product
      callApi(`products/${product.id}`, "PUT", {
        name: product.txtName,
        price: product.txtPrice,
        status: product.chkbStatus === true ? true : false,
      }).then(res => {
        //router
        props.history.goBack();
      })
    } else {
      callApi('products', "POST", {
        name: product.txtName,
        price: product.txtPrice,
        status: product.chkbStatus === true ? true : false,
      }).then(res => {
        //router
        props.history.goBack();
      })
    }
  }



  return (
    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <form onSubmit={onSaveProduct}>

        <div className="form-group">
          <label>Tên Sản Phẩm:</label>
          <input
            type="text"
            className="form-control"
            name="txtName"
            value={product.txtName}
            onChange={onChangeProduct}
          />
        </div>

        <div className="form-group">
          <label>Giá:</label>
          <input
            type="text"
            className="form-control"
            name="txtPrice"
            value={product.txtPrice}
            onChange={onChangeProduct}
          />
        </div>

        <div className="form-group">
          <label>Trạng Thái:</label>
        </div>

        <div className="checkbox">
          <label>
            <input
              type="checkbox"
              name="chkbStatus"
              value={product.chkbStatus}
              onChange={onChangeProduct}
              checked={product.chkbStatus}
            />
            Còn Hàng
          </label>
        </div>
        <Link to="/product-list" className="btn btn-danger mr-10">
          Trở Lại
        </Link>
        <button type="submit" className="btn btn-primary">Lưu Lại</button>
      </form>

    </div>
  );
}

export default ProductActionPage;
