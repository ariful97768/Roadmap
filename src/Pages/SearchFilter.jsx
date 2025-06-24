const SearchFilter = ({ data, setData, originalData }) => {
    const handleSearch = (e) => {
        e.preventDefault();
        const searchTerm = e.target.search.value.toLowerCase();
        const filteredData = originalData.filter(item =>
            item.title.toLowerCase().includes(searchTerm) ||
            item.description.toLowerCase().includes(searchTerm)
        );
        setData(filteredData);
        e.target.reset();
    }
    const handleFilter = (e) => {
        const filterValue = e.target.value;
        let sortedData = [...data];
        if (filterValue === 'recent') {
            sortedData.sort((a, b) => new Date(b.postedTime) - new Date(a.postedTime));
        } else if (filterValue === 'popular') {
            sortedData.sort((a, b) => b.upvotes - a.upvotes);
        } else if (filterValue === 'oldest') {
            sortedData.sort((a, b) => new Date(a.postedTime) - new Date(b.postedTime));
        }
        setData(sortedData);
    }
    return (
        <div>
            {/* Sorting and filtering options */}
            <div className='flex mx-3 justify-between'>
                <form onSubmit={handleSearch} className='flex gap-3 items-center'>
                    <input className='border w-xs px-3 py-2 rounded-lg' placeholder='Search by keywords' type="text" name="search" id="search" />
                    <button type='submit' className='bg-yellow-400 cursor-pointer px-5 py-2 rounded-lg active:scale-95 transition duration-200 ease-in-out'>Search</button>
                </form>
                <select onChange={handleFilter} className='outline-none border rounded-lg px-3 py-2' defaultValue={'none'} name="filter" id="filter">
                    <option value="none" disabled>Filter by method</option>
                    <option value="recent">Recent</option>
                    <option value="popular">Popular</option>
                    <option value="oldest">Oldest</option>
                </select>
                  <button onClick={()=>setData(originalData)} className="cursor-pointer text-black border  px-5 py-2 rounded-lg active:scale-95 transition duration-200 ease-in-out">Clear Filter</button>
            </div>
        </div>
    );
};

export default SearchFilter;