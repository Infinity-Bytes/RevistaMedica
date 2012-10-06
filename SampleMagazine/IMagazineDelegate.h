//
//  IMagazineDelegate.h
//  SampleMagazine
//
//  Created by David Diaz on 12/09/12.
//  Copyright (c) 2012 David Diaz. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "INativeBridge.h"

@protocol IMagazineDelegate <NSObject>

-(id<INativeBridge>) obtainNativeBridge;
-(void) sendPhotoBackgorundOrientation: (NSString *) orientation;

@end
