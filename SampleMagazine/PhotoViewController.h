//
//  PhotoViewController.h
//  SampleMagazine
//
//  Created by David Diaz on 13/09/12.
//  Copyright (c) 2012 David Diaz. All rights reserved.
//

#import <UIKit/UIKit.h>
#import "IPhotoViewController.h"
#import "IPhotoViewDelegate.h"

@interface PhotoViewController : UIViewController<UIImagePickerControllerDelegate, UINavigationControllerDelegate,IPhotoViewController >{
    int _callbackId;
}

@property (nonatomic, retain) UIImagePickerController *imagePicker;
@property(nonatomic, retain) id<IPhotoViewDelegate> photoViewDelegate;

- (void)presentFromController:(UIViewController *)aController withSourceType:(UIImagePickerControllerSourceType)sourceType;

@end
