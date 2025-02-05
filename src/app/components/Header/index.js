import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

function AppHeader() {
const navigate=useNavigate()

const onClickMenu=(item)=>{
    navigate(`/${item.key}`)
}

  return (
    <div className="appHeader">
      <Menu 
      onClick={onClickMenu}
      mode="horizontal"
      items={[
        {
            label: "Home",
            key:""
        },
        {
            label: "Men",
            key:"men",
            children:[
                {
                    label:"Mens's Shirt",
                    key:"mens-shirt",
                },
                {
                    label:"Mens's Shoes",
                    key:"mens-shoes",
                },
                {
                    label:"Mens's Watches",
                    key:"mens-watches",
                },
            ]
        },
        {
            label: "Women",
            key:"women",
            children:[
                {
                    label:"Women's Dresses",
                    key:"dress",
                },
                {
                    label:"Women's Shoes",
                    key:"shoes",
                },
                {
                    label:"Women's Bags",
                    key:"bags",
                },
                {
                    label:"Women's Jewellery",
                    key:"jewellery",
                },
            ]
        },
        {
            label: 'Fashion',
            key:"fashion"
        },
      ]}>

      </Menu>
    </div>
  );
}

export default AppHeader