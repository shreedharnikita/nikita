import React from 'react'
import Card from 'react-bootstrap/Card';
import "./Style.css"
function Cards({data}) {
    return (
        <>

            {data.map((element, k) => {
                return (
                    <>
                        <Card style={{ width: '22rem',border:"none" }} className='hov mb-4'>
                            <Card.Img variant='top' className='cd' src={element.imgdata} />
                            <div className='card-body' >
                                <div className="upper-data d-flex justify-content-between align-items-center">
                                    <h4 className='mt-2'>{element.rname}</h4>
                                    <span>{element.rating}8&nbsp;☆</span>
                                </div>
                                <div className="lower-data d-flex justify-content-between r">
                                    <h5>{element.address}</h5>
                                    <span>{element.price}</span>

                                </div>
                                <div className="extra"></div>
                            </div>


                        </Card>
                    </>
                )

            })
            }




        </>
    )
}

export default Cards