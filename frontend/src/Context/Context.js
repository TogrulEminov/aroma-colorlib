import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios"
export const mainContext = createContext(null)

function Context({ children }) {
    const [data, setData] = useState([])
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState("")
    const [sorted, setSorted] = useState({ sorted: "price", reversed: false })
    const [state, setState] = useState({
        name: "",
        markName: "",
        price: "",
        url: ""
    })

    const url = `http://localhost:8080/product${search}`

    const getData = async () => {
        const response = await axios.get(url)
        setData(response.data)
    }

    const delData = (id) => {
        axios.delete(`http://localhost:8080/product${search}/${id}`)
    }

    const postData = () => {
        if (!state.name || !state.markName || !state.price || !state.url) return
        axios.post("http://localhost:8080/product", state)
        setState({
            name: "",
            markName: "",
            price: "",
            url: ""
        })
    }

    const changeInput = (e) => {
        setState({
            ...state, [e.target.name]: e.target.value
        })
    }
    useEffect(() => {
        getData()
    }, [])


    // sorted by price
    const sortByPrice = () => {
        setSorted({ sorted: "price", reversed: !sorted.reversed });
        const datacopy = [...data]
        datacopy.sort((a, b) => {
            if (sorted.reversed) {
                return a.price - b.price
            }
            return b.price - a.price
        });
        setData(datacopy)
    }

    const Values = {
        data, open, setOpen, setData, search, setSearch, state, setState, delData, postData, changeInput,
        sortByPrice
    }

    return (
        <mainContext.Provider value={Values}>
            {children}
        </mainContext.Provider>
    )
}
export default Context