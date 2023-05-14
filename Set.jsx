import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
function Set({ sdata }) {
    return (

        <>
            {sdata.map((ele, k) => {
                return (
                    <>
                        <Stack spacing={1} style={{ width: "22rem" }} className='mb-4'>
                            {/* For variant="text", adjust the height via font-size */}


                            {/* For other variants, adjust the size with `width` and `height` */}

                            <Skeleton variant="rectangular" animation="wave" width={"21rem"} height={200} className='rounded' />
                            <div className='d-flex justify-content-between'>
                                <Skeleton variant="text" animation="wave" width={"12rem"} />
                                <Skeleton variant="text" animation="wave" width={"5rem"} />
                            </div>
                            <div className='d-flex justify-content-between'>
                                <Skeleton variant="text" animation="wave" width={"12rem"} />
                                <Skeleton variant="text" animation="wave" width={"5rem"} />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <Skeleton variant="circuler" animation="wave" width={20} height={20} />
                                <Skeleton variant="text" animation="wave" width={"18rem"} />
                            </div>
                        </Stack>


                    </>
                )
            })}


        </>

    )
}

export default Set