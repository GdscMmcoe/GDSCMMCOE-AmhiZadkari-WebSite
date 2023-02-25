export default function Footer() {
    return (
        <>
            <div className="Footer flex flex-row place-content-evenly bg-green-400">
                <div className="col-1 flex flex-col">
                    <div className="ph flex flex-row py-8">
                        <span class="material-symbols-outlined mx-4">
                            call
                        </span>
                        <p>+91number</p>
                    </div>

                    <div className="email flex flex-row py-8">
                        <span class="material-symbols-outlined mx-4">
                            mail
                        </span>
                        <p>example@123.com</p>
                    </div>
                </div>
                <div className="col-2 flex flex-col">

                </div>
            </div>
        </>
    );
}
