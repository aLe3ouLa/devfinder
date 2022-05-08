const SearchBox = ({ onHandleChange, onHandleSubmit }) => {

    return <>
        <input onChange={onHandleChange} placeholder="Search GitHub username..." />
        <button onClick={onHandleSubmit} >Search</button>
    </>
}

export default SearchBox;