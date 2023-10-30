import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchBooks,deleteBook } from '../redux/bookSlice'
const BookList = () => {
    const {bookList} = useSelector(state => state.book)
    const dispatch = useDispatch()
    console.log(bookList)
    useEffect(() => {
        dispatch(fetchBooks())
    }, [dispatch])
    const handleClick=(id)=>{
        console.log(id);
        dispatch(deleteBook({id}))
    }
    return (
        <div>
            <h3>BookList</h3>

            {bookList && bookList.length > 0
                ?
                <ul>{bookList.map((book, i) =>
                (
                        <li key={`${i}-${book.id}`}>{book.title}--{book.description}<button onClick={()=>handleClick(book.id)}>Delete</button></li>      
                ))}

                </ul>
                :

                null}
        </div>
    )
}

export default BookList