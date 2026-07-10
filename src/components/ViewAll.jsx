import React, { useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewAll = () => {
    const[data,changeData]=useState(

        [

            {"name":"The Alchemist","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-peerHy48VlPZfjfl5ghGyKJml1DYlzE4zWi9miEUow&s=10","author":"Paulo Coelho","price":"₹399"},
            {"name":"Atomic Habits","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0nC48c3oHzUUAsaBOaHKMzeTHsll_aBhCnuagFw0RQ&s","author":"James Clear","price":"₹500"},
            {"name":"Rich Dad Poor Dad","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe8js0uhkpiYsjDrszueOhpO6iDZsuNrnCPGbQ_HHtuw&s=10","author":"Robert Kiyosaki","price":"₹1000"},
            {"name":"Ikigai","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnVW7BcWY6tHpBdlO-tD4v3DL44CaIo6Ec-SxNLcL9QQ&s=10","author":"Héctor García","price":"₹560"},
            {"name":"Wings of Fire","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKHjkTFLjFElTxwXiZCr-k0eotQTP7qgIMokpU44640g&s=10","author":" A. P. J. Abdul Kalam","price":"₹399"},
            {"name":"Think and Grow Rich","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwiMV3gE044_P_gMgb-EytL1-t1JoizPnyHYSof6Epyg&s=10","author":"Napoleon Hill","price":"₹6777"},
            {"name":"Harry Potter","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlatr5wxRju7BDKEfiDx8nOrpQcVKGSB3FJRVe0RQ1-w&s=10","author":"J. K. Rowling","price":"₹456"},
            {"name":"The Psychology of Money","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWc2Y9goi01hL3-4Il_9pv6sXxTgqkN4N_f6Zv5QNysQ&s","author":"Morgan Housel","price":"₹400"},
            {"name":"Do Epic Shit","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-sutuetB_h6koTPgY7VMfomfkFm_PpmgEoTgGy160ag&s=10","author":"Ankur Warikoo","price":"₹799"}

        ]

    )
    return (
        <div>
            <h1><center>PRODUCTS</center></h1>
<NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            

                            {data.map(

                                (value,index) => {

                                    return (
                                        <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                                                       <div className="card">
    <img
        src={value.avatar}
        className="card-img-top"
        alt="Book Cover"
        style={{ height: "250px", objectFit: "cover" }}
    />

    <div className="card-body">
        <h5 className="card-title">{value.name}</h5>
        <p className="card-text"><b>Author:</b> Paulo Coelho</p>
        <p className="card-text"><b>Price:</b> ₹399</p>
        <a href="#" className="btn btn-primary w-100">Add to Cart</a>
    </div>
</div>
                                     </div>   
                                    )

                                }

                            )}

                            
   

                            
                            
                           
                           
                           
                          
                        
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default ViewAll