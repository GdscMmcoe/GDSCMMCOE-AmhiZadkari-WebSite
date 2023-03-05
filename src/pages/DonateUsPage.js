import QR from '../assets/images/QR.jpeg'



export default function Donate() {
    return (
        <>
            <div className="py-24 flex w-full flex-col items-center justify-center">
                <p className='text-2xl'>DONATE <span className='text-green-600'>US</span></p>
                <div className='flex flex-row w-full mt-24 items-center'>
                    <div className='w-full flex flex-col '>
                        <img src={QR} className="w-96" />
                        <button className='rounded-md bg-green-600 w-24 mr-8 h-8 self-center text-white'><a href='upi://pay?pa=705802010010305@UBIN0570583.ifsc.npci&pn=AMHI%20ZADKARI%20FOUNDATION&cu=INR&tr=ACCOUNT_BASED_QRCODE&sign=MEQCIA0HM0tCzAh2q77cUvXT+mSd6lPBRwrJeN8kUbVxlU+OAiADOXEvNNZVeMFG0NS+4Ehc272tj3Ifqxm3temLK9I8Bw=='>DONATE</a></button>
                    </div>
                    <div className='w-full flex justify-center text-justify text-2xl px-16'>
                        <p>Instead of spending on birthday parties and wasting your hard earned money on cakes and blowing candles… Donate for this noble cause with each donation you are helping the nature and the people that keep it clean!</p>
                    </div>
                </div>
            </div>
        </>
    );
}
