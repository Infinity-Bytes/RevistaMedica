//
//  INativeBridgeDelegate.h
//  SampleMagazine
//
//  Created by David Diaz on 14/09/12.
//  Copyright (c) 2012 David Diaz. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol INativeBridgeDelegate <NSObject>

-(void)handleCall:(NSString*)functionName args:(NSArray*)args callback: (int) callbackId;

@end
