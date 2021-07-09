import { useEffect, useState } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import callApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom"


function ProductListPage(props) {

  //truyen tu redux
  // var { products } = props;

  //api
  //state neu ko dung ásyn
  const [products, setProducts] = useState([]);

  //đc gọi sau khi component render lần đầu tiên : đimount  do ko doongf bộ , lúc reder ra ko có
  useEffect(() => {
    callApi('products', 'GET', null).then(res => {
      setProducts(res.data)
    })
  }, [])

  // Hàm xóa product truyền vào cho ProductItem
  const onDeleteProduct = (id) => {
    callApi(`products/${id}`, 'DELETE', null).then(res => {
      // đã xóa treen server, chỉ cần xóa lại trong mảng
      if(res.status===200){//ok
        let index =findIndex(products,id);
        if(index!==-1){
          products.splice(index,1);
          setProducts([...products])
        }
      }
    })
  }

  //Hàm findIndex theo id
  const findIndex=(products,id) => {
    var results =-1;
    products.forEach((product,index) =>{
      if(product.id === id){
        results = index;
      }
    })
    return results
  }

  // Hàm show danh sách sản phẩm
  const showProducts = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onReceiveDeleteProduct ={onDeleteProduct}
          />
        )
      })
    }
    return result;
  }


  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <Link to="/product/add" className="btn btn-info mb-10">
        Thêm Sản Phẩm
      </Link>
      <ProductList>
        {showProducts(products)}
      </ProductList>
    </div>
  );

  
}

const mapStatetoProps = state => {
  return {
    products: state.products
  }
}

export default connect(mapStatetoProps, null)(ProductListPage);
