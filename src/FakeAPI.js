const books=[
    {id:1,title:"book 1",description:'description for book 1'},
    {id:2,title:"book 2",description:'description for book 2'},
    {id:3,title:"book 3",description:'description for book 3'}

]

const DELAY=2000
const fakeAPI={
    fetchBooks:()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(books)
            },DELAY)
        })
    },
    addBook:({id,title,description})=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                books.push({id,title,description})
                resolve("done")
            },DELAY)
        })
    }
}

export default fakeAPI;