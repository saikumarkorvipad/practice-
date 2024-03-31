import React from "react";
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello Saijonny</h1>
//     </div>
//   );
// }

// export default App;

// function App() {
//   return (
//     <div className="container">
//       <h1>Saijonny {20 + 25}</h1>
//       <p>Lorem, ipsum
//         dolor sit amet c
//         onsectetur adipisicing elit. Velit, obc
//         aecati qui nihil nisi quisquam dolorum minima n
//         ulla animi recusandae repellat soluta conse
//         quatur,
//         mollitia quam? Temporibus mollitia
//         excepturi non quas rem?</p>
//     </div>
//   )
// };

// export default App;

// const App = () => {
//     return (
//         <section className="container">
//             <h1>Hello {new Date().toLocaleTimeString()}</h1>
//         </section>
//     )
// }

// export default App;
// const InnerComponent = () => {
//     return <h1>InnerComponent</h1>
// }

// const PrintName = () => {
//     return <InnerComponent />
// }

// const App = () => {

//     const user = {
//         firstName: "Emma",
//         secondName: "Watson"
//     }
//     return (
//         <section>
//             {/* <h1>Hello {user.firstName}</h1> */}
//             <PrintName />
//             <PrintName />
//             <PrintName />
//             <PrintName />
//             <PrintName />
//             <PrintName />
//             <PrintName />
//             <PrintName />
//         </section>
//     )

// }
// const App = () => {
//     return (
//         <section className="menu">
//             <Movie firstName="Saijonny" lastName="Korvipad" />

//         </section>
//     );
// }

// const Movie = (props) => {
//     console.log(props);

//     return (
//         <article>
//             <h1>{props.firstName}</h1>
//             <ImageComponent />
//             <Title />
//         </article>
//     )
// }
// const ImageComponent = () => {
//     return (
//         <div>
//             <img src="https://static.vecteezy.com/system/resources/thumbnails/025/284/015/small_2x/close-up-growing-beautiful-forest-in-glass-ball-and-flying-butterflies-in-nature-outdoors-spring-season-concept-generative-ai-photo.jpg" alt="Saijonny" />
//         </div>
//     )
// }

// const Title = () => {

//     return (
//         <section id="menu">
//             <h1>This a Beautiful Nature</h1>
//         </section>
//     )
// }

const data = [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "url": "https://via.placeholder.com/600/54176f",
        "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
        "albumId": 1,
        "id": 9,
        "title": "qui eius qui autem sed",
        "url": "https://via.placeholder.com/600/51aa97",
        "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
        "albumId": 1,
        "id": 10,
        "title": "beatae et provident et ut vel",
        "url": "https://via.placeholder.com/600/810b14",
        "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    },
    {
        "albumId": 1,
        "id": 11,
        "title": "nihil at amet non hic quia qui",
        "url": "https://via.placeholder.com/600/1ee8a4",
        "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
    },
    {
        "albumId": 1,
        "id": 12,
        "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        "url": "https://via.placeholder.com/600/66b7d2",
        "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
    },
    {
        "albumId": 1,
        "id": 13,
        "title": "repudiandae iusto deleniti rerum",
        "url": "https://via.placeholder.com/600/197d29",
        "thumbnailUrl": "https://via.placeholder.com/150/197d29"
    },
    {
        "albumId": 1,
        "id": 14,
        "title": "est necessitatibus architecto ut laborum",
        "url": "https://via.placeholder.com/600/61a65",
        "thumbnailUrl": "https://via.placeholder.com/150/61a65"
    },
    {
        "albumId": 1,
        "id": 15,
        "title": "harum dicta similique quis dolore earum ex qui",
        "url": "https://via.placeholder.com/600/f9cee5",
        "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
    },
    {
        "albumId": 1,
        "id": 16,
        "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
        "url": "https://via.placeholder.com/600/fdf73e",
        "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
    },
    {
        "albumId": 1,
        "id": 17,
        "title": "natus doloribus necessitatibus ipsa",
        "url": "https://via.placeholder.com/600/9c184f",
        "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
    },
    {
        "albumId": 1,
        "id": 18,
        "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
        "url": "https://via.placeholder.com/600/1fe46f",
        "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
    },
    {
        "albumId": 1,
        "id": 19,
        "title": "perferendis nesciunt eveniet et optio a",
        "url": "https://via.placeholder.com/600/56acb2",
        "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
    },
    {
        "albumId": 1,
        "id": 20,
        "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
        "url": "https://via.placeholder.com/600/8985dc",
        "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
    },
    {
        "albumId": 1,
        "id": 21,
        "title": "ad et natus qui",
        "url": "https://via.placeholder.com/600/5e12c6",
        "thumbnailUrl": "https://via.placeholder.com/150/5e12c6"
    },
    {
        "albumId": 1,
        "id": 22,
        "title": "et ea illo et sit voluptas animi blanditiis porro",
        "url": "https://via.placeholder.com/600/45601a",
        "thumbnailUrl": "https://via.placeholder.com/150/45601a"
    },
    {
        "albumId": 1,
        "id": 23,
        "title": "harum velit vero totam",
        "url": "https://via.placeholder.com/600/e924e6",
        "thumbnailUrl": "https://via.placeholder.com/150/e924e6"
    },
    {
        "albumId": 1,
        "id": 24,
        "title": "beatae officiis ut aut",
        "url": "https://via.placeholder.com/600/8f209a",
        "thumbnailUrl": "https://via.placeholder.com/150/8f209a"
    },
    {
        "albumId": 1,
        "id": 25,
        "title": "facere non quis fuga fugit vitae",
        "url": "https://via.placeholder.com/600/5e3a73",
        "thumbnailUrl": "https://via.placeholder.com/150/5e3a73"
    },
    {
        "albumId": 1,
        "id": 26,
        "title": "asperiores nobis voluptate qui",
        "url": "https://via.placeholder.com/600/474645",
        "thumbnailUrl": "https://via.placeholder.com/150/474645"
    },
    {
        "albumId": 1,
        "id": 27,
        "title": "sit asperiores est quos quis nisi veniam error",
        "url": "https://via.placeholder.com/600/c984bf",
        "thumbnailUrl": "https://via.placeholder.com/150/c984bf"
    },
    {
        "albumId": 1,
        "id": 28,
        "title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
        "url": "https://via.placeholder.com/600/392537",
        "thumbnailUrl": "https://via.placeholder.com/150/392537"
    },
    {
        "albumId": 1,
        "id": 29,
        "title": "aut ipsam quos ab placeat omnis",
        "url": "https://via.placeholder.com/600/602b9e",
        "thumbnailUrl": "https://via.placeholder.com/150/602b9e"
    },
    {
        "albumId": 1,
        "id": 30,
        "title": "odio enim voluptatem quidem aut nihil illum",
        "url": "https://via.placeholder.com/600/372c93",
        "thumbnailUrl": "https://via.placeholder.com/150/372c93"
    }
];

const App = () => {
    return (
        <section className="post-man">
            {
                data.map((eachObj) => {
                    const { id, title, thumbnaliUrl, url } = eachObj
                    return <Profile
                        key={id}
                        id={id}
                        thumbnailUrl={thumbnaliUrl}
                        url={url}
                    />

                })
            }
        </section>
    )
}



const Profile = (props) => {
    const { id, title, thumbnailUrl, url } = props;
    return <article className="post">
        <img src=" https://via.placeholder.com/150/372c93" alt="image" /> <br />
        <h2 className="title">odio enim voluptatem quidem aut nihil illum</h2>
        <a href="https://via.placeholder.com/150/372c93" className="button">Details</a>

    </article >
}







export default App;




