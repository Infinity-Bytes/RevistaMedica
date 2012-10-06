//
//  NativeBridge.h
//  SampleMagazine
//
//  Created by David Diaz on 14/09/12.
//  Copyright (c) 2012 David Diaz. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "INativeBridge.h"
#import "INativeBridgeDelegate.h"
#import "INativeBridge.h"
#import "SBJson.h"

@interface NativeBridge : NSObject<INativeBridge>{
    SBJsonParser * parser;
    SBJsonWriter * writer;
}
@property(retain, nonatomic) id<INativeBridgeDelegate> nativeBridgeDelegate;


@end
