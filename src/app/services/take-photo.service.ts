import { Injectable } from "@angular/core";
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from "@capacitor/geolocation";
import { Platform } from '@ionic/angular';

@Injectable({
    providedIn: 'root',
})
export class TakePhotoService {
    photo: string | null = null;
    location: { latitud: number, longitud: number } | null = null;
    address: string | null = null;

    constructor(private platform: Platform) { }

    async takePhoto() {
        try {
            const cameraSource = this.platform.is('android') ? CameraSource.Photos : CameraSource.Camera;
            //tomar foto
            const image = await Camera.getPhoto({
                quality: 90,
                resultType: CameraResultType.Uri,
                source: cameraSource,
            });
            this.photo = image.webPath || null

            const coordinates = await Geolocation.getCurrentPosition()
            this.location = {
                latitud: coordinates.coords.latitude,
                longitud: coordinates.coords.longitude,
            }
            this.address = await this.getAddressFromCoordinates(
                this.location.latitud,
                this.location.longitud
            );

            return {
                photo: this.photo,
                location: this.location,
                address: this.address,
            };


        } catch (error) {
            console.error('Error al tomar foto o ubicación', error);
            return null;
        }
    }
    async getAddressFromCoordinates(latitude: number, longitude: number): Promise<string | null> {
        const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
        try {
          const response = await fetch(url);
          const data = await response.json();
          return data.display_name || 'Dirección no disponible';
        } catch (error) {
          console.error('Error al obtener la dirección:', error);
          return null;
        }
      }

}