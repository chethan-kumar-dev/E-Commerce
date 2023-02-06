import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  productsList:[],
  productsInCart:[],
  productLoadStatus:true
}

export const fetchProducts = createAsyncThunk(
  null,
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products")
    return response.data
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart:(state,action)=>{
        state.productsInCart=[...state.productsInCart,{...action.payload,count:1,actualPrice:action.payload.price}]
        let setItemToAddedToCart=state.productsList.filter((value)=>{
          return value.id===action.payload.id
        })

        let x = state.productsList.filter((value)=>{
          return value.id===action.payload.id
        })
        setItemToAddedToCart[0].addedToCart=true
        x[0].addedToCart=true
    },

    increment:(state,action)=>{
      //console.log("action payload",action.payload)
      let tempProdList=[...state.productsInCart]
      let currentProd=tempProdList.filter((value)=>{
        return value.id===action.payload.id
      }) 
      currentProd[0].count=currentProd[0].count+1
      currentProd[0].price=currentProd[0].actualPrice*currentProd[0].count
    },
    decrement:(state,action)=>{
      let tempProdList=[...state.productsInCart]
      let currentProd=tempProdList.filter((value)=>{
        return value.id===action.payload.id
      }) 
      if(currentProd[0].count==1){
        let tempProdList = [...state.productsInCart]
        let filteredProd=tempProdList.filter((value)=>{
          return value.id!==action.payload.id
      })
      state.productsInCart=filteredProd
      let y=[...state.productsList]
      let z = y.filter((value)=>{
        return value.id===action.payload.id
      })
      z[0].addedToCart=false
      return
      }
      currentProd[0].count=currentProd[0].count-1
      currentProd[0].price=currentProd[0].price-currentProd[0].actualPrice
    },
    removeItem:(state,action)=>{

      let tempProdList = [...state.productsInCart]
      let filteredProd=tempProdList.filter((value)=>{
        return value.id!==action.payload
      })
      state.productsInCart=filteredProd


      let y=[...state.productsList]
      let z = y.filter((value)=>{
        return value.id===action.payload
      })
      z[0].addedToCart=false
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{

      console.log("fetch called again")
      console.log(state.productsList)
      const tempArray=[]
      
      for(let ele of action.payload){
        tempArray.push({...ele,addedToCart:false})
      }
      
      state.productsList=tempArray
      console.log("tempArrya")
      console.log(tempArray)
      
      console.log("state")
      console.log(state.productsList)
    })
  }
})

// Action creators are generated for each case reducer function
export const { addToCart  , increment , decrement , removeItem  } = productSlice.actions

export default productSlice.reducer