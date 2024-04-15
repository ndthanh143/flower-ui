'use client';

import { configs } from '@/configs';
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback } from 'react';
import { useState } from 'react';

const containerStyle = {
  width: '100%',
  height: '500px',
};

const center = {
  lat: 10.946182,
  lng: 106.815896,
};

export function GoogleMapAddress() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: configs.googleMapApi,
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  const onLoad = useCallback(function callback(map: google.maps.Map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = useCallback(function callback(map: google.maps.Map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={19.81}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ scrollwheel: false, gestureHandling: 'cooperative' }}
    >
      <Marker position={center}>
        <InfoWindow position={center}>
          <Link
            prefetch
            href={
              'https://www.google.com/maps/place/THE+SUNNY+FLOWER/@10.946182,106.815896,21z/data=!4m14!1m7!3m6!1s0x3174d93587929823:0xddf05f8adb82ccef!2sTHE+SUNNY+FLOWER!8m2!3d10.9461746!4d106.81592!16s%2Fg%2F11l2vhv07l!3m5!1s0x3174d93587929823:0xddf05f8adb82ccef!8m2!3d10.9461746!4d106.81592!16s%2Fg%2F11l2vhv07l?hl=en&entry=ttu'
            }
            target='_blank'
            rel='noopener noreferrer'
          >
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div className='w-[200px] h-[100px]'>
                <Image
                  src='/open-graph.jpg'
                  alt='The Sunny Flower'
                  width={0}
                  height={0}
                  className='w-full h-full'
                  sizes='100vw'
                />
              </div>
              <div className='flex flex-col gap-2 mt-4'>
                <p
                  className={'text-base text-[#69402B] text-center tracking-widest'}
                  style={{ fontFamily: 'var(--font-logo-main)' }}
                >
                  THE SUNNY FLOWER
                </p>
                <p
                  className='text-sm text-[#69402B] text-center font-[400p tracking-wider'
                  style={{ fontFamily: 'var(--font-logo-sub)' }}
                >
                  Gift for your Life
                </p>
              </div>
            </div>
          </Link>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  ) : (
    <></>
  );
}
