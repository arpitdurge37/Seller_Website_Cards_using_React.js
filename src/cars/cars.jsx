import { useEffect, useState } from "react"
export function Cars() {
    const [objectStyle, setObjectStyle] = useState({ border: '', boxShadow: '' })
    useEffect(() => {
        setObjectStyle(
            {
                backgroundColor: "#d8e3ed"

            }
        )
    })

    return (
        <div className="container-fluid w-75">

            <div className="p-4 m-4 card " style={{ backgroundColor: "#abdedd" }}>
                <nav className="d-flex justify-content-between mt-3">
                    <input type="text" placeholder="Search..." className="input-group-text" />
                    <p>Relevance</p>
                    <p>All brands</p>
                </nav>
                <div className="row p-4">
                    <div className="col card text-center p-4 " style={objectStyle}>
                        <div>
                            <img src="toyota.jpg" width={200} height={200} className="card-img-top rounded-2" />
                            <h4>Toytota Rev 4</h4>
                            <div className="d-flex">
                                <div>
                                    <p><span className="bi bi-people"></span> 4 people</p>
                                    <p>6.1 km/1-ltr </p>
                                </div>
                                <div>
                                    <div>
                                        <p><span className="bi bi-fuel-pump-diesel"></span> Hybrid</p>
                                        <p><span className="bi bi-gear"></span>Automatic</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h4>$440/month </h4>
                                <button className="btn btn-primary">Rent Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col card text-center p-4" style={objectStyle}>
                        <div>
                            <img src="bmw 3 series.jpg" width={200} height={200} className="card-img-top" />
                            <h4>BMW 3 Series</h4>
                            <div className="d-flex">
                                <div>
                                    <p><span className="bi bi-people"></span> 4 people</p>
                                    <p>8.2km/1-ltr</p>
                                </div>
                                <div>
                                    <div>
                                        <p><span className="bi bi-fuel-pump-diesel"></span> Gasoline</p>
                                        <p><span className="bi bi-gear"></span>Automatic</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h4>$440/month </h4>
                                <button className="btn btn-primary">Rent Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col card text-center p-4" style={objectStyle}>
                        <div>
                            <img src="volkswagon.jpg" width={200} height={200} className="card-img-top" />
                            <h4>Volkswagen Cross</h4>
                            <div className="d-flex">
                                <div>
                                    <p><span className="bi bi-people"></span> 4 people</p>
                                    <p>5.3km/1 ltr</p>
                                </div>
                                <div>
                                    <div>
                                        <p><span className="bi bi-fuel-pump-diesel"></span> Gasoline</p>

<p><span className="bi bi-gear"></span>Automatic</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h4>$440/month </h4>
                                <button className="btn btn-primary">Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-4 p-4">
                    <div className="col card text-center p-4" style={objectStyle}>
                        <div>
                            <img src="cadillac.jpg" width={200} height={200} className="card-img-top" />
                            <h4>Cadillac Escalade</h4>
                            <div className="d-flex">
                                <div>
                                    <p><span className="bi bi-people"></span> 4 people</p>
                                    <p>7.7 km/1 ltr</p>
                                </div>
                                <div>
                                    <div>
                                        <p><span className="bi bi-fuel-pump-diesel"></span> Hybrid</p>
                                        <p><span className="bi bi-gear"></span>Automatic</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h4>$440/month </h4>
                                <button className="btn btn-primary">Rent Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col card text-center p-4" style={objectStyle}>
                        <div>
                            <img src="bmw 4 series gti.jpg" width={200} height={200} className="card-img-top" />
                            <div>
                                <h4>BMW 4 Series GTI</h4>
                            </div>
                            <div className="d-flex">
                                <div>
                                    <p><span className="bi bi-people"></span> 4 people</p>
                                    <p>7.6 km/1 ltr</p>
                                </div>
                                <div>
                                    <div>
                                        <p><span className="bi bi-fuel-pump-diesel"></span> Gasoline</p>
                                        <p><span className="bi bi-gear"></span>Automatic</p>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h4>$440/month </h4>
                                <button className="btn btn-primary">Rent Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col card text-center p-4" style={objectStyle}>
                        <div>
                            <img src="bmw 4 series.jpg" width={200} height={200} className="card-img-top" />
                            <h4>BMW 4 Series</h4>
                            <div className="d-flex">
                                <div>
                                    <p><span className="bi bi-people"></span> 4 people</p>
                                    <p>7.2 km/1 ltr</p>
                                </div>
                                <div>
                                    <div>
                                        <p><span className="bi bi-fuel-pump-diesel"></span> Gasoline</p>
                                        <p> <span className="bi bi-gear"></span>Automatic</p>
                                    </div>
                                    </div>
                                    
</div>
                            <div className="d-flex justify-content-between">
                                <h4>$440/month </h4>
                                <button className="btn btn-primary">Rent Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )

}