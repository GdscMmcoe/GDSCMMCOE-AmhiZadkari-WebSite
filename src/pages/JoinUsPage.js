import { useState } from "react";

export default function JoinUs() {
    const [contactInfo, setContactInfo] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });


    const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
    };

    function onContactFormSubmit(form) {
        form.preventDefault()
        console.log(contactInfo)
    }

    return (
        <div className="py-24">
            <p className="w-full flex flex-row justify-center text-4xl">
                WANT TO <span className="text-green-600">&nbsp;CONTRIBUTE?</span>
            </p>

            <div className="mt-8 flex flex-col">
                <p className="px-8 text-xl self-center py-2">Send us a message!</p>
                <form className="join-form" onSubmit={onContactFormSubmit}>
                    <div className="flex flex-col md:flex-row items-center justify-center">
                        <input type="text" name="name" placeholder="Name" required className="border h-10 w-11/12 md:w-64 mx-4 my-4 px-2 rounded-md border-gray-600" value={contactInfo.name} onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email" required className="border h-10 w-11/12 md:w-64 mx-4 my-4 px-2 rounded-md border-gray-600" value={contactInfo.email} onChange={handleChange} />
                        <input type="tel" name="phone" placeholder="Phone" required className="border h-10 w-11/12 md:w-64 mx-4 my-4 px-2 rounded-md border-gray-600" value={contactInfo.phonenumber} onChange={handleChange} />
                    </div>
                    <div className="flex justify-center">
                        <textarea placeholder="Message" name="message" required className="w-11/12 mt-4 h-32 p-2 md:w-[830px] border border-gray-600" value={contactInfo.message} onChange={handleChange} />
                    </div>
                    <div className="flex justify-center w-full mt-8">
                        <input type="submit" value="Done" className="border px-10 py-2 bg-green-600 text-white text-lg" />
                    </div>
                </form>

            </div>
        </div>

    );
}
