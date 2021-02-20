import React, {useEffect} from 'react'

import imgTemplate from '../media/image1.jpg'
import './styles/home.css'

function Home(props){


    return <div className="home">
        
        <h2>Home</h2>
        <div className="home-content">
            <div className="home-ph">
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id nunc sed arcu luctus efficitur. Aenean ultricies purus pulvinar lacus congue, eleifend faucibus nibh pellentesque. Mauris ac orci sit amet urna rutrum egestas tincidunt quis nunc. Sed non est posuere, mattis sem in, convallis dolor. Pellentesque dictum nisi ultricies neque vehicula, eget imperdiet mi convallis. Cras sit amet arcu interdum, semper sem ac, suscipit urna. Maecenas vel nunc sodales, fermentum tortor in, aliquet odio. Cras in placerat quam.

            Duis imperdiet erat quam, ac venenatis dui posuere eget. Donec faucibus velit vitae eros scelerisque consequat. Curabitur aliquet vitae est vitae venenatis. Maecenas sit amet venenatis elit, ut congue turpis. Nullam in ante congue, consectetur massa vitae, maximus leo. Nulla fringilla turpis sed neque vestibulum sagittis. In pharetra ipsum id odio congue aliquet. Sed volutpat nisi nec consequat tincidunt. Cras ut quam id sem ullamcorper tincidunt. Fusce ullamcorper at tortor eu cursus. Praesent sit amet vestibulum est.</p>
            </div>
            <div className="home-img">
                <img src={imgTemplate} />
                <p>Image title</p>
            </div>
            <div className="home-img">
                <img src={imgTemplate} />
                <p>Image title</p>
            </div>
            <div className="home-ph">
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id nunc sed arcu luctus efficitur. Aenean ultricies purus pulvinar lacus congue, eleifend faucibus nibh pellentesque. Mauris ac orci sit amet urna rutrum egestas tincidunt quis nunc. Sed non est posuere, mattis sem in, convallis dolor. Pellentesque dictum nisi ultricies neque vehicula, eget imperdiet mi convallis. Cras sit amet arcu interdum, semper sem ac, suscipit urna. Maecenas vel nunc sodales, fermentum tortor in, aliquet odio. Cras in placerat quam.

            Duis imperdiet erat quam, ac venenatis dui posuere eget. Donec faucibus velit vitae eros scelerisque consequat. Curabitur aliquet vitae est vitae venenatis. Maecenas sit amet venenatis elit, ut congue turpis. Nullam in ante congue, consectetur massa vitae, maximus leo. Nulla fringilla turpis sed neque vestibulum sagittis. In pharetra ipsum id odio congue aliquet. Sed volutpat nisi nec consequat tincidunt. Cras ut quam id sem ullamcorper tincidunt. Fusce ullamcorper at tortor eu cursus. Praesent sit amet vestibulum est.</p>
            </div>
        </div>
    </div>
}

export default Home