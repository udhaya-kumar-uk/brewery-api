const container=document.getElementById("container")
let brewery=[]
const url="https://api.openbrewerydb.org/breweries"

async function fetchdata(){
const responce=await fetch(url)
const data=await responce.json()
brewery.push(data)
render(data)
}
fetchdata()

console.log(brewery)


 function render(data=[]){
 let datas=[]
 for(let i=0;i<=data.length;i++){
 console.log(data[i])
 datas.push(card(data[i]))
 }
 container.innerHTML=""
 container.append(...datas)
 }



 function handle(target){
 const value=target.value
 let searchmatch=brewery.filter((e,i)=> {return e.name.toLowerCase().includes(value)})
   render(searchmatch)
 }
 

 function card(data={}){
 const card=document.createElement("div")
 card.setAttribute("class","card")
 const heading=document.createElement("h3")
 const states=document.createElement("p")
 const websites=document.createElement("p")
 const type=document.createElement("p")
 const countrys=document.createElement("p")
 const create=document.createElement("p")
 const citys=document.createElement("p")
 const ids=document.createElement("P")
 const codes=document.createElement("p")
 
 
 const{name="",state="",website_url="",brewery_type="",country="",created_at="",city="",id="",postal_code=""}=data
 heading.innerText="company:"+name
 states.innerText="state:"+state
 websites.innerText="website:"+website_url
 type.innerText="brewery_type:"+"  "+brewery_type
 countrys.innerText="country:"+country
 create.innerText="create_at:"+created_at
 citys.innerText="city:"+city
 ids.innerText="Id:"+id
 codes.innerText="postal_code:"+postal_code
 card.append(heading,states,websites,type,countrys,create,citys,ids,codes)
 
 return card
 
 }
// return card
 
 
 