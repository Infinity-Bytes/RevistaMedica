//
//  IPhotoViewController.h
//  SampleMagazine
//
//  Created by David Diaz on 13/09/12.
//  Copyright (c) 2012 David Diaz. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol IPhotoViewController <NSObject>

-(void) showPhotoViewBefore:(UIViewController *) viewController;
-(void) assignJsCallback: (int) callbackId;

@end
