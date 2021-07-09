// import ProductItem from "./../ProductItem/ProductItem";

function ProductList(props) {
  return (
    <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
              </div>
              <div className="panel-body">

                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Mã SP</th>
                      <th>Tên</th>
                      <th>Giá</th>
                      <th>Trạng Thái</th>
                      <th>Hanhg Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* ProductItem */}
                   {props.children}
                  </tbody>
                </table>

              </div>
            </div>

  );
}

export default ProductList;
