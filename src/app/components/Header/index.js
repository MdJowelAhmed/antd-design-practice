import { Menu } from "antd";

function AppHeader() {
  return (
    <div className="appHeader">
      <Menu 
      mode="horizontal"
      items={[
        {
            label: "Home",
            key:"home"
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
                    key:"drbagsss",
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