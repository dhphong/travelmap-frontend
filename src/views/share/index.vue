<template>
    <div class="app-container">
        <h1>Share</h1>
        <div class="list-services-result">
            <el-card v-for="res in searchData" :key="res.name">
                <div :style="{display: 'flex', flexDirection: 'row', alignItems: 'center'}">
                    <div style="width: 70%">
                        <div style="font-size: 18px; font-weight: 500; margin-bottom: 5px">{{res.name}}</div>
                        <div class="blog-info"> {{res.writer}}</div>
                    </div>

                    <div>
                        <div class="blog-info" style="font-size: 16px">{{res.location}}</div>
                        <div class="blog-info"> {{res.date}}</div>
                    </div>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Share',
        data: () => {
            return {
                searchKeyword: '',
                type: '',
                sortOrders: '',
                searchData: [
                    {
                        name: 'Mountains views and tunnels',
                        date: 'November 15th 2019',
                        writer: 'Karen Mills',
                        location: 'Switzerland',
                        content: 'On our conquest to visit every country (Europe for now!) Italy looks to close for us not to visit. The Dolomites look in touching distance and its the right direction to get us enroute to Liechtenstein. So off we go to our trusty campsite book to find one open, with a heated pool available we enjoy three relaxing days with one foray on a walk which again gives us some great views over to the Dolomites. Even if it does nearly kill us on the upward hill climb!\n' +
                            'But the need to keep moving sets us off to Vaduz, the capital of Liechtenstein. Our home for the night is a car park with views up to Vaduz Castle and the official residence of the Prince of Liechtenstein. Now, if you are like us your knowledge of this principality is zilch, a visit to the Museum is the best place to start and a great little museum it was to. Whilst I am sure you would all love to know the finite detail, suffice to say it is a country that has been created by wealth rather than battle. It\'s still known for its many private banks, and for being one\n' +
                            'of only two doubly landlocked countries! (Can you name the other !?!?) Our trip there is brief but an enjoyable one, but our eyes on our next stop Switzerland.\n' +
                            'Trying to find a, won’t say cheap, but economical place to stay in Switzerland is well shall we say challenging. But we strike gold when we find a roadside car park for 7 euros, for three nights right on the bank of Lake Lucerne, at Weggis. We are here a because it looks nice and mainly because we need good weather for our next stop. We have a Lake to look out of the window, there are walking paths nearby, and Lucerne is a ferry ride away. The weather is changeable but we decide having already walked around some of the Lake we’ll take the Ferry to Lucerne, well ouch! €73 for an ½ hr ride that hurt!\n' +
                            'Lucerne itself is an interesting, compact city, it’s two most visited places are The Chapel Bridge, a covered wooden footbridge spanning the River Reuse, named after the nearby St Peter’s Chapel, the bridge is unique in containing a number of interior paintings dating back to the 17th century, sadly along side\n' +
                            'some of the bridge a fire destroyed many of them.\n' +
                            'A beautiful surprise is The Lion of Lucerne, this was created in 1820/1 and commemorates the Swiss Guards whom were massacred in 1792 during the French Revolution, when revolutionaries stormed The Tulleries Palace in Paris. Mark Twain praised the sculpture of a mortally wounded lion as “the most mournful and moving piece of stone in the world” well it moved me to tears.\n' +
                            'With good weather predicted we make our way to the mountain town of Grindelwald and a small campsite nestling under the Eiger. Not that we could see the mountain when we arrived as there was a blanket of cloud down. We wait patiently as the beauty that surround this valley reveals itself. The afternoon is sat with eyes agog at what is in front of us, binoculars peer at mountain tops and we follow the many that descend from their dizzying heights either by parachute, foot or gondola. Tomorrow we will enjoy it for ourselves.\n' +
                            'So if Austria does hills then Switzerland has the mother of all hills or should I say Mountains and one in particular, Jungfrau. We are toying on whether should\n' +
                            'go for it, it would be magnificent standing on the top of Europe and at 4,158m it is as high as you can go with little ,or very little effort! Why well a train or several trains transport you from a variety of starting points. The train itself takes 2.5hrs each way, but for us there is a but, aside from the £420 cost! (Oh yeah don\'t come to Switzerland unless you have a healthy bank account!?!) we have our four legged friend to consider. Leaving her in Harvey all day is out and after considerable thought we decide that it won’t be practicable keeping her entertained on a 5hr train journey and then subjecting her to a two hour walk at that altitude. Anyway we plan next time (if there is a next time!) to take the helicopter up and train it back down, for only an additional £300 bargain!\n' +
                            'There is however a way we can get some altitude and some great views of both Jungfrau and the Eiger. That is to take the cable car to First at 2,168m and from there there are different walking options. So on the first bus from the campsite we\n' +
                            'head up the Cable Car at 8am, luckily for us we share it with a girl who gives us great route tips and that sets the walking routes for the day. We add an additional 400m climb in the most gloriously sunny day imaginable, tomorrow the lift will close until the ski season and we consider ourselves very lucky to have had the opportunity to walk, sit, watch royal eagles, and embrace the beauty of this landscape. As we all know the pictures don\'t do it justice, and the Jungfrau trip would have been an experience but wouldn’t have touched our soul in the way this day did.\n' +
                            'After all the walking and climbing there is really only one thing left to do in Switzerland for us and that is to take to some of its Thermal Waters, at Leukerbad. We just have to make a decision whether to drive some more mountain roads or take a train, easy answer, let the train take the strain. So we head to the station at Kandersteg and join the Lotschberg Tunnnel Train and after a relaxed 15min journey (despite the 75mm clearance as we boarded the train!!) deposit us 14.6km the\n' +
                            'The train to the other sideThe train to the other side\n' +
                            'The train to the other side\n' +
                            'other side of the Eiger. Our longest tunnel of many in Switzerland.\n' +
                            'Another, thankfulky short, twisting pass takes us uphill to the site of the Thermal Spa surrounded by majestic mountains. It is the best resting place we can think of to remember our time in Switzerland. The weather better than expected, as expensive as predicted, but as we leave Switzerland we know we will be back to explore more of this beautiful country.\n' +
                            'P.S The answer to the above is Uzbekistan!\n'
                    },
                    {
                        name: 'Romantic Getaway',
                        date: 'April 12th 2017',
                        writer: 'Alan Atkinson',
                        location: 'England',
                        content: 'Our first Valentines together and I buy my girlfriend, Fiona, a 2 night hotel stay on Buyagift.co.uk for a romantic getaway where you can select a hotel of your choice in many counties all over the UK. Picking where to stay wasn\'t too difficult and we decide on Ironbridge in Shropshire as our destination because neither of us have been there before and seems an interesting area to visit due to it\'s strong connection with the Victorian era.\n' +
                            'Shropshire is a county in England but it borders with Wales. Although known as one of England\'s quietest counties there still seems to be plenty to do and see with many historic houses, castles, museums and of course the famous Iron bridge.\n' +
                            'After a 2 hour car journey from Berkshire, we arrive at our hotel in Ironbridge. We are super excited at spending some quality time together and the opportunity of exploring a new place. After checking in, we decide to take a stroll into the centre of Ironbridge.\n' +
                            'The walk very pleasant as we scroll along the River Severn, which is Britain\'s longest river. In the distance we can see the famous Iron bridge as we decide to visit \n' +
                            'the Museum of the Gorge. We discover for £25 you can buy an annual passport which allows you to visit all museums and attractions in Ironbridge for a whole year. We learn that the industrial revolution first started here. The great Quaker Ironmaster, Abraham Darby I, discovered the secret to smelting iron with cheap and plentiful coke instead of expensive and less efficient charcoal. The museum also houses fine china, decorative tiles and Victorian artefacts.\n' +
                            'Afterwards we carry on strolling along the River Severn and up to the famous Iron bridge. This is the world\'s first iron bridge and was erected over the river in 1779 and marked a turning point in English design and engineering as cast iron came to be widely used for constructing bridges and buildings. I enjoy taking photos of the bridge from different angles whilst admiring the picturesque, calming views while trying to imagine how busy it would have been back in 1779 when the river was used for transporting iron as well as other goods.\n' +
                            'The next day we visit Blists Hill Victorian Town, which is a recreated Victorian town and is included in the annual passport. The Victorian era is most \n' +
                            'arguably Britain\'s most powerful eras at a time when Britain pretty much ruled the world. Blists Hill Victorian Town takes you back to that era where people act as real Victorians in authentic shops, factories and homes. We even manage to exchange today\'s money for coins from the Victorian era, which you can use anywhere in the Victorian town.\n' +
                            'In the Victorian era there was a shop for everything, not like in today\'s world were supermarkets pretty much sell anything you need. We think about where we will spend our money with my eyes wondering towards the sweet shop, but the queue is rather off putting, so we visit all other shops with the plan to spend any leftover change at the sweet shop.\n' +
                            'We enjoy visiting each shop, but the sweet smell of freshly baked bread really excites us. We buy some Cinnamon Rolls and they taste delicious. You can\'t beat freshly baked bread or cakes!!\n' +
                            'The Victorian town literally has everything here from shops to factories, horse and cart to steam trains or houses to a school. The school is quite an experience though with our teacher being very strict. Visitors can visit the school \n' +
                            'for a real-life classroom experience. Once we enter the classroom, the first thing the teacher does is check our finger nails. Fiona gets told off for wearing nail polish. The teacher has a cane stick and is not afraid to wave it in the direction of his students; back in the Victoria era, children would frequently be hit or beaten by this stick. We get to experience how children would study using a small chalkboard and chalk and we have to sing songs, including "God save the Queen" not the current Queen Elizabeth II, but Queen Victoria of course.\n' +
                            'There really is so much to see and do here and we particularly enjoy visiting houses where people re-enact how the Victorians would live in their homes. The people are friendly and very good at acting the part. One family even offer us some Nettle Soup.\n' +
                            'After our visit at Blists Hill Victorian Town, we detour and visit Buildwas Abbey. The remains of a Cistercian Abbey (Understand this is a Catholic religious order of monks and nuns who branched off and followed rule of St. Benedict) which has an impressive and unaltered 12th century church. I enjoy taking photos \n' +
                            'of old buildings as I feel broken remains or leftover ruins can add real character to a picture and it tells a story.\n' +
                            'We then decide to detour slightly further away from Ironbridge and head down to Much Wenlock. Off the beaten track, but worth a visit to this beautiful medieval town. Much Wenlock has been a market town for over 700 years and the architecture is of Georgian and Victorian. We head to Wenlock Priory and I get trigger happy with my camera at this picturesque setting of the priory ruins.\n' +
                            'An Anglo-Saxon monastery was founded here in about 680 by King Merewalh of Mercia. His daughter, Milburge, was hailed a saint and her relics were miraculously re-discovered in 1101, which resulted in attracting both pilgrims and the prosperity of the priory.Wenlock was re-founded by the Normans as a priory for monks and its impressive remains still survive today and parts of the 13th century church still stand relatively high.\n' +
                            'Evening time, we head out for a date night in Ironbridge and dine in at a nearby pub called the Swan Hotel which is not far from our hotel. We have nachos to share which are \n' +
                            'served in one of them metal camping cooking tins and for main we both go for a dirty burger with sweet potato fries. Afterwards, we stroll up to the Iron Bridge and enjoy seeing it lit up and find a quirky cocktail bar called Cleo\'s offering 2 for 1.\n' +
                            'It\'s our last day in Ironbridge and so we check out of the hotel and get the car loaded with our baggage but we\'re in no rush to head straight home and want to take advantage of the annual passport that allows us to see many museums/attractions nearby. Taking the car we decide to visit the Coalport China Museum first.\n' +
                            'Coalport China Museum was a famous factory until it closed back in the 1920\'s and is well preserved and built along side the River Severn and an old canal which makes it rather picturesque. The factory has so much beautiful china on display; in fact the china was even made for Queen Victoria, so definitely fit for a queen. The Victorians loved their tea and even to this day we Brits love tea but back in the Victorian era they were very fond of having good quality and beautiful \n' +
                            'china cups and teapots.\n' +
                            'Nearby to the Coalport China Museum is the Tar Tunnel and is just a short walk along the old canal. Annoyingly the Tar Tunnel is closed due to health and safety reasons but the shop is still open and they let us see the entrance to the tunnel.\n' +
                            'Next we visit the Jackfield Tile Museum which is a short drive but on the over side of the river. This tile museum was at its best between 1840 and 1960. This place stopped manufacturing tiles because Craven Dunnill decided to move their business up north but the same company started to make them again here from 2001, with the Ironbridge Gorge Museum owning the factory.\n' +
                            'There are so many tiles to look at with so much attention to detail. The tiles have been used for many locations, most famously the London Underground.\n' +
                            'Before we leave to go home we stop off one last time in the centre of Ironbridge for a cream tea at Tea Emporium.'
                    },
                    {
                        name: 'Biking in Algonquin Park',
                        date: 'August 23rd 2019',
                        writer: 'Ursa Major',
                        location: 'Canada',
                        content: 'There are many hiking trails in Algonquin Park. Some of them are also good for cycling.\n' +
                            'The “Old Railway Bike Trail" runs from Lake of Two Rivers store to Rock Lake Campground\n' +
                            'The distance is 13.75 km one way.\n' +
                            'At Lake of Two Rivers store, bicycles can be rented.\n' +
                            'The trail follows Whitefish Lake most of the way\n' +
                            'Bathrooms can be found at Lake of Two Rivers and at Rock Lake campground\n' +
                            'The Trail is mostly hard-packed dirt with some areas fairly rough with loose gravel, rocks and tree roots.\n' +
                            'The trail is flat\n' +
                            'A street bike would be okay but hybrid tires better and mountain bike tires even better.\n' +
                            'This is a nice scenic trail and generally fairly busy. Be prepared for a rough ride because even\n' +
                            'though this is called a "railway trail" it is NOT like most "rail trails"\n' +
                            'More photos below ...\n' +
                            '\n'
                    }
                ]
            }
        }
    }
</script>

<style>
    .list-services-result .el-card.is-always-shadow {
        width: 100%;
        min-width: 250px;
        min-height: 80px;
        margin-top: 20px;
        /*margin:  5px 200px 0 200px ;*/
    }
</style>

<style scoped>
    .blog-info {
        font-size: 14px;
        color: #5a5e66;
        margin-top: 5px
    }

    .list-services-result {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .app-container {
        width: 60%;
        margin-right: auto;
        margin-left: auto;
    }

</style>
