import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const Contact = () => {
    return (
        <div id="contact">
            <div className="flex justify-center ">
                <div className="flex md:flex-row flex-col justify-center max-w-7xl m-4 ">
                    <div>
                        <div className="flex justify-center flex-col items-center">
                            <div className="text-white m-6 text-xl z-200"> Contact Us </div>
                            <div className="text-white m-6 z-200"> We are always here to help out whatever way we can : </div>
                           <Card className='m-2'>
                            <CardHeader>
                                <CardTitle>Address:</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>532/4/A, Akkalkot Road, After Iskon Temple, opposite Road of TATA motors, Solapur, Maharashtra 413006</p>
                                <p>Phone:&nbsp;
                                    <a href="tel:+91-99707-93972">
                                    099707 93972        
                                    </a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="tel:+91-088886-48516">        
                                    088886 48516
                                    </a>


                                </p>
                            </CardContent>
                           </Card>
                        </div>
                    </div>
                    <div className="w-3/4 lg:w-2/3 ">
                        <div className="w-3/4 lg:w-1/2 overflow-contain h-min">
                            <MapComponent/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}

export default Contact

const MapComponent = () => {
    return (
        <div className="m-4">
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="375"
            height="667"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=532%2F4%2FA%2C+Akkalkot+Road%2C+After+Iskon+Temple%2C+opposite+Road+of+TATA+motors%2C+Solapur%2C+Maharashtra+413006&t=&z=16&ie=UTF8&iwloc=&output=embed"
          ></iframe>
          <a href="https://www.analarmclock.com/"></a>
          <br />
          <a href="https://www.onclock.net/"></a>
          <style>
            {`
              .mapouter {
                position: relative;
                text-align: right;
                height: 667px;
                width: 375px;
              }
              .gmap_canvas {
                overflow: hidden;
                background: none !important;
                height: 667px;
                width: 375px;
              }
            `}
          </style>
          <a href="https://www.ongooglemaps.com">google map for my website</a>
        </div>
      </div>
        </div>
    );
  };