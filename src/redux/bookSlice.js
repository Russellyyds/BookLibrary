import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import fakeAPI from '../FakeAPI'
export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
    try {
        const data = await fakeAPI.fetchBooks()
        console.log("ok", data)
        return data;
    } catch (error) {
        console.error(error)
        throw error

    }
})
const bookSlice = createSlice({
    name: 'books',
    initialState:{
        bookList:[]
    },
    reducers: {
        addBook: (state, action) => {
            //state:redux中的公共状态信息，基于immer库管理 ，无需自己再克隆
            //action：派发行为的对象，传递的其他信息都是以action.payload 传递进来的值
            // console.log("addddd",action.payload);
            const {newBook}= action.payload
            state.bookList.push({ id: Date.now(), ...newBook })
        },
        deleteBook: (state, action) => {
            console.log("sss",action.payload.id)
           state.bookList= state.bookList.filter((book) => book.id !== action.payload.id)
        }
    },
    /**
     * 
     * @param {*} builder 
     * 如果你要使用异步 thunk，首先需要创建一个异步 thunk，然后在 extraReducers 中添加 
     * fetchBooks.fulfilled 和 fetchBooks.rejected 来处理该异步 thunk 的成功和失败情况。
     * 这些处理程序将在异步 thunk 完成或失败时执行，以更新书籍的状态。
     */
    extraReducers: (builder) => {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
             state.bookList=action.payload
        })
            .addCase(fetchBooks.rejected, (state, action) => {
                state.bookList=[]
                console.error('fail', action.error)
            })
    }
})
//导出 slice 的 actions 和 reducer：
console.log(bookSlice);
export const { addBook, deleteBook } = bookSlice.actions;
console.log(addBook([]))
export default bookSlice.reducer;
