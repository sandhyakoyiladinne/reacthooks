import { useState } from "react"


export const MoreOptimisedForm = () => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const handleChange = (e) => (
        setUserData({...userData , [e.target.name]:e.target.value})
    )
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(userData,"<====userDAta====>")
    };
    
    return (

        <div>
            <h2>MoreOptimisedForm</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name :</label>
                    <input
                        type="text"
                        id="name"
                        name = "name"
                        value={userData.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email :</label>
                    <input
                        type="email"
                        id="email"
                        name ="email"
                        value={userData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password :</label>
                    <input
                        type="password"
                        id="password"
                        name = "password"
                        value={userData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type = "submit">Submit</button>
            </form>
        </div>
    )
}
