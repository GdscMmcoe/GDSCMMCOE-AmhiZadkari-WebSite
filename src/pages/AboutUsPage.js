import treehand from '../assets/images/treehand.png';



export default function AboutUs() {
    return (
        <>
            <div className="pt-16 w-full flex flex-col">

                <div className="flex w-full lg:w-2/3 flex-row justify-end pt-8 py-4 my-4 self-center md:self-start">
                    <div className="w-full md:w-2/3 md:border-4 md:rounded-r-[4rem] px-8 ">
                        <p className="text-2xl font-medium flex md:justify-start justify-center pt-4">
                            What is Zadkari?
                        </p>
                        <p className="py-4 ">
                            AmhiZadkari is a government-registered NGO that focuses mostly on tree conservation and plantation. Our main goal is to locate uninhabited areas where large, traditional, jungle-like trees can grow in order to compensate for the natural environment's ongoing loss of forest cover. At this stage, we look at plantations on numerous locations around Maharashtra. We also offer a variety of tree-related events, such as gatherings to collect seeds, spread awareness, and more.
                            The AmhiZadkari community is made up of like-minded, nature-loving folks who have teamed together to work towards the plantation revolution. The organisation is entirely run by volunteers, and all of the participants are extremely focused and self-motivated, ensuring that passion never dries up, as our plants never dry up.
                        </p>
                    </div>
                    <div className='w-1/3 self-center pl-4 md:flex hidden justify-end'>
                        <img src={treehand} className="w-64 h-64" />
                    </div>
                </div>

                <div className="flex lg:w-2/3 w-full flex-row justify-end  pt-4 py-4 my-4 self-center md:self-end">
                    <div className='w-1/3 self-center pr-4 md:flex hidden justify-start'>
                        <img src={treehand} className="w-64 h-64" />
                    </div>
                    <div className='w-full md:w-2/3 md:border-4 md:rounded-l-[4rem] px-8'>
                        <p className="text-2xl font-medium pt-4 flex md:justify-start justify-center">
                            How Zadkari came to existence?
                        </p>
                        <p className="py-4 ">
                            The current environmental challenges are where it all begins. Sea level rise, harsh weather conditions, and a decline in biodiversity are all being brought on by the rising global temperatures brought on by greenhouse gas emissions.
                            The loss of forests is the most significant of all. The destruction of forests for cattle, development, and agriculture is a factor in the decline of biodiversity and habitats. Our goal at Zadkari is to stop deforestation and climate change in their tracks and reverse their impacts.
                        </p>
                    </div>
                </div>

                <div className="flex lg:w-2/3 flex-row justify-end pt-4 py-4 my-4  self-center md:self-start">
                    <div className='w-full md:w-2/3  md:border-4 md:rounded-r-[4rem] px-8'>
                        <p className="text-2xl font-medium flex md:justify-start justify-center">
                            Our motto
                        </p>
                        <p className="py-4 ">
                            We at Zadkari focus mostly on tree plantations and all associated responsibilities.
                            The main concept of this organisation is to prevent the issues caused by deforestation by coming together and nurturing our Mother Nature.
                            We take efforts in promoting afforestation and also encourage people to join us. Our team is mostly made up of volunteers who are passionate about saving the earth from adverse effects of problems that we humans have created.
                            Not merely this. This is simply one part of how we work. We also engage in several public activities, the primary goal of which is to raise public awareness of our work, its effects, and consequences, and eventually connect this incredible revolution with an increasing number of individuals.
                        </p>
                    </div>
                    <div className='w-1/3 self-center pl-4 md:flex hidden justify-end'>
                        <img src={treehand} className="w-64 h-64" />
                    </div>
                </div>

                <div className="flex md:flex-row flex-col w-full text-justify pt-32">
                    <div className='w-full px-4 lg:px-32'>
                        <p className="text-2xl font-medium flex justify-center">
                            Importance of plantation
                        </p>
                        <p className="py-4 ">
                            Plantation is one of the most important ways to combat environmental issues and maintain a sustainable planet. Plantation has multiple benefits and plays a critical role in supporting the health of our environment, as well as human society.
                        </p>
                        <p className="py-4 ">
                            It helps to combat climate change by absorbing carbon dioxide from the atmosphere, which is the primary cause of global warming. Trees are essential in this regard, as they absorb and store carbon dioxide, while also producing oxygen that is vital for humans and other living organisms to survive.
                        </p>
                        <p className="py-4 ">
                            Plantation is essential for preventing soil erosion and desertification. Trees act as natural barriers against soil erosion and help to retain soil nutrients, which is critical for maintaining soil health and promoting plant growth.
                        </p>
                        It provides important habitats for wildlife, which is essential for maintaining biodiversity. As a result, planting trees and other plants in urban areas and other developed areas can help to create green spaces and provide habitats for wildlife, even in areas that have been heavily developed.
                        <p className="py-4 ">
                            Plantation can provide important economic benefits. The trees and other plants grown in plantations can be used for a variety of purposes, including the production of wood, paper, and other materials, as well as the provision of food and other agricultural products.
                        </p>
                        It provides a range of other benefits, including the provision of shade and protection from the sun, the absorption of pollutants, and the provision of natural beauty and aesthetic value.
                        <p className="py-4 ">
                            Plantation is a critical component of efforts to maintain a sustainable planet. It helps to combat climate change, prevent soil erosion, support biodiversity, provide economic benefits, and provide a range of other important benefits. By promoting and supporting plantation, we can work towards a sustainable and healthy planet for all.
                        </p>
                    </div>

                    <div className='w-full px-4 lg:px-16'>
                        <p className="text-2xl font-medium flex justify-center">
                            What kind of things we are involved in
                        </p>
                        <p className="py-4 ">
                            Our main aim being plantation, we are heavily involved in conducting plantation drives, We accept requests for plantation in schools, villages. We have also had people plant trees for their occassions such as birthday parties, weddings and much more.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
