// Create a React function component named File1 that receives two props, productName and 
// price. The component should display the product name and price. Additionally, add a button 
// labeled "Add to cart" to the component. When the button is clicked onClick event triggered and 
// an alert should be displayed with the message "Your Product is Added to cart!".

import File1 from "./PB319-1";
function PB319(){
    const product={
        productName:"Mobile",
        price:15000
    }
    return(
        <File1 productName={product.productName} price={product.price}></File1>
    )
}
export default PB319;