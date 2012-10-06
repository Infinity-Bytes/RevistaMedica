//
//  IPhotoViewDelegate.h
//  SampleMagazine
//
//  Created by David Diaz on 13/09/12.
//  Copyright (c) 2012 David Diaz. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol IPhotoViewDelegate <NSObject>

-(void) savePhoto:(UIImage*) image;
-(void) assignJsCallback: (int) callbackId;
-(void) assignDefaultBackground;

@end
