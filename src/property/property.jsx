import { useEffect, useState } from "react"
export function Property() {
    const [objectStyle, setObjectStyle] = useState({ border: '', boxShadow: '' })
    useEffect(() => {
        setObjectStyle(
            {
                backgroundColor: "#d1ded4"

            }
        )
    })

    return (
        <div className="container-fluid w-75">

            <div className="p-4 m-4 card " style={{ backgroundColor: "#7ff09d" }}>
                <nav className="d-flex justify-content-between mt-3">
                    <input type="text" placeholder="Search..." className="input-group-text" />
                    <h2>Featured Listed Property</h2>
                    <p>View All</p>
                </nav>
                <div className="row p-4">
                    <div className="col card text-center p-4 " style={objectStyle}>
                        <div>
                            <img src="img 1.jpg" width={200} height={200} className="card-img-top rounded-2" />
                            <h4>REC Theaters - 907 Beckford DR, Henderson, NC 27536</h4>
                            <div className="d-flex">
                                <div>
                                    <p><span className="bi bi-people"></span> 3 Room</p>
                                    <p><span className="bi bi-droplet-half"></span>1 Bath </p>
                                </div>
                                <div>
                                    <div>
                                        <p><span className="bi bi-lamp-fill"></span> 4 Bed</p>
                                        <p><span className="bi bi-arrows-move"></span>732 SFT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h4>$7,255/month </h4>
                                <button className="btn btn-primary">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="col card text-center p-4" style={objectStyle}>
                        <div>
                            <img src="img 2.jpg" width={200} height={200} className="card-img-top" />
                            <h4>Costco Wholesale - 1021 oak Forest Ln, Myrtle Beach, SC</h4>
                            <div className="d-flex">
                                <div>
                                    <p><span className="bi bi-people"></span> 3 Room</p>
                                    <p><span className="bi bi-droplet-half"></span>1 Bath</p>
                                </div>
                                <div>
                                    <div>
                                        <p><span className="bi bi-fuel-bi bi-lamp-fill"></span> 4 Bed</p>
                                        <p><span className="bi bi-arrows-move"></span>732 SFT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h4>$7,255/month </h4>
                                <button className="btn btn-primary">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="col card text-center p-4" style={objectStyle}>
                        <div>
                            <img src="img 3.jpg" width={200} height={200} className="card-img-top" />
                            <h4>Regal North Hills - 4150 Main at North Hills st, Releigh</h4>
                            <div className="d-flex">
                                <div>
                                    <p><span className="bi bi-people"></span> 3 Room</p>
                                    <p><span className="bi bi-droplet-half"></span>1 Bath</p>
                                </div>
                                <div>
                                    <div>
                                        <p><span className="bi bi-lamp-fill"></span> 4 Bed</p>

<p><span className="bi bi-arrows-move"></span>732 SFT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h4>$5,256/month </h4>
                                <button className="btn btn-primary">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 p-4">
                    <div className="col card text-center p-4" style={objectStyle}>
                        <div>
                            <img src="img 4.jpg" width={200} height={200} className="card-img-top" />
                            <h4>Spring Lane Cinemas - 1351 Plaza Blvd, Sanford, NC 27330</h4>
                            <div className="d-flex">
                                <div>
                                    <p><span className="bi bi-people"></span> 3 Room</p>
                                    <p><span className="bi bi-droplet-half"></span>1 Bath</p>
                                </div>
                                <div>
                                    <div>
                                        <p><span className="bi bi-lamp-fill"></span> 4 Bed</p>
                                        <p><span className="bi bi-arrows-move"></span>732 SFT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h4>$7,255/month </h4>
                                <button className="btn btn-primary">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="col card text-center p-4" style={objectStyle}>
                        <div>
                            <img src="img 5.jpg" width={200} height={200} className="card-img-top" />
                            <div>
                                <h4>REC Theaters - 907 Beckford DR, Henderson, NC 27536</h4>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <p><span className="bi bi-people"></span> 3 Room</p>
                                    <p><span className="bi bi-droplet-half"></span>1 Bath</p>
                                </div>
                                <div>
                                    <div>
                                        <p><span className="bi bi-lamp-fill"></span> 4 Bed</p>
                                        <p><span className="bi bi-arrows-move"></span>732 SFT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h4>$7,255/month </h4>
                                <button className="btn btn-primary">Read more</button>
                            </div>
                        </div>
                    </div>
                    <div className="col card text-center p-4" style={objectStyle}>
                        <div>
                            <img src="img 6.jpg" width={200} height={200} className="card-img-top" />
                            <h4>Dollar General - 5416 Rock Querry Rd, Raleigh, NC 27610</h4>
                            <div className="d-flex">
                                <div>
                                    <p><span className="bi bi-people"></span> 3 Room</p>
                                    <p><span className="bi bi-droplet-half"></span>1 Bath</p>
                                </div>
                                <div>
                                    <div>
                                        <p><span className="bi bi-lamp-fill"></span> 4 Bed</p>
                                        <p> <span className="bi bi-arrows-move"></span>732 SFT</p>
                                    </div>
                                    </div>
                                    
</div>
                            <div className="d-flex justify-content-between">
                                <h4>$7,255/month </h4>
                                <button className="btn btn-primary">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )

}