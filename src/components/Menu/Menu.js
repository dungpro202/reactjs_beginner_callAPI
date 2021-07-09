import { Route, Link } from 'react-router-dom'


//custom-link
const menus = [
  {
    name: 'Trang Chủ',
    to: '/',
    exact: true,
  },
  {
    name: 'Quản Lý Sản Phẩm',
    to: '/product-list',
    exact: false,
  }
]

//custom-link
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      // 
      children={({ match }) => {
        var active = match ? 'active' : '';
        return (
          <li className={active}>
            <Link to={to}  >
              {label}
            </Link>
          </li>
        );
      }}
    />
  )
}

function Menu() {


  const showMenus =(menus)=>{
    var result =null;
    if(menus.length >0){
      result=menus.map((menu,index)=>{
        return(
          <MenuLink
            key={index}
            label={menu.name}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  }

  return (
    <div className="navbar navbar-default">
      <a className="navbar-brand">Call Api</a>
      <ul className="nav navbar-nav">
        {showMenus(menus)}
      </ul>
    </div>
  );
}

export default Menu;
