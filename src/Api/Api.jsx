import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Api = () => {

    const [api, setApi] = useState(
        "https://jsonplaceholder.typicode.com/posts"
    )

    const [data, setData] = useState([])

    // Form states
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")

    // GET Method
    const getData = async () => {
        try {
            const response = await axios.get(api)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    // POST Method
    const postData = async (e) => {
        e.preventDefault()

        try {
            const response = await axios.post(api, {
                title: title,
                body: body,
                userId: 1
            })

            console.log("POST Response:", response.data)

            // Add new post to UI
            setData([response.data, ...data])

            // Clear form
            setTitle("")
            setBody("")

            alert("Post created successfully!")
        } catch (error) {
            console.log(error)
        }
    }

    // DELETE Method
    const deleteData = async (id) => {
        try {
            await axios.delete(`${api}/${id}`)

            // Remove post from UI
            setData(data.filter((item) => item.id !== id))

            alert("Post deleted successfully!")
        } catch (error) {
            console.log(error)
        }
    }

    // Fetch data when component loads
    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="container mt-4">

            <h2 className="mb-3">Create New Post</h2>

            {/* POST Form */}
            <form onSubmit={postData} className="mb-4">

                <div className="mb-3">
                    <label className="form-label">
                        Title
                    </label>

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">
                        Body
                    </label>

                    <textarea
                        className="form-control"
                        placeholder="Enter body"
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-success"
                >
                    Submit Post
                </button>

            </form>

            <hr />

            <h2 className="mb-3">All Posts</h2>

            <div className="row">
                {data.map((item) => (
                    <div className="col-md-4" key={item.id}>

                        <div className="card m-2">
                            <div className="card-body">

                                <h5 className="card-title">
                                    {item.title.slice(0, 25)}
                                </h5>

                                <p className="card-text">
                                    {item.body.slice(0, 100)}
                                </p>

                                <div className="btn btn-primary me-2">
                                    {item.id}
                                </div>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => deleteData(item.id)}
                                >
                                    Delete
                                </button>

                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default Api