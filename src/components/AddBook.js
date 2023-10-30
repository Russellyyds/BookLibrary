import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addBook } from '../redux/bookSlice'
const AddBook = () => {
    //获取公共状态 和派发的方法
    // const { bookList } = useSelector(state => state.book)
    const dispatch = useDispatch()
    const [title, setTitle] = useState(''); // 使用状态来存储文本输入的值
    const [description, setDescription] = useState(''); // 使用状态来存储文本输入的值
    const onSubmit = (event) => {
        event.preventDefault();
        const newBook = {
            title,
            description
        }
        dispatch(addBook({ newBook }))
        setDescription("")
        setTitle("")
    }
    return (
        <div>
            <h1>ADD BOOK</h1>
            <form onSubmit={onSubmit}>
                <input value={title} name='title' type='text' placeholder='title' required onChange={(e) => setTitle(e.target.value)}></input>
                <input value={description} name='description' required type='text' placeholder='description' onChange={(e) => setDescription(e.target.value)}></input>
                <button type='submit'>Submit</button>
            </form>

        </div>
    )
}

export default AddBook