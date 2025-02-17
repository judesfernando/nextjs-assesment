"use client"
import { useRouter } from 'next/navigation'
import React, { FormEvent } from 'react'

const SearchInput: React.FC = () => {
    const router = useRouter()
    const [query, setQuery] = React.useState("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (query){
            router.push(`search?q=${query}`)
        }
    }
    return (
        <form className="join" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full join-item"
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-accent join-item text-white">Search</button>
        </form>
    )
}

export default SearchInput