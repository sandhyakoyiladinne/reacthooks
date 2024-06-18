import { useRef } from "react";


const UserefComponent = () => {
    const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef= useRef();

  const handleSubmit = () => {
    console.log(nameInputRef.current.value, "<===NAME input field se");
    console.log(emailInputRef.current.value, "<===EMAIL input field se");
    console.log(passwordInputRef.current.value, "<===EMAIL input field se");
  };

    return (

        <div>
            <h2>UserefComponent</h2>
            <div>
                <label htmlFor="name">Name :</label>
                <input
                    type="text"
                    id="name"
                    ref={nameInputRef}
                />
            </div>
            <div>
                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    id="email"
                    ref={emailInputRef}
                />
            </div>
            <div>
                <label htmlFor="password">Password :</label>
                <input
                    type="password"
                    id="password"
                    ref={passwordInputRef}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )
}

export default UserefComponent