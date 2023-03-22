import {useState} from "react";

export default function Profile() {
    const [userData, setUserData] = useState({
        firstName: 'Test',
        lastName: 'User'
    });

    return (
        <div className={"my-5 w-full h-full"}>
            <div className={"flex justify-center"}>
                <div
                    className="block flex flex-col max-h-[400px] max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className={"flex justify-center"}>
                        <div
                            className={"flex justify-center items-center uppercase font-semibold bg-[#1976D2] w-[100px] h-[100px] rounded-2 text-white text-5xl rounded-md"}>
                            {userData.firstName[0]}
                        </div>
                    </div>

                    <div className={"my-0.5"}>
                        <p className="font-semibold text-center text-gray-700 dark:text-white">
                            {userData.firstName} {userData.lastName}
                        </p>
                    </div>

                    <div className={"my-0.5 text-center"}>
                        <button type="button"
                                className="text-white w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center ">
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

Profile.requireAuth = true