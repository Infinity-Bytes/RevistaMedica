//
//  MasterControl.h
//  SampleMagazine
//
//  Created by David Diaz on 11/09/12.
//  Copyright (c) 2012 David Diaz. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "IMagazineViewController.h"
#import "IMagazineDelegate.h"
#import "IPhotoViewController.h"
#import "IPhotoViewDelegate.h"
#import "IFileService.h"
#import "INativeBridge.h"
#import "INativeBridgeDelegate.h"

@interface MasterControl : NSObject<IMagazineDelegate,IPhotoViewDelegate, INativeBridgeDelegate>

@property(nonatomic,retain) id<IMagazineViewController>  magazineController;
@property(nonatomic,retain) id<IPhotoViewController>  photoController;
@property(nonatomic,retain) id<IFileService> fileService;
@property(nonatomic,retain) id<INativeBridge> nativeBridge;

@end
