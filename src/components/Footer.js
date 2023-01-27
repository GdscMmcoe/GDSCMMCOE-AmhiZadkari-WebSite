export default function Footer() {
    return (
        <>
            <div className="Footer flex flex-row place-content-evenly bg-green-400">
                <div className="col-1 flex flex-col">
                    <div className="ph flex flex-row py-8">
                        <img src="" alt="phone icon" className="mx-4"></img>
                        <p>12312313231231</p>
                    </div>
                    <div className="addr flex flex-row py-8">
                        <img src="" alt="addr icon" className="mx-4"></img>
                        <p>city,state,country,planet</p>
                    </div>
                    <div className="email flex flex-row py-8">
                        <img src="" alt="email icon" className="mx-4"></img>
                        <p>example@123.com</p>
                    </div>
                </div>
                <div className="col-2 flex flex-col">
                    <div className="mission flex flex-row py-8">
                        <p className="mission ">Our Mission</p>
                        <br />
                        <p className="mission ">mission.exe</p>
                    </div>
                    <div className="vision flex flex-row py-8">
                        <p className="vision">vision.mp3</p>
                        <br />
                        <p className="vision">vision.mp3</p>
                    </div>
                </div>
            </div>
        </>
    );
}
