<template>
    <div class="app-container">
        <h1 style="margin-bottom: 5px">{{blogData.name}}</h1>
        <div style="display: inline-block; margin-bottom: 5px">
            <span style="color: #5b6cff; font-weight: 600; font-family: 'Open Sans', sans-serif;">{{blogData.writer}}</span>
            <span> - </span>
            <span style="color: #ffa0b8; font-weight: 600; font-family: 'Open Sans', sans-serif;">{{blogData.location}}</span>
        </div>
        <div style="font-size: 14px; font-family: 'Open Sans', sans-serif; color: #5a5e66">{{blogData.date}}</div>
        <hr/>
        <p v-for="para in blogData.content" :key="para" class="blog-content">{{para}}</p>
    </div>
</template>

<script>
    export default {
        name: 'Blog',
        data: () => {
            return {
                blogData: {
                    name: 'Mountains views and tunnels',
                    date: 'November 15th 2019',
                    writer: 'Karen Mills',
                    location: 'Switzerland',
                    content: [
                        'On our conquest to visit every country (Europe for now!) Italy looks to close for us not to visit. The Dolomites look in touching distance and its the right direction to get us enroute to Liechtenstein. So off we go to our trusty campsite book to find one open, with a heated pool available we enjoy three relaxing days with one foray on a walk which again gives us some great views over to the Dolomites. Even if it does nearly kill us on the upward hill climb!',
                        'But the need to keep moving sets us off to Vaduz, the capital of Liechtenstein. Our home for the night is a car park with views up to Vaduz Castle and the official residence of the Prince of Liechtenstein. Now, if you are like us your knowledge of this principality is zilch, a visit to the Museum is the best place to start and a great little museum it was to. Whilst I am sure you would all love to know the finite detail, suffice to say it is a country that has been created by wealth rather than battle. It\'s still known for its many private banks, and for being one',
                        'of only two doubly landlocked countries! (Can you name the other !?!?) Our trip there is brief but an enjoyable one, but our eyes on our next stop Switzerland.',
                        'Trying to find a, won’t say cheap, but economical place to stay in Switzerland is well shall we say challenging. But we strike gold when we find a roadside car park for 7 euros, for three nights right on the bank of Lake Lucerne, at Weggis. We are here a because it looks nice and mainly because we need good weather for our next stop. We have a Lake to look out of the window, there are walking paths nearby, and Lucerne is a ferry ride away. The weather is changeable but we decide having already walked around some of the Lake we’ll take the Ferry to Lucerne, well ouch! €73 for an ½ hr ride that hurt!',
                        'Lucerne itself is an interesting, compact city, it’s two most visited places are The Chapel Bridge, a covered wooden footbridge spanning the River Reuse, named after the nearby St Peter’s Chapel, the bridge is unique in containing a number of interior paintings dating back to the 17th century, sadly along side',
                        'some of the bridge a fire destroyed many of them.',
                        'A beautiful surprise is The Lion of Lucerne, this was created in 1820/1 and commemorates the Swiss Guards whom were massacred in 1792 during the French Revolution, when revolutionaries stormed The Tulleries Palace in Paris. Mark Twain praised the sculpture of a mortally wounded lion as “the most mournful and moving piece of stone in the world” well it moved me to tears.',
                        'With good weather predicted we make our way to the mountain town of Grindelwald and a small campsite nestling under the Eiger. Not that we could see the mountain when we arrived as there was a blanket of cloud down. We wait patiently as the beauty that surround this valley reveals itself. The afternoon is sat with eyes agog at what is in front of us, binoculars peer at mountain tops and we follow the many that descend from their dizzying heights either by parachute, foot or gondola. Tomorrow we will enjoy it for ourselves.',
                        'So if Austria does hills then Switzerland has the mother of all hills or should I say Mountains and one in particular, Jungfrau. We are toying on whether should',
                        'go for it, it would be magnificent standing on the top of Europe and at 4,158m it is as high as you can go with little ,or very little effort! Why well a train or several trains transport you from a variety of starting points. The train itself takes 2.5hrs each way, but for us there is a but, aside from the £420 cost! (Oh yeah don\'t come to Switzerland unless you have a healthy bank account!?!) we have our four legged friend to consider. Leaving her in Harvey all day is out and after considerable thought we decide that it won’t be practicable keeping her entertained on a 5hr train journey and then subjecting her to a two hour walk at that altitude. Anyway we plan next time (if there is a next time!) to take the helicopter up and train it back down, for only an additional £300 bargain!',
                        'There is however a way we can get some altitude and some great views of both Jungfrau and the Eiger. That is to take the cable car to First at 2,168m and from there there are different walking options. So on the first bus from the campsite we',
                        'head up the Cable Car at 8am, luckily for us we share it with a girl who gives us great route tips and that sets the walking routes for the day. We add an additional 400m climb in the most gloriously sunny day imaginable, tomorrow the lift will close until the ski season and we consider ourselves very lucky to have had the opportunity to walk, sit, watch royal eagles, and embrace the beauty of this landscape. As we all know the pictures don\'t do it justice, and the Jungfrau trip would have been an experience but wouldn’t have touched our soul in the way this day did.',
                        'After all the walking and climbing there is really only one thing left to do in Switzerland for us and that is to take to some of its Thermal Waters, at Leukerbad. We just have to make a decision whether to drive some more mountain roads or take a train, easy answer, let the train take the strain. So we head to the station at Kandersteg and join the Lotschberg Tunnnel Train and after a relaxed 15min journey (despite the 75mm clearance as we boarded the train!!) deposit us 14.6km the',
                        'The train to the other sideThe train to the other side',
                        'The train to the other side',
                        'other side of the Eiger. Our longest tunnel of many in Switzerland.',
                        'Another, thankfulky short, twisting pass takes us uphill to the site of the Thermal Spa surrounded by majestic mountains. It is the best resting place we can think of to remember our time in Switzerland. The weather better than expected, as expensive as predicted, but as we leave Switzerland we know we will be back to explore more of this beautiful country.',
                        'P.S The answer to the above is Uzbekistan!'
                    ]
                }
            }
        }
    }
</script>

<style scoped>
.blog-content {
    font-family: 'Open Sans', sans-serif;
}
    .app-container {
        width: 70%;
        margin-right: auto;
        margin-left: auto;
    }
</style>
