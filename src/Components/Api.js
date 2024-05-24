export default class Api{
    api="https://fakestoreapi.com";


 getPrducts = async ()=>{
        return(
            fetch(this.api + '/products')
            .then(resp => resp.json())
            .then(json => {return json})
        )
    }

    getProductById = async (id)=>{
        return(
            
            fetch(this.api + `/products/${id}`)
            .then(resp => resp.json())
            .then(json => {return json})

        )
    }
}