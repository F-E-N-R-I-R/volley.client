import { Injectable, Optional } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { ActionSheetController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import { Crop } from '@ionic-native/crop/ngx';

@Injectable()
export class ImageService {

    constructor(private camera: Camera,
                public actionSheetController: ActionSheetController,
                private file: File,
                private sanitizer: DomSanitizer,
                private crop: Crop,
                // @Optional() private webview: WebView,
    ) {
    }


    pickImage(sourceType) {
        const options: CameraOptions = {
            quality: 100,
            sourceType,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };

        this.camera.getPicture(options).then((imageData) => {
            this.sav(imageData);
        }, (err) => {
            // Handle error
        });
    }

    async selectImage() {
        const actionSheet = await this.actionSheetController.create({
            header: 'Select Image source',
            buttons: [{
                text: 'Load from Library',
                handler: () => {
                    this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
                }
            },
                {
                    text: 'Use Camera',
                    handler: () => {
                        this.pickImage(this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        await actionSheet.present();

        return true;
    }

    private async sav(tempImage) {
        const tempFilename = tempImage.substr(tempImage.lastIndexOf('/') + 1);
        const tempBaseFilesystemPath = tempImage.substr(0, tempImage.lastIndexOf('/') + 1);

        const newBaseFilesystemPath = this.file.dataDirectory;

        await this.file.copyFile(tempBaseFilesystemPath, tempFilename,
            newBaseFilesystemPath, tempFilename);

        const storedPhoto = newBaseFilesystemPath + tempFilename;
        const resolvedImg = (this as any).webview.convertFileSrc(storedPhoto);
        const safeImg = this.sanitizer.bypassSecurityTrustUrl(resolvedImg);
        this.crop.crop(storedPhoto, { quality: 100 })
            .then(
                newImage => {
                    const rI = (this as any).webview.convertFileSrc(newImage);
                    const sI = this.sanitizer.bypassSecurityTrustUrl(rI);
                    // this.form.controls.avatar.setValue(sI);
                },
                error => console.error('Error cropping image', error)
            );
    }
}
