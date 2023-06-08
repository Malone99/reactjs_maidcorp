import React, {useState} from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography
} from "@material-tailwind/react";
import {Link} from "react-router-dom";

const Signup = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setemail] = useState("");

    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


    var valid;

    const [validEmail, setValidEmail] = useState(false);
    const [errorMsg, setErrorMgs] = useState("");

    // isValidName=nameRegex.test(firstName);

    console.log(firstName);

    const validate = () => {
        valid = nameRegex.test(firstName);
        valid ? setErrorMgs("") : setErrorMgs("please enter valid name");
        console.log("valid ?-->" + valid);

        const isValidSurname = nameRegex.test(lastName);
        if (lastName.length === 0 || isValidSurname) 
            setErr(true);
            else 
                setErr(false);

            }

            const post = () => {
                const registration = {
                    firstName,
                    lastName,
                    password,
                    email
                }
                fetch("http://localhost:8080/maidcorp/api/reg", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(registration)
                }).then(() => {
                    console.log("Registration Done");
                });
                console.log(registration);

            }
            // test validation
            const [err, setErr] = useState(false);
            const handleSubmit = (event) => {
                event.preventDefault();
                post();


            }


            return (<div className=" bg-indigo-900 object-cover h-full w-full grid grid-cols-1 flex-col justify-items-center mt-16 -mt-6">
                <Card className="bg-indigo-900 object-cover h-full w-full grid grid-cols-1 flex-col justify-items-center mt-16 " color="transparent"
                    shadow={false}>
                    <Typography className=" text-white flex" variant="h4" color="blue-gray">
                        Sign Up
                        <img className="h-8" src="https://img.icons8.com/ios/50/null/housekeeper-female.png" alt="logo"/>
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal  text-white">
                        Enter your details to register.
                    </Typography>
                    <form action="Summit" className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96  text-white">
                        <div className="mb-4 flex flex-col gap-6">
                            <Input type="text"
                                value={firstName}
                                className="text-white"
                                size="lg"
                                label="First Name"
                                onChange={
                                    (e) => {
                                        setFirstName(e.target.value)
                                    }
                                }/> {
                            valid && firstName.length <= 0 ? <></> : <label className="text-red-600"> {errorMsg}</label>
                        }
                            <Input className="text-white" size="lg" label="Last Name"
                                value={lastName}
                                onChange={
                                    (e) => {
                                        setLastName(e.target.value)
                                    }
                                }/> {
                            err && lastName.length <= 0 ? <label className="text-red-600">Enter Last name*</label> : ""
                        }
                            <Input className="text-white" size="lg" label="Email"
                                value={email}
                                onChange={
                                    (e) => {
                                        setemail(e.target.value)
                                    }
                                }/>
                            <Input className="text-white" type="password" size="lg" label="Password"
                                value={password}
                                onChange={
                                    (e) => {
                                        setPassword(e.target.value)
                                    }
                                }/>
                        </div>
                    <Checkbox label={
                            (<Typography variant="small" color="gray" className="flex items-center font-normal  text-white">
                                I agree the
                                <a href="https://legacy.reactjs.org/docs/getting-started.html" className="font-medium transition-colors hover:text-blue-500">
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>)
                        }
                        onClick={validate}
                        containerProps={
                            {className: "-ml-2.5 bg"}
                        }/>
                    <Button className="mt-6 bg-indigo-600  py-2 text-indigo-100 hover:bg-[#ce8fc3] hover:shadow-md duration-75" fullWidth
                        onClick={handleSubmit}>
                        Register
                    </Button>
                    <Typography color="gray" className="mt-4 text-center font-normal">
                        Already have an account?{" "}
                        <a href="#" className="font-medium text-blue-500 transition-colors hover:text-blue-700">
                            <Link to="/login">
                                Sign In</Link>
                        </a>
                    </Typography>
                </form>
            </Card>
        </div>)


        


    }

    export default Signup;
