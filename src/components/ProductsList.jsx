import {useEffect,useState} from 'react'
import { useNavigate } from 'react-router';

export default function ProductsList() {
 let [products,setProducts]=useState([]);
 let[loading,setLoading]=useState(false)
 let[error,setError]=useState(null)
const [category, setCategory] = useState("");
 const navigate=useNavigate()

//navigate to product component
const gotoProduct=(productObj)=>{
    //navigate logic
    //while navigating, transfer product object too
    navigate('/product',{state:{product:productObj}})

}
useEffect(()=>{
      
        async function getProducts(){
              setLoading(true);
            try{
                let res=await fetch("https://fakestoreapi.com/products")
            if(res.status===200){
                //extract json data
                let productsData=await res.json()
                //update state
                setProducts(productsData)
            }
            else{
throw new Error("failed to fetch")
            }
        }catch(err){
            setError(err)
        }
        finally{
            setLoading(false);
        }

        }
        getProducts()
    },[])
 
if(loading===true){
    return <p className='text-center text-2xl text-blue-300'>Loading</p>
}
if(error!==null){
    return <p className='text-center text-2xl text-red-300'>{error.message}</p>
}
const filtered = products.filter(
  (productObj) => category === "" || productObj.category === category
);

  return (
  
    <div  className= ' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  text-center gap-12 mt-10 justify-center'>

         <div className="col-span-full text-center mb-6">
      <input
     
        type="text"
        placeholder='Search your category'
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 rounded w-1/2"    
      />
       
    </div>
            {
            filtered.map((productObj)=>(
                 <div onClick={()=>gotoProduct(productObj)}  key={productObj.id} className='border-2 grid grid-cols-3'>

                   
                <img src={productObj.image} alt="" className='h-44  shadow-md  cursor-pointer rounded-2xl object-contain block mx-auto mb-10' />
                <p>{productObj.title}</p>
                 </div>
       )) }
       
    </div>
  )
}