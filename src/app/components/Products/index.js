import { getAllProducts } from "@/app/API"
import { Card, Image, List } from "antd"
import { useEffect, useState } from "react"

function Products (){
const [items, setItems]=useState([])

useEffect(()=>{
    getAllProducts().then((res)=>{
        console.log(res)
        setItems(res?.products);
    });
}, []); 

console.log(items)


    return (
      <div>
        <List
        grid={{column:3}}
          dataSource={items}
          renderItem={(product, index) => (
            <Card
              title={product?.title}
              key={index}
              cover={<Image src={product?.thumbnail} alt={product?.title} />} // ✅ Image properly used
            >
              <p>{product?.description}</p>
            </Card>
          )}
        />
      </div>
    );
}

export default Products